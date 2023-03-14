# UploaderAPI

UploaderAPI is a RESTful API that allows users to upload files to a server.

## Prerequisites

To run UploaderAPI, you'll need:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- [UploaderCLI](https://github.com/saponciou/UploaderCLI) (optional)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/saponciou/UploaderAPI.git
```

2. Install dependencies:

```bash
cd UploaderAPI
npm install
```

3. Set environment variables:
Create a .env file in the root directory of the project with the content of .env.example:

```.env
API_KEY=your-api-key
```

Replace the API_KEY value with your own.

Start the server:
```sql
npm start
```

## Usage
Once the server is running, you can send a POST request to the /upload endpoint with a file attached as a multipart/form-data. The server will respond with a JSON object containing the response. Or using the [UploaderCLI](https://github.com/saponciou/UploaderCLI) to be faster

Here's an example using curl:

```bash
curl -X POST -F file=@/path/to/file http://localhost:3000/upload
```

And here is an example using UploaderCLI:

```bash
upldr -i file
```

## License
UploaderAPI is released under the MIT License. See LICENSE for details.