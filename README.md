[![Build Status](https://travis-ci.org/cfn-modules/kms-key.svg?branch=master)](https://travis-ci.org/cfn-modules/kms-key)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/kms-key.svg)](https://www.npmjs.com/package/@cfn-modules/kms-key)

# cfn-modules: AWS KMS key

AWS KMS key delegating access to IAM and allowing all AWS services to use the key.

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
  Function:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      TemplateURL: './node_modules/@cfn-modules/kms-key/module.yml'
```

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
</table>
