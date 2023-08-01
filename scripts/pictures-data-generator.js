const { PICTURES_FOLDER, Folders } = require('./file-utils');

const foldersList = Folders.getDirectoriesRecursive(PICTURES_FOLDER);

const finalList = [];

foldersList.forEach((folder) => {
    const folderObj = {
        name: folder
            .replace(/.*\/public\/img\/fotos(.*)/g, '$1')
            .replace(/\//g, '/'),
        files: Folders.getFiles(folder).map((a) =>
            a.replace(/.*\/public\/img\/fotos(.*)/g, '$1').replace(/\//g, '/')
        ),
    };

    if (folderObj.files.length) {
        finalList.push(folderObj);
    }
});

console.log(991, finalList);

Folders.writeFile(
    '../src/data/database/pictures-data.ts',
    `
import { PictureCollection } from 'data/@types/PictureInterface';

export const picturesList: PictureCollection[] = ${JSON.stringify(finalList)};

`
);

// console.log(234, Folders.getDirectoriesRecursive(PICTURES_FOLDER));
// console.log(
//     3333,
//     Folders.getFiles(PICTURES_FOLDER + '/2006').map((a) =>
//         a.replace(/.*\/public\/img\/fotos(.*)/g, '$1')
//     )
// );

