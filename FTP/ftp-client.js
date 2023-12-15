const ftp = require('basic-ftp');

async function main() {
  const client = new ftp.Client();

  try {
    // Connect to the FTP server
    await client.access({
      host: '127.0.0.1', // Replace with your FTP server's address
      port: 21,           // Replace with your FTP server's port
      user: 'your_username',  // Replace with your FTP username
      password: 'your_password'  // Replace with your FTP password
    });

    console.log(await client.list()); // List files on the server

    // Download a file from the server
    await client.downloadTo('downloaded-file.txt', 'remote-file.txt');

    // Upload a file to the server
    await client.uploadFrom('local-file.txt', 'uploaded-file.txt');

  } catch (err) {
    console.error(`FTP Error: ${err.message}`);
  } finally {
    // Close the FTP connection
    await client.close();
  }
}

main();
