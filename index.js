const express = require ('express');
//const AWS = require('aws-sdk/dist/aws-sdk-react-native');

const app = express();

// Settings
app.set('port', process.env.port || 3000);

// Middlewares

app.use(express.json());

// Routes
app.use('/products', require('./routes/products'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Listen on ', app.get('port'));
})

const accessparams = {
    accessKeyId: 'AKIA44XOM6BBFWQFMJ6J',
    secretAccessKey: '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',
    sessionToken: 'a2V5X2lkOiBBS0lBNDRYT002QkJBRkdONUxMWAprZXlfc2VjcmV0OiBEUHh5bjVvNGtUclpvVEltT1VjUDJ6TlUzTGNFclJzdUkxMEwraDBpCnJlZ2lvbjogc2EtZWFzdC0x',
};

// const s3 = new AWS.S3(accessparams);

// s3.getObject(
//   { Bucket: 'products.database.microverse', Key: 'a2V5X2lkOiBBS0lBNDRYT002QkJBRkdONUxMWAprZXlfc2VjcmV0OiBEUHh5bjVvNGtUclpvVEltT1VjUDJ6TlUzTGNFclJzdUkxMEwraDBpCnJlZ2lvbjogc2EtZWFzdC0x' },
//   (err, file) => {
//     if (err) throw err;
//     console.log(file.Body);
//   }
// );

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});