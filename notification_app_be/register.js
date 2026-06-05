const axios = require("axios");

async function register() {

 try {

   const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email:"23bq1a0522@vvit.net",
        name:"BATCHALAKURI UDAY KIRAN",
        mobileNo:"9392701374",
        githubUsername:"UdayKiranBatchalakuri",
        rollNo:"23BQ1A0522",
        accessCode:"QQdEYy"
      }
   );

   console.log(response.data);

 } catch(err){
   console.log(err.response?.data);
 }

}

register();