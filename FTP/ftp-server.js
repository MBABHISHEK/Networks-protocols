const FtpSrv = require('ftp-srv');

const ftpServer = new FtpSrv({
  url: 'ftp://127.0.0.1:21', // You can change the IP and port if needed
  pasv_url: '127.0.0.1', // Replace with your server's external IP address
  pasv_min: 1024,
  pasv_max: 1048,
  greeting: ['Welcome to my FTP server','Authorized access only. All activities may be monitored and reported.'],
});

ftpServer.on('login', (data, resolve, reject) => {
  // Accept any username and password for this example
  resolve({ root: __dirname });
});

ftpServer.on('client-error', (connection, context, error) => {
  console.error(`Client error: ${error.message}`);
});

ftpServer.listen()
  .then(() => {
    console.log('FTP server listening on port 21');
  })
  .catch((err) => {
    console.error(`Error starting FTP server: ${err.message}`);
});
