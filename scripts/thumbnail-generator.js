const fs = require('fs'),
    path = require('path'),
    thumb = require('node-thumbnail').thumb;

const PICTURES_FOLDER = path.resolve(__dirname, '../public/img/fotos'),
    PICTURES_FOLDER_NAME = 'fotos',
    THUMBNAILS_FOLDER_NAME = 'fotos-thumb';

const Folders = {
    flatten(lists) {
        return lists.reduce((a, b) => a.concat(b), []);
    },

    getDirectories(srcpath) {
        return fs
            .readdirSync(srcpath)
            .map((file) => path.join(srcpath, file))
            .filter((path) => fs.statSync(path).isDirectory());
    },

    getDirectoriesRecursive(srcpath) {
        return [
            srcpath,
            ...Folders.flatten(
                Folders.getDirectories(srcpath).map(
                    Folders.getDirectoriesRecursive
                )
            ),
        ];
    },

    createDirectory(dirName) {
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }
    },

    syncFoldersStructure(base, oldName, newName) {
        Folders.getDirectoriesRecursive(base).forEach((folder) => {
            Folders.createDirectory(folder.replace(oldName, newName));
        });
    },
};

Folders.syncFoldersStructure(
    PICTURES_FOLDER,
    PICTURES_FOLDER_NAME,
    THUMBNAILS_FOLDER_NAME
);
const foldersList = Folders.getDirectoriesRecursive(PICTURES_FOLDER);

foldersList.forEach((folder) => {
    thumb(
        {
            source: folder, // could be a filename: dest/path/image.jpg
            destination: folder.replace(
                PICTURES_FOLDER_NAME,
                THUMBNAILS_FOLDER_NAME
            ),
            width: 200,
            skip: true,
            ignore: true,
        },
        function (files, err, stdout, stderr) {
            console.log('All done!');
        }
    )
        .then(function () {
            console.log('Success');
        })
        .catch(function (e) {
            console.log('Error', e.toString());
        });
});
