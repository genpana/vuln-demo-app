# vuln-demo-app
TestAppWithVul
# vuln-demo-app (INTENTIONALLY INSECURE)
**Purpose**: Static AppSec scanners should flag typical findings.

## Built-in vulnerabilities
- Command Injection: `index.js` `/run?cmd=...`
- Hardcoded secrets: Snowflake / Google API Key / Redis in `config.js`
- GCP Service Account key committed: `gcp-key.json`
- AWS IAM AssumeRole open to "*": `iam-assume-role-open.json`

> DO NOT DEPLOY. Do not put real secrets. For scanner testing only.
