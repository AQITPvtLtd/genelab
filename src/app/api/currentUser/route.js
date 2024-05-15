import connection from "@/helper/db";
import { jwt } from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);

  const rows = await new Promise((resolve, reject) => {
    // Perform the database query
    connection.query(
      "SELECT * FROM user WHERE email = ?",
      [data.email],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          reject(err); // Reject the promise if there's an error
        } else {
          resolve(results); // Resolve the promise with the query results
        }
      }
    );
  });
  return NextResponse.json(rows[0]);
}
