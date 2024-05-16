import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import connection from "../../../helper/db";
export const POST = async (req, res) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const name = await fileData.get("name");
  const description = await fileData.get("description");

  if (!file) {
    return NextResponse.json({
      message: "No Images received.",
      success: false,
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  //   console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/tests/" + filename),
      buffer
    );
    const rows = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO tests (id, name, content, image) VALUES (?, ?, ?, ?)",
        [unique_id, name, description, filename],
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
    return NextResponse.json({
      Message: "Success",
      success: true,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", success: false });
  }
};
