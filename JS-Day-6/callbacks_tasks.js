// write a function to download data from a url

function downloaddata(url, fn){
    console.log("Checking the url", url);
    setTimeout(function exec(){
        console.log("Downloading");
        let arr = "Dummy Data";
        fn(arr);
    },5000);
    
}
function printdata(value, next){
    console.log("Download file is ", value);
    if (next){next(value)};
}


function returnfile(filename, fn){
    console.log("Writing data to the file", filename)
    setTimeout(function exec(){
        console.log("Compressing")
        let file = "Dummy File"
        fn(file)
    },3000);
}

function uploadfile(filename, fn) {
    console.log("Uploading the file:", filename);
    setTimeout(function exec() {
        console.log("Uploading...");
        let file = "Dummy File Uploaded";
        fn(file);
    }, 3000);
}


downloaddata("gmail.com", function (data) {
    printdata(data, function () {
        returnfile("myfile.txt", function (file) {
            uploadfile(file, function (uploadedFile) {
                console.log("Done! End uploaded:", uploadedFile);
            });
        });
    });
});