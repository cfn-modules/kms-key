const test = require('ava');
const cfntest = require('@cfn-modules/test');
const AWS = require('aws-sdk');

test.serial('read', async t => {
  const sts = new AWS.STS({apiVersion: '2011-06-15'});
  const identity = await sts.getCallerIdentity({}).promise();
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/iam-access-with-admin.yml`, stackName, {
      IamAccess: 'Read',
      IamAdminAccess: identity.Arn
    }));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('use', async t => {
  const sts = new AWS.STS({apiVersion: '2011-06-15'});
  const identity = await sts.getCallerIdentity({}).promise();
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/iam-access-with-admin.yml`, stackName, {
      IamAccess: 'Use',
      IamAdminAccess: identity.Arn
    }));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('admin', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/iam-access.yml`, stackName, {IamAccess: 'Admin'}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
