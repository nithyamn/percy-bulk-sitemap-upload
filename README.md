# Usage Guide

## Steps

- Open Terminal inside project directory & Run ``` npm install ```
- Edit `snapshot.js` and Replace Details

    ```js
    const username = "your sheild username";
    const password = "your sheild password";
    ```
- Update `run.sh` with all sitemap URLs and the associated project PERCY_TOKEN.
- `/tmp_snapshot` folder will get created for storing all the parsed YMLs and will get auto deleted after all the executions are completed.
- If the folder needs to be retained comment out `rm -rf tmp_snapshot` in the `run.sh` file.
- Execute tests using `sh run.sh &> percy-all-logs.log`

## Parse error logs
To get only error log lines from all the logs generated run the following command:
`node parseLogs.js`