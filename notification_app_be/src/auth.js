const axios = require("axios");

async function auth() {

 const response = await axios.post(
  "http://4.224.186.213/evaluation-service/auth",
  {
    email:"23bq1a0522@vvit.net",
    name:"batchalakuri uday kiran",
    rollNo:"23bq1a0522",
    accessCode:"QQdEYy",
    clientID:"cf19c5ad-03ba-4868-92cf-2b84c65131ce",
    clientSecret:"eEcHMyfaduPHkaFK"
  }
 );

 console.log(response.data);

}

auth();