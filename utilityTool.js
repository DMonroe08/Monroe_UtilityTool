const fs = require('fs');

exports.DEBUG = (title, obj, sttat) => {
  const seperator = '\n========================\n';
  const msg = ' The test was a ';
  const output = seperator + msg + title + seperator;



  if (process.env.DEBUG == true) {
    fs.appendFile('logs.txt', output, () => {
      console.log('success');
      // return true;
    });
  } else {
    fs.appendFile('logs.txt', output, () => {
      console.log('error');
    });
  }

};
