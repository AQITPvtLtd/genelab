import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import connection from "../../../helper/db";
import { google } from "googleapis";
import data from "../../../../accessKey.json";
export const POST = async (req, res) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const firstName = await fileData.get("firstName");
  const lastName = await fileData.get("lastName");
  const phone = await fileData.get("phone");
  const email = await fileData.get("email");
  const message = await fileData.get("message");

  if (!file) {
    return NextResponse.json({ message: "No files received.", success: false });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  // console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/prescriptions/" + filename),
      buffer
    );
    const rows = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO contact (id, first_name, last_name, phone, email, message, prescription) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [unique_id, firstName, lastName, email, phone, message, filename],
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
    try {
      //send equiry form mail to us
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });
      var mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: "GeneLab Contact form",
        // attachments: [
        //   {
        //     filename: filename,
        //     path: path.join(process.cwd(), "public/prescriptions/" + filename),
        //   },
        // ],
        html: `<html lang="en">
            <head>
              <meta charset="utf-8">
        
              <title>Genelab Enquiry Form</title>
              <meta name="description" content="Genelab Enquiry Form">
              <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
              <link rel="stylesheet" href="css/styles.css?v=1.0">
        
            </head>
        
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${
                      firstName + " " + lastName
                    }, their email is: ✉️${email} </h3>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${message}</p>
                    <br>
                    </div>
                    </div>
            </body>
            </html>`,
      };
      transporter.sendMail(mailOptions);

      //send confirmation mail to user
      var mailOptions = {
        from: process.env.MY_EMAIL,
        to: email,
        subject: "Thank You for contacting Genelab!",
        html: `<html lang="en">
            <head>
              <meta charset="utf-8">
        
              <title>Thank You for contacting Genelab</title>
              <meta name="description" content="Genelab Enquiry Form">
              <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
              <link rel="stylesheet" href="css/styles.css?v=1.0">
        
            </head>
        
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h2>Hey ${firstName}, </h2>
                    <p>Your query is noted!<br/> Our team will contact you as soon as possible</p>
                    <div style="font-size: 16px;">
                    <br>
                    </div>
                    </div>
            </body>
            </html>`,
      };
      transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "Failed to Send Mail",
        success: false,
      });
    }
    //send to google drive
    // try {
    //   const authClient = await authorize();
    //   uploadFile(authClient, filename);
    // } catch (error) {
    //   console.log(error);
    //   return NextResponse.json({
    //     message: "Google Drive Error",
    //     success: false,
    //   });
    // }

    return NextResponse.json({ message: "Enquiry sent", success: true });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({
      message: "Error in sending Enquiry",
      success: false,
    });
  }
};

const SCOPE = ["https://www.googleapis.com/auth/drive"];

//authorize
async function authorize() {
  const jwtclient = new google.auth.JWT(
    data.client_email,
    null,
    data.private_key,
    SCOPE
  );
  await jwtclient.authorize();
  return jwtclient;
}

async function uploadFile(authClient, filename) {
  return new Promise((resolve, rejected) => {
    // file 1
    const folderPath = path.join(
      process.cwd(),
      "public/prescriptions",
      filename
    );
    const drive = google.drive({ version: "v3", auth: authClient });
    var fileMetaData = {
      name: filename,
      parents: ["1TKJaMJa-Xse-weMUP6R0p-3MFimK-nlW"],
    };
    drive.files.create(
      {
        resource: fileMetaData,
        media: {
          body: fs.createReadStream(folderPath),
          mimeType: "application/pdf image/*",
        },
        fields: "id",
      },
      function (err, file) {
        if (err) {
          return rejected(err);
        }
        resolve(file);
      }
    );
  });
}
