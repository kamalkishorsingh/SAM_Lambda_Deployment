var AWS = require('aws-sdk');
     
module.exports.hello = (event, context, callback) => {

  if(event.queryStringParameters && event.queryStringParameters.name){
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello ' + event.queryStringParameters.name + ',nice to meet you!!'
    }),
  })
  }

  if(event.httpMethod == "POST" && event.body){
    let json = JSON.parse(event.body);
     
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hi I have received a JSON object from you!!',
        object: json
    }),
  })
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go to SAM Serverless framework! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
