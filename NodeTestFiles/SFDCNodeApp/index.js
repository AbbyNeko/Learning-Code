let SalesforceConnection = require("node-salesforce-connection");

let sfConn = new SalesforceConnection();

sfConn.soapLogin({
  hostname: "na35.salesforce.com",
  apiVersion: "39.0",
  username: "jeremy.mccourt@emergetech.com",
  password: "eMergetech01SpssVEJZYgDrjCsmQ7HK8KBD5",
});


let recentAccounts = sfConn.rest("/services/data/v39.0/query/?q="
  + encodeURIComponent("select Id, Name from Account where CreatedDate = LAST_WEEK"));

  console.log("Account was created recently.");
