function showresponse(response){
    console.log(`download response is ${response}`)
};

function fetchcustom(url, fn){  //here fn is the callback and fetch custom is a hof 
    console.log("Downloading");
    setTimeout(function exec(){
        console.log("Download Done");
        let response = "Dummy Data"
        fn(response);
        console.log("Reported")
    }
    ,2000);
}

let response = fetchcustom("url", showresponse) 


function filename(name, fetchcustom){
    console.log("file name is", response)
}



