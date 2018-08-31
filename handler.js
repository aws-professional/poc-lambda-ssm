'use strict';

const AWS = require("aws-sdk")

AWS.config = {
    region:"us-east-1"
};

const ssm = new AWS.SSM({apiVersion: '2014-11-06'});

module.exports.hello_ssm = function(event, context, callback) {
  var params = {
    Name: 'my-secure-param', 
    WithDecryption: true 
  };

  ssm.getParameter(params, function(err, data) {
      if (err) callback(err);
      else callback(null,"my secure param is: "+data.Parameter.Value);          
  });
};
