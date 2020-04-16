// Example GET request

const xhr = new XMLHttpRequest;

const url = "https://api-to-call.com/endpoint"

xhr.responseType = "json";

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  };
};

xhr.open("GET", url)

xhr.send()



// Example POST request

const xhr = new XMLHttpRequest();

const url = "https://api-to-call.com/endpoint";

const data = JSON.stringify({id: '200'});

xhr.responseType = "json"

JSON.stringify({id: '200'});

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}

xhr.open('POST', url)

xhr.send(data)


