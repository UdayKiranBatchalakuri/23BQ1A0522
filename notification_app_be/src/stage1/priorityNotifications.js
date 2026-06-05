const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWEwNTIyQHZ2aXQubmV0IiwiZXhwIjoxNzgwNjQxMzgyLCJpYXQiOjE3ODA2NDA0ODIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJjOTZlNzQzZi1kN2Q3LTQyMzMtYWRhOC1hZmIyODVlNDczZDEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJiYXRjaGFsYWt1cmkgdWRheSBraXJhbiIsInN1YiI6ImNmMTljNWFkLTAzYmEtNDg2OC05MmNmLTJiODRjNjUxMzFjZSJ9LCJlbWFpbCI6IjIzYnExYTA1MjJAdnZpdC5uZXQiLCJuYW1lIjoiYmF0Y2hhbGFrdXJpIHVkYXkga2lyYW4iLCJyb2xsTm8iOiIyM2JxMWEwNTIyIiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiY2YxOWM1YWQtMDNiYS00ODY4LTkyY2YtMmI4NGM2NTEzMWNlIiwiY2xpZW50U2VjcmV0IjoiZUVjSE15ZmFkdVBIa2FGSyJ9.XAFuwv_dr8abQYPl-hA4ntxsdB-pP47qFPiHec4RxkY";

const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications(topN = 10) {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const notifications = response.data.notifications;

    const sorted = notifications.sort((a, b) => {
      const priorityDiff = PRIORITY[b.Type] - PRIORITY[a.Type];

      if (priorityDiff !== 0) return priorityDiff;

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    console.table(sorted.slice(0, topN));
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

getTopNotifications(10);