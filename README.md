# Wavix TypeScript SDK

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fwavix%2Fwavix-typescript)
[![npm shield](https://img.shields.io/npm/v/@wavix/sdk)](https://www.npmjs.com/package/@wavix/sdk)

The official Wavix TypeScript SDK provides programmatic access to the
[Wavix](https://wavix.com) APIs. Use it to add messaging, voice, and account management capabilities to your application.

Use the SDK to:

- Send and receive SMS and MMS messages.
- Place and programmatically control calls.
- Search for, buy, and manage phone numbers.
- Validate phone numbers.
- Manage SIP trunks.
- Retrieve call detail records (CDRs).


## Table of contents

- [Installation](#installation)
- [Authentication](#authentication)
- [Quickstart](#quickstart)
- [Request and response types](#request-and-response-types)
- [Error handling](#error-handling)
- [Pagination](#pagination)
- [File uploads](#file-uploads)
- [Binary responses](#binary-responses)
- [Rate limits and retries](#rate-limits-and-retries)
  - [Retries](#retries)
  - [Idempotency](#idempotency)
- [Advanced](#advanced)
  - [Subpackage exports](#subpackage-exports)
  - [Additional headers](#additional-headers)
  - [Additional query parameters](#additional-query-parameters)
  - [Timeouts](#timeouts)
  - [Cancel requests](#cancel-requests)
  - [Access raw response data](#access-raw-response-data)
  - [Logging](#logging)
  - [Custom requests](#custom-requests)
  - [Runtime compatibility](#runtime-compatibility)
- [SDK and API compatibility](#sdk-and-api-compatibility)
- [Release notes](#release-notes)
- [Major-version upgrades](#major-version-upgrades)
- [Documentation](#documentation)
- [Resources and support](#resources-and-support)
- [Contributing](#contributing)

## Installation

```sh
npm i -s @wavix/sdk
```

**Requirements:** Node.js 18 or later when you use the SDK with Node.js. See
[Runtime compatibility](#runtime-compatibility) for other supported runtimes.

## Authentication

Create an API key in the [Wavix portal](https://app.wavix.com). Store the key in
an environment variable and pass it to the client.

```shell
export WAVIX_API_KEY="your-api-key"
```

```typescript
import { WavixClient } from "@wavix/sdk";

const client = new WavixClient({ token: process.env.WAVIX_API_KEY });
```

> [!CAUTION]
> Don't commit API keys or tokens to source control. In production, store
> credentials in environment variables or a secrets manager.

## Quickstart

Create a client and send an SMS message:

```typescript
import { WavixClient } from "@wavix/sdk";

const client = new WavixClient({ token: "YOUR_TOKEN" });
await client.smsAndMms.messages.send({
    from: "Wavix",
    to: "+447537151866",
    message_body: {
        text: "Hi there, this is a message from Wavix",
        media: null
    },
    callback_url: "https://you-site.com/webhook",
    validity: 3600,
    tag: "Fall sale"
});
```

## Request and response types

The SDK exports request and response types as TypeScript interfaces. Import
the `Wavix` namespace to use these types:

```typescript
import { Wavix } from "@wavix/sdk";

const request: Wavix.ListApiKeysRequest = {
    ...
};
```

## Error handling

When the API returns a `4xx` or `5xx` status code, the SDK throws a subclass
of `WavixError`. Use the error properties to inspect the status code, message,
response body, and raw response:

```typescript
import { WavixError } from "@wavix/sdk";

try {
    await client.smsAndMms.messages.send(...);
} catch (err) {
    if (err instanceof WavixError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.rawResponse);
    }
}
```

Handle errors that aren't instances of `WavixError` separately, or rethrow
them so that your application doesn't ignore unexpected failures.

## Pagination

List operations use automatic page-number pagination. The SDK requests
additional pages as you iterate through the results.

The Wavix API supports these pagination parameters:

- `page`: Specifies the page to retrieve.
- `per_page`: Specifies the number of items per page. The default is `25`.
  The minimum is `1`, and the maximum is `100`.

## File uploads

Pass a supported file type to an endpoint that accepts file uploads:

```typescript
import { createReadStream } from "fs";
import * as fs from "fs";
import { WavixClient } from "@wavix/sdk";

const client = new WavixClient({ token: "YOUR_TOKEN" });
await client.speechAnalytics.create({
    file: fs.createReadStream("/path/to/your/file"),
    callback_url: "callback_url"
});
```
The client accepts the following file types:

- **Streams:** `fs.ReadStream`, `stream.Readable`, and `ReadableStream`.
- **Buffered data:** `Buffer`, `Blob`, `File`, `ArrayBuffer`,
  `ArrayBufferView`, and `Uint8Array`.

### Metadata

Add metadata to an uploaded file:
```typescript
const file: Uploadable.WithMetadata = {
    data: createReadStream("path/to/file"),
    filename: "my-file",       // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949,       // optional
};
```

You can also upload a file from a file path:
```typescript
const file : Uploadable.FromPath = {
    path: "path/to/file",
    filename: "my-file",        // optional
    contentType: "audio/mpeg",  // optional
    contentLength: 1949,        // optional
};
```

The SDK uses this metadata to set the `Content-Length`, `Content-Type`, and
`Content-Disposition` headers. If you omit the metadata, the SDK tries to
determine it automatically. For example, the SDK can use the `path` property
of an `fs.ReadStream` to retrieve the file size without loading the file into
memory.


## Binary responses

Endpoints that return binary data use the `BinaryResponse` type. Read the
response as a stream, array buffer, blob, or byte array:

```typescript
const response = await client.billing.invoices.download(...);
const stream: ReadableStream<Uint8Array> = response.stream();
// const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
// const blob: Blob = response.blob();
// const bytes: Uint8Array = response.bytes();
// You can only use the response body once, so you must choose one of the above methods.
// If you want to check if the response body has been used, you can use the following property.
const bodyUsed = response.bodyUsed;
```
<details>
<summary>Save binary response to a file</summary>

<blockquote>
<details>
<summary>Node.js</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';

const response = await client.billing.invoices.download(...);

const stream = response.stream();
const nodeStream = Readable.fromWeb(stream);
const writeStream = createWriteStream('path/to/file');

await pipeline(nodeStream, writeStream);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.billing.invoices.download(...);

const arrayBuffer = await response.arrayBuffer();
await writeFile('path/to/file', Buffer.from(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.billing.invoices.download(...);

const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
await writeFile('output.bin', Buffer.from(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.billing.invoices.download(...);

const bytes = await response.bytes();
await writeFile('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Bun</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
const response = await client.billing.invoices.download(...);

const stream = response.stream();
await Bun.write('path/to/file', stream);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.billing.invoices.download(...);

const arrayBuffer = await response.arrayBuffer();
await Bun.write('path/to/file', arrayBuffer);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.billing.invoices.download(...);

const blob = await response.blob();
await Bun.write('path/to/file', blob);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.billing.invoices.download(...);

const bytes = await response.bytes();
await Bun.write('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Deno</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
const response = await client.billing.invoices.download(...);

const stream = response.stream();
const file = await Deno.open('path/to/file', { write: true, create: true });
await stream.pipeTo(file.writable);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.billing.invoices.download(...);

const arrayBuffer = await response.arrayBuffer();
await Deno.writeFile('path/to/file', new Uint8Array(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.billing.invoices.download(...);

const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
await Deno.writeFile('path/to/file', new Uint8Array(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.billing.invoices.download(...);

const bytes = await response.bytes();
await Deno.writeFile('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Browser</summary>

<blockquote>
<details>
<summary>Blob (most-efficient)</summary>

```ts
const response = await client.billing.invoices.download(...);

const blob = await response.blob();
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ReadableStream</summary>

```ts
const response = await client.billing.invoices.download(...);

const stream = response.stream();
const reader = stream.getReader();
const chunks = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  chunks.push(value);
}

const blob = new Blob(chunks);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.billing.invoices.download(...);

const arrayBuffer = await response.arrayBuffer();
const blob = new Blob([arrayBuffer]);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.billing.invoices.download(...);

const bytes = await response.bytes();
const blob = new Blob([bytes]);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

<details>
<summary>Convert binary response to text</summary>

<blockquote>
<details>
<summary>ReadableStream</summary>

```ts
const response = await client.billing.invoices.download(...);

const stream = response.stream();
const text = await new Response(stream).text();
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.billing.invoices.download(...);

const arrayBuffer = await response.arrayBuffer();
const text = new TextDecoder().decode(arrayBuffer);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.billing.invoices.download(...);

const blob = await response.blob();
const text = await blob.text();
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.billing.invoices.download(...);

const bytes = await response.bytes();
const text = new TextDecoder().decode(bytes);
```

</details>
</blockquote>

</details>

## Rate limits and retries

Rate limits vary by endpoint. When a request exceeds an endpoint's rate
limit, the Wavix API returns an HTTP `429 Too Many Requests` response.

The SDK can retry `429` responses as described in [Retries](#retries).
Configure retries according to your application's traffic patterns and
latency requirements.

### Retries

The SDK automatically retries eligible requests by using exponential backoff.
By default, the SDK makes up to two retry attempts.

The SDK retries requests that return one of these status codes:

- [`408 Request Timeout`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408).
- [`429 Too Many Requests`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429).
- Any [`5xx` server error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses).

These status codes aren't configurable.

Use the `maxRetries` request option to override the retry limit for an
individual request:

```typescript
const response = await client.smsAndMms.messages.send(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

> [!IMPORTANT]
> A retry can repeat an operation if the server processes the original
> request but the client doesn't receive the response. Before you retry an
> operation that sends a message, places a call, or changes a resource,
> confirm that the operation can be repeated safely.

### Idempotency

The Wavix API doesn't support idempotency keys. A repeated request can repeat
the operation, including sending a message, placing a call, or changing a
resource.

Before you retry a request that changes data or starts an operation, check
whether the original request succeeded. When duplicate operations could
affect customers or incur charges, track request state in your application
and prevent the same operation from being submitted more than once.

## Advanced

### Subpackage exports

Import a subpackage client directly to help JavaScript bundlers remove unused
SDK code and reduce the bundle size:

```typescript
import { ApiKeysClient } from '@wavix/sdk/apiKeys';

const client = new ApiKeysClient({...});
```

### Additional headers

Use the `headers` request option to add headers to every request from a client
or to an individual request:

```typescript
import { WavixClient } from "@wavix/sdk";

const client = new WavixClient({
    ...
    headers: {
        'X-Custom-Header': 'custom value'
    }
});

const response = await client.smsAndMms.messages.send(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional query parameters

Use the `queryParams` request option to add query parameters to an individual
request:

```typescript
const response = await client.smsAndMms.messages.send(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Timeouts

The default request timeout is 60 seconds. Use the `timeoutInSeconds` request
option to override the timeout for an individual request:

```typescript
const response = await client.smsAndMms.messages.send(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Cancel requests

Pass an `AbortSignal` to cancel a request:

```typescript
const controller = new AbortController();
const response = await client.smsAndMms.messages.send(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

Call `abort()` while the request is pending. Calling it after the request
settles has no effect.

### Access raw response data

Call `.withRawResponse()` to access response headers and other raw response
data. The method returns a promise that resolves to an object with `data` and
`rawResponse` properties:

```typescript
const { data, rawResponse } = await client.smsAndMms.messages.send(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Logging

Pass a `logging` object to the client options to configure SDK logs:

```typescript
import { WavixClient, logging } from "@wavix/sdk";

const client = new WavixClient({
    ...
    logging: {
        level: logging.LogLevel.Debug, // defaults to logging.LogLevel.Info
        logger: new logging.ConsoleLogger(), // defaults to ConsoleLogger
        silent: false, // defaults to true, set to false to enable logging
    }
});
```

> [!CAUTION]
> Logs can contain request or response data. Review your logging configuration
> before you enable SDK logs in production, and don't record credentials or
> sensitive customer data.

The `logging` object supports these properties:

- `level`: Sets the log level. The default is `logging.LogLevel.Info`.
- `logger`: Sets the logger. The default is `logging.ConsoleLogger`.
- `silent`: Turns logging off when set to `true`. The default is `true`.

Set `level` to one of these values:
- `logging.LogLevel.Debug`
- `logging.LogLevel.Info`
- `logging.LogLevel.Warn`
- `logging.LogLevel.Error`

To use a custom logger, pass an object that implements the `logging.ILogger`
interface.

<details>
<summary>Custom logger examples</summary>

The following example uses the `winston` logging library.
```ts
import winston from 'winston';

const winstonLogger = winston.createLogger({...});

const logger: logging.ILogger = {
    debug: (msg, ...args) => winstonLogger.debug(msg, ...args),
    info: (msg, ...args) => winstonLogger.info(msg, ...args),
    warn: (msg, ...args) => winstonLogger.warn(msg, ...args),
    error: (msg, ...args) => winstonLogger.error(msg, ...args),
};
```

The following example uses the `pino` logging library.

```ts
import pino from 'pino';

const pinoLogger = pino({...});

const logger: logging.ILogger = {
  debug: (msg, ...args) => pinoLogger.debug(args, msg),
  info: (msg, ...args) => pinoLogger.info(args, msg),
  warn: (msg, ...args) => pinoLogger.warn(args, msg),
  error: (msg, ...args) => pinoLogger.error(args, msg),
};
```
</details>


### Custom requests

Use the low-level `fetch` method to call an API endpoint that the SDK doesn't
yet support. Requests made with this method use the SDK's authentication,
retry, timeout, and logging configuration:

```typescript
const response = await client.fetch("/v1/custom/endpoint", {
    method: "GET",
}, {
    timeoutInSeconds: 30,
    maxRetries: 3,
    headers: {
        "X-Custom-Header": "custom-value",
    },
});

const data = await response.json();
```

### Runtime compatibility

The SDK supports these runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

Test your application in its target runtime before you deploy it. Runtime
implementations can differ in their support for streams, files, and other web
APIs.

## SDK and API compatibility

Each SDK release supports the current version of the Wavix APIs available
when that SDK version is released. Update the SDK regularly to access the
latest API capabilities and fixes.

Before you update the SDK, review the
[GitHub releases](https://github.com/wavix/wavix-typescript/releases) for
changes that might affect your application.

## Release notes

See [GitHub releases](https://github.com/wavix/wavix-typescript/releases) for
new features, fixes, and breaking changes in each SDK release.

## Major-version upgrades

The SDK doesn't provide separate migration guides. Breaking changes ship only
in major versions, so before you upgrade, review the
[GitHub releases](https://github.com/wavix/wavix-typescript/releases) for
breaking changes, then update and test in a development environment before you
deploy.

## Documentation

- For API guides and API reference documentation, see the
  [Wavix documentation](https://docs.wavix.com).
- For SDK methods and types, see the
  [TypeScript SDK reference](https://github.com/wavix/wavix-typescript/blob/HEAD/reference.md).

## Resources and support

- **Versioning:** The SDK follows [Semantic Versioning](https://semver.org).
  Breaking changes are released in major versions.
- **Security:** Report vulnerabilities privately by following the instructions
  in [SECURITY.md](./SECURITY.md). Don't report vulnerabilities in public
  issues.
- **Support:** For product and API support, contact
  [support@wavix.com](mailto:support@wavix.com).
- **Issues:** To report an SDK bug or request a feature, open a
  [GitHub issue](https://github.com/wavix/wavix-typescript/issues).
- **License:** The SDK is available under the [MIT License](./LICENSE).

## Contributing

The SDK source code is generated. Changes made directly to generated files are
overwritten in the next release and can't be merged as submitted. Before you
prepare a code change, open an issue to discuss the proposed update.

You can submit README improvements directly in a pull request.
