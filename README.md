[![Build Status](https://travis-ci.org/cfn-modules/kms-key.svg?branch=master)](https://travis-ci.org/cfn-modules/kms-key)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/kms-key.svg)](https://www.npmjs.com/package/@cfn-modules/kms-key)

# cfn-modules: AWS KMS key

AWS KMS key delegating access to IAM and allowing all AWS services to use the key.

> The KMS key is not deleted if you delete the CloudFormation stack to prevent unwanted data loss!

If you look for a KMS key with stricter access check out the [kms-key-strict](https://github.com/cfn-modules/kms-key-strict) module.

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/kms-key
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Key:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        AlertingModule: !GetAtt 'Alerting.Outputs.StackName' # optional
        AliasName: '' # optional
      TemplateURL: './node_modules/@cfn-modules/kms-key/module.yml'
```

## Examples

none

## Related modules

* [kms-key-strict](https://github.com/cfn-modules/kms-key-strict)
* [secret](https://github.com/cfn-modules/secret)

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AliasName</td>
      <td>Alias name (if not set, the stack name is used)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Outputs

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Interface</th>
      <th>Description</th>
      <th>Exported?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ModuleId</td>
      <td>global</td>
      <td>Id of the module</td>
      <td>no</td>
    </tr>
    <tr>
      <td>ModuleVersion</td>
      <td>global</td>
      <td>Version of the module</td>
      <td>no</td>
    </tr>
    <tr>
      <td>StackName</td>
      <td>global</td>
      <td>Name of the stack (used to pass module references)</td>
      <td>no</td>
    </tr>
    <tr>
      <td>Arn</td>
      <td>ExposeArn</td>
      <td>KMS key ARN</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>IamActions</td>
      <td>LambdaDependency</td>
      <td>Used to auto-generate IAM policies</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>IamResources</td>
      <td>LambdaDependency</td>
      <td>sed to auto-generate IAM policies</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>
