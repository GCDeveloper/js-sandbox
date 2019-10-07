const repeatString = require('./utils/repeatString.js');
const recursivelyReadFolders = require('./recursion/recursivelyReadFolders.js')
  .default;

recursivelyReadFolders('./', (foldername, { level }) => {
  console.log(repeatString('--', level), foldername);
});
