# adverse-events-service

### Install

    $ npm install

### Configuration
$ npm install express-jwt
Replace the fields in `/config/default.js` to connect with your locally-running DB.

### Testing
A full set of unit, linting, and coverage tests are available upon executing:

    $ npm test

### Usage

#### GET /adverse-events
**Request:**

```curl
curl -X GET \
  'http://localhost:8080/adverse-events?companyNumb=unknown&limit=3&offset=2&order%5B%5D=id%2Cdesc&order=companyNumb%2Cdesc'
```

**Response:** HTTP200
```json
[
  {
    "id": 19829,
    "safetyReportId": "4366904-3",
    "receiveDate": "0001-01-01 BC",
    "receiptDate": "0001-01-01 BC",
    "companyNumb": "unknown"
  },
  {
    "id": 19760,
    "safetyReportId": "4376160-8",
    "receiveDate": "0001-01-01 BC",
    "receiptDate": "0001-01-01 BC",
    "companyNumb": "unknown"
  },
  {
    "id": 19749,
    "safetyReportId": "4389874-0",
    "receiveDate": "0001-01-01 BC",
    "receiptDate": "0001-01-01 BC",
    "companyNumb": "unknown"
  }
]
```

#### GET /adverse-event/:id
**Request:**

```curl
curl -X GET \
  http://localhost:8080/adverse-event/2
```

**Response:** HTTP200
```json
{
  "id": 2,
  "safetyReportId": "4723089-9",
  "receiveDate": "0001-01-01 BC",
  "receiptDate": "0001-01-01 BC",
  "companyNumb": "2004220463US"
}
```

#### POST /adverse-event/:id
**Request:**

```curl
curl -X POST \
  http://localhost:8080/adverse-event/133738 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Zm9v.Ag02A8SncFh_UYDzzF0j0z8PegBLheptwDBTzwaeyro' \
  -H 'content-type: application/json' \
  -d '{
  "safetyReportId": "4719690-9",
  "receiveDate": "2011-10-05T14:48:00.000Z",
  "receiptDate": "2011-10-05T14:48:00.000Z",
  "companyNumb": "US-GLAXOSMITHKLINE-A0515241A"
}'
```

**Response:** HTTP201
```json
{
  "safetyReportId": "4719690-9",
  "receiveDate": "2011-10-05",
  "receiptDate": "2011-10-05",
  "companyNumb": "US-GLAXOSMITHKLINE-A0515241A",
  "id": 133738
}
```

#### PUT /adverse-event/:id
**Request:**

```curl
curl -X PUT \
  http://localhost:8080/adverse-event/5 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Zm9v.Ag02A8SncFh_UYDzzF0j0z8PegBLheptwDBTzwaeyro' \
  -H 'content-type: application/json' \
  -d '{
  "safetyReportId": "4719690-2"
}'
```

**Response:** HTTP204

#### DELETE /adverse-event/:id
**Request:**

```curl
curl -X DELETE \
  http://localhost:8080/adverse-event/2 \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiJ9.Zm9v.Ag02A8SncFh_UYDzzF0j0z8PegBLheptwDBTzwaeyro'
```

**Response:** HTTP202
