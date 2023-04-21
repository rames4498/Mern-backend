/*
const access = require('./student');

console.log(access);
// we cant access the data inside this file directly
//console.log(student);

// we need to export from student file

// now this access is nothing but student, we can call it as any way here by naming it


// now export mutiple different things 

console.log(access.student, access.marks);
*/
//now we will access only certain things
/*
const { student } = require('./class');

console.log(student,marks);// only student is accessed


const { student,marks } = require('./class');

console.log(student, marks);// both are accessed
*/
const os = require('os');

console.log(os.platform(), os.homedir());
// several different modules available like this in nodejs

//now File system to read write and delte files

// import fs module

const fs = require('fs');
/*
// aynchronous, it wont block the rest of the code while dealing with this file
//fs.readFile('./docs/data2.txt', (err, data) => { cant access error file
fs.readFile('./docs/data.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
*/

//now write file 
/*
fs.writeFile('./docs/data.txt', 'Hellllo everyone', () => {
    console.log('file was written');
});
fs.writeFile('./docs/dataNew.txt', 'Hellllo this is newFile', () => {
    console.log('file was written');
});
console.log('final line');
*/
//directory
/*
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);

    }
    console.log('folder created');
})
*/
// running it again create error
// check whether it exists ornmot
// only if this folder doestn exist then it will go and create it

if (!fs.existsSync('./assests')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);

        }
        console.log('folder created');
    });
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder delted');
    })
}


// delete files 
// need to check whether they exists or not first of all

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('.docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}




















