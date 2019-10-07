const fs = require('fs');
const path = require('path');

async function readFolders(pathstring) {
  return new Promise((resolve, reject) => {
    fs.readdir(pathstring, (err, names) => {
      if (err) reject(err);
      //filter out filenames, only get folder names.
      const foldernames = names.filter(name => !name.includes('.'));
      resolve(foldernames);
    });
  });
}

async function* readFoldersGenerator(pathstring) {
  try {
    const folders = await readFolders(pathstring);

    for (foldername of folders) {
      yield foldername;
    }
  } catch (err) {
    throw err;
  }
}

async function recursivelyReadFolders(
  pathstring,
  cb = Function.prototype,
  options = {},
  level = 0
) {
  try {
    const { childrenFirst = true } = options;
    level++;
    //for await... of requires Node.js 10+
    for await (let foldername of readFoldersGenerator(pathstring)) {
      const fullPath = path.join(pathstring, foldername);
      cb(foldername, { fullPath, pathstring, level });
      const recurse = recursivelyReadFolders.bind(
        this,
        fullPath,
        cb,
        options,
        level
      );
      if (childrenFirst) {
        await recurse();
      } else {
        recurse();
      }
    }
  } catch (err) {
    throw err;
  }
}
module.exports = {
  default: recursivelyReadFolders,
  readFolders,
  recursivelyReadFolders,
};
