function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callBack(result){
    result.json().then(logResponseBody);
}

var sendObj={
    method: "GET",
};

fetch("http://localhost:3000/handleSum?counter=10",sendObj).then(callBack);