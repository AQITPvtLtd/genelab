import { NextResponse } from "next/server";
import connection from "../../../helper/db";
export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query("SELECT * FROM tests", (err, results, fields) => {
        if (err) {
          reject(err); // Reject the promise if there's an error
        } else {
          resolve(results); // Resolve the promise with the query results
        }
      });
    });
    return NextResponse.json({
      message: "success",
      success: true,
      result: results,
    });
  } catch (error) {
    console.log(error.message);
    connection.end();
    return NextResponse.json({ message: "error", success: false });
  }
}
