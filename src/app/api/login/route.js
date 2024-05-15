import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connection from "@/helper/db";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const results = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "SELECT * FROM user WHERE email = ?",
        [email],
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
    if (results.length === 0) {
      return NextResponse.json({
        message: "Invalid Email",
        success: false,
      });
    }
    const user = results[0];
    if (user.password !== password) {
      return NextResponse.json({
        message: "Invalid Password",
        success: false,
      });
    }
    //creating token
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_KEY
    );
    const response = NextResponse.json({
      message: "Login Success",
      success: true,
      token: token,
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
