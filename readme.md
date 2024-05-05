# Getting Started

# API gateway

did hands on

# lambda

did hands on

# key feature of serverless

- no server management
- easy and efficient scaling
- built in high availability and fault tolerance
- service integration- we will readilly integration with services
- no idle capcity - only pay for resources we use, no money for idle

challenges:

- vendor locks in -
- public cloud
- level of control -

# core of serverless services in AWS

- aws lambda
- api gateway - serverless API - can be used to create rest API
- amazon dynamoDB -

# additional services in AWS

- amazon S3
- amazon SNS
- amazon SQS
- AWS step functions - help with orchestration
- Amazon kinesis: analyse stream data
- Amazon Athena: analyse data using sql queries
- X-ray
- cloud watch
- amazon cognito: user authentication and management service

- AWS sdk and tools - for code

# usecases for serverless architecture

- we can build BEs - using pi gateway, lambda, dynamoDB
- real time or stream data processing - using kinesis, lambda, dynamoDB

# overview of frameworks and ci/cd for serverless

- AWS SAM:(serverless application model): lightweight version of AWS cloudformation, SAM uses template to convert the text into standard cloudformation syntax and then do deploy our
  serverless application
- serverless framework: provided by third party(open source tool).

other tools by AWS:

- aws code commit - source control version like github
- aws code build: build serverless application and deploy application
- aws codePipeline:

# environment setup

### AWS Lambda:

event driven serverless driven platform oe compute saercvice provided by AWS. code that we run on AWS lambda is called lambda function

it can triggered by multiple souirces: api gatway, S3 upload, cloudwatch , SNS, IOT devices. when we add trigger it will assigned IAM policy by which it will be able to trigger lambda, this policyt is called lambda invocation policy or function policy.

as below image, on left of lambda we can see its trigger(which can invoke lambda) and right which lambda function has access to (like here cloudwatch)

and iam policy fir this called execution policy

![alt text](image.png)

we can simple lambda funciton like this

here event=> depends on event source, event object structure depends on event, act as source of data for lambda function
context=> sets the environment , remaining time, memory taken.

```js
const resizeImage = (data) =>
  new Promise((resolve, reject) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });

export const handler = async (event, context) => {
  const data = event.data;
  let newImage = await resizeImage();

  return newImage;
  //   // TODO implement
  //   const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  //   };
  //   return response;
};
```

# event object, invocation types and event sources

> lambda supports two invocation types and this depends on event source:

- synchronous like api gateway, cognito
- asynchronous like S3

![alt text](image-1.png)

we can use "invoke" method of SDK which can be asynchronous and synchroous

> types of lambda event sources

- push events - s3 event, api gateway event
- pull/poll events- dynamodb, kinesis, sqs (in this case lamdba dunctin pulls data from dynamo db and invokes the lambda function)

> context:

we can use context object to find out how much time is remainign, before lambda function times out , what logs stream is associated with, what AWS request id triggered from etc

```js
export const handler = async (event, context) => {
  const data = event.data;
  let newImage = await resizeImage();
  context.getRemainingTimeInMills();
  context.functionName;
  context.functionVersion;
  context.functionArn;
  context.awsReuestId;
  context.memoryLimitInMb;
  context.identity;
  context.logGroupName;
  return newImage;
};
```

# logging and error handling

we can use like this or try catch and dofferent version of cpnsole.log , warn, info and error

```js
export const handler2 = async (event) => {
  const error = new Error('An error occurred');
  throw error;
};
```

# passing params using events

# lambda limits

# lambda pricing
