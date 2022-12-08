import { MediaConvert, config } from "aws-sdk";

import env from "./env";

config.update({ region: env["AWS_REGION"] });

const mc = new MediaConvert({ endpoint: env["MEDIACONVERT_ENDPOINT"] });

export async function handler(event: any) {
  console.log(event);

  const record = event.Records[0];
  const key = record.s3.object.key;
  const bucket = record.s3.bucket.name;

  await mc
    .createJob({
      JobTemplate: env["MEDIACONVERT_JOB_TEMPLATE"],
      Role: env["MEDIACONVERT_ROLE"],
      Settings: {
        Inputs: [
          {
            FileInput: `s3://${bucket}/${key}`
          }
        ]
      }
    })
    .promise();
}
