// function fetchcustom(url, fn){  //here fn is the callback and fetch custom is a hof 
//     console.log("Downloading");
//     setTimeout(function exec(){
//         console.log("Download Done");
//         let response = "Dummy Data"
//         fn(response);
//         console.log("Reported")
//     }
//     ,2000);
// }

// let response = fetchcustom("url", showresponse) 


// function showresponse(response, fn){
//     console.log(`download response is ${response}`)
//     fn()

    
// };

// function filesave(url){
//     console.log("upload to", url);

// }

let inputstring = "name:rajan,age:24"


let output = inputstring.split(","); 
for(let i = 0; i<output.length; i++){
    console.log(output[i])
    }
