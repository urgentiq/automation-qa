Step by Step Setup for Playwright


Install Node.js:
Install Node.js from the official website: Node.js

Install Visual Studio Code:
Download and install Visual Studio Code from the official website: Visual Studio Code

Download the Playwright Project:
Clone or download the Playwright project from GitHub.

Extract the Project:
If you downloaded the project as a zip file, extract it to a location on your local device.
Open the Project in Visual Studio Code:

Open Visual Studio Code.
Use the "Open Folder" option to open the extracted folder containing the Playwright project.

Open the Terminal:
In Visual Studio Code, click on the "Terminal" option in the menu and select "New Terminal" to open a terminal window.

Install Playwright:
In the terminal, navigate to the root directory of your Playwright project.

Run the command: npx playwright install
This command installs the necessary browser drivers for Playwright.

Run Test Scripts for Login Page:
In the terminal, ensure you're in the root directory of your Playwright project.

Run the test script for the login page using the command:

npx playwright test tests/login.test.js --headed
This command runs the test script for the login page in a headed browser mode, meaning the browser window will be visible.

Run Test Scripts for Intake Module:
Similarly, run the test script for the intake module using the command:
npx playwright test tests/Intake/intake.test.js --headed
Replace intake.test.js with the actual filename of your intake module test script.
This command runs the test script for the intake module in a headed browser mode.
