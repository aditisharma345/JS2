/* callback */
let headers = {
  Authorization: `Token 3b5138445f97d0cfd09f33e455f434ec91b43dbc`,
};
let url =
  "https://backend-prod.pollinate.co/api/v1/collective/?past_events=true";

function myDisplayer(value) {
  console.log(value);
}

async function fetchGet() {
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  console.log(res, "responeese");
  if (res.status >= 400) {
    console.err("error 404");
  } else {
    {
      const json = await res.json();
      console.info(json, "data");
    }
  }
}

function callApi() {
  fetchGet(myDisplayer);
}
