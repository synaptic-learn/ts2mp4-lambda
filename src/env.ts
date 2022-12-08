const keys = [
  "AWS_REGION",
  "MEDIACONVERT_ENDPOINT",
  "MEDIACONVERT_JOB_TEMPLATE",
  "MEDIACONVERT_ROLE"
] as const;

const env: Record<string, string> = {};
for (const key of keys) {
  env[key] = process.env[key] as string;
}

export default env as Record<typeof keys[number], string>;
