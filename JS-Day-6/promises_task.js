function downloaddata(url){
return new Promise (function download(resolve, reject){
    console.log("Starting to download data from", url);
    setTimeout(function down() {
        console.log("Downloading completed");
        const content = "ABCDEF"; // assume dummy download content
        resolve(content);
    },3000);
    })
}

function writefile(data) {
    return new Promise (function write(resolve, reject){
    console.log("Writing to file with data",data);
    setTimeout(function written() {
        console.log("Writing completed");
        const filename = "Dummy File.txt"; // assume dummy download content
        resolve(filename);
    },5000);
    })
}

function uploadfile(url, file) {
    return new Promise (function upload(resolve, reject){
    console.log("Uploading file to:",url);
    setTimeout(function uploaded() {
        console.log("upload completed");
        const uploadfile = "Success"; // the state
        resolve(uploadfile);
    },2000);
    })
}


downloaddata("google.com")
  .then(function(content) {
    console.log("Downloaded the file:", content);
    return writefile(content);
  })
  .then(function(filename) {
    console.log("Written the file with name:", filename);
    return uploadfile("gdrive.com", filename);
  })
  .then(function(uploadStatus) {
    console.log("File upload status:", uploadStatus);
});


// I have done with nested promises below not the right way same as callback hell in promises

// downloaddata("google.com").then(function(content) {
//     console.log("Downloaded the file :", content);
//     writefile(content).then(function(filename){
//         console.log("Written the file with name:",filename);
//         uploadfile("gdrive.com",filename).then(function(uploadfile){
//             console.log("File upload status :",uploadfile)
//         })
//     })
// }
// );



