const fs = require('fs');
const path = require('path');
function logFolders(folders) {
  console.log('folders:', folders.join(', ') + '.');
}
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
async function recursivelyReadFolders(pathstring) {
  for await (let foldername of readFoldersGenerator(pathstring)) {
    console.log('foldername:', foldername);
    //recursivelyReadFolders(path.join(pathstring, foldername))
  }
}
recursivelyReadFolders('./');

// fs.readdir('./', (err, names) => {
//   const folders = names.filter(name => !name.includes('.'));
//   console.log('folders:', folders.join(', ') + '.');
//   const filedata = Promise.all(
//     folders.map(async foldername => {
//       fs.readdir(path.join('./', foldername));
//     })
//   );
//   fs.readFile;
// });
