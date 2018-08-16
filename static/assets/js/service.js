var baseURL = "https://byw1s98hik.execute-api.ap-south-1.amazonaws.com/dev/androidapp/";

function getHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
}

function get(url) {
  return $.ajax({
    type: "GET",
    url: "" + baseURL + url,
    headers: getHeaders()
  });
}

function post(url, data) {
  return $.ajax({
    type: "POST",
    url: "" + baseURL + url,
    headers: getHeaders(),
    data: JSON.stringify(data)
  });
}
