import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connection from "../../../helper/db";
import { v4 as uuid } from "uuid";
export async function POST(request) {
  try {
    const { fd } = await request.json();
    const unique_id = uuid();
    console.log(fd);
    // const rows = await new Promise((resolve, reject) => {
    //   // Perform the database query
    //   connection.query(
    //     "INSERT INTO contact (id, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
    //     [unique_id, email, phone, subject, message],
    //     (err, results, fields) => {
    //       if (err) {
    //         console.log(err);
    //         reject(err); // Reject the promise if there's an error
    //       } else {
    //         resolve(results); // Resolve the promise with the query results
    //       }
    //     }
    //   );
    // });
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   host: "smtp.gmail.com",
    //   secure: true,
    //   auth: {
    //     user: process.env.MY_EMAIL,
    //     pass: process.env.MY_PASSWORD,
    //   },
    // });
    // var mailOptions = {
    //   from: process.env.MY_EMAIL,
    //   to: process.env.MY_EMAIL,
    //   subject: subject,
    //   html: `<html lang="en">
    //   <head>
    //     <meta charset="utf-8">

    //     <title>Utsao Enquiry Form</title>
    //     <meta name="description" content="Utsao Enquiry Form">
    //     <meta name="author" content="SitePoint">
    //   <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

    //     <link rel="stylesheet" href="css/styles.css?v=1.0">

    //   </head>

    //   <body>
    //     <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
    //           <div class="container" style="margin-left: 20px;margin-right: 20px;">
    //           <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
    //           <div style="font-size: 16px;">
    //           <p>Message:</p>
    //           <p>${message}</p>
    //           <br>
    //           </div>
    //           </div>
    //   </body>
    //   </html>`,
    // };
    // transporter.sendMail(mailOptions);
    // return NextResponse.json({
    //   message: "Query Sent",
    //   success: true,
    // });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Failed to send Query.",
      success: false,
    });
  }
}
