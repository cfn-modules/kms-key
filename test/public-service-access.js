const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('no', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/public-service-access.yml`, stackName, {PublicServiceAccess: 'NO_SERVICES'}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('s3', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/public-service-access.yml`, stackName, {PublicServiceAccess: 's3'}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
