let headers = {
  Authorization: `Token 3b5138445f97d0cfd09f33e455f434ec91b43dbc`,
};
let url =
  "https://backend-prod.pollinate.co/api/v1/collective/?past_events=true";
/* Promise */
function myDisplayer(value) {
  console.log(value);
}
function getData() {
  let myPromise = new Promise(function fetchGet(myResolve, myReject) {
    const res = fetch(url, {
      method: "GET",
      headers: headers,
    });
    console.log(res, "response");
    if (res.status >= 400) {
      return myReject("error 404");
    } else {
      return myResolve(res);
    }
  });
  myPromise.then(
    async function (value) {
      let data = await value.json();
      myDisplayer(data);
    },
    function (error) {
      myDisplayer(error);
    }
  );
}
