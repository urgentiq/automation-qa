const fs = require('fs');
const path = require('path');
const _ = require("underscore");

function getData(testCaseName) {
    // Assuming the data.json file is in the same directory as this file (data.js)
    const dataFilePath = path.join(__dirname, 'data.json');

    console.log("Test data is loaded: " + testCaseName);
    const testcaseDetails = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    return _.where(testcaseDetails.testcase, { name: testCaseName });
}

module.exports = { getData };
