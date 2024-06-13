
async function main() {
    try {
        const path = require('path');
        const { runTests, downloadAndUnzipVSCode } = require('@vscode/test-electron');
        const extensionDevelopmentPath = __dirname;
        const extensionTestsPath = path.join(__dirname, './test.js');
        const launchArgs = [
            path.join(__dirname, '.'),
            '--disable-extensions',
            '--disable-workspace-trust',
        ];
        const vscodeExecutablePath = await downloadAndUnzipVSCode('insiders');

        await runTests({
            vscodeExecutablePath,
            extensionDevelopmentPath,
            extensionTestsPath,
            launchArgs
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main();
