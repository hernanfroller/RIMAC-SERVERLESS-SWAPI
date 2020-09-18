# Rimac Serverless Swapi

Rimac Serverless Swapi is a example for use serverless framework and API Rest Integration.

## Installation

Clone the repository.

```bash
git clone https://github.com/hernanfroller/RIMAC-SERVERLESS-SWAPI.git
```
Use [npm](https://www.npmjs.com/package/serverless) for install serverless framework.

```bash
npm i serverless
```

## Configuration

Create serverless credentials profile

```bash
sls config credentials --provider aws --key {iam-key} --secret {iam-secret} --profile aws-serverless
```

## Deploy
Run the package.json deploy script.

```bash
npm run deploy
```

## License
[MIT](https://choosealicense.com/licenses/mit/)