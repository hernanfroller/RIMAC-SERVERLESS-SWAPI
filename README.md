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

Create serverless credentials profile.

```bash
sls config credentials --provider aws --key {iam-key} --secret {iam-secret} --profile aws-serverless
```

## Deploy
Run the package.json deploy script.

```bash
npm run deploy
```

## Test

### Create Record

Send a **POST** request to the fan endpoint with the following **JSON** structure.

```json
{
	"name": "Hernan",
	"lastName": "Fernandez Roller",
	"age": 28,
	"favoriteCharacters": [{"id": 1}, {"id": 5}]
}
```

### List All Records
Send a **GET** request to the fans endpoint.

## License
[MIT](https://choosealicense.com/licenses/mit/)