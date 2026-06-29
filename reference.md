# Reference
## API Keys
<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">list</a>({ ...params }) -> Wavix.ApiKey[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the API keys belonging to the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.list({
    label: "production"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">create</a>({ ...params }) -> Wavix.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an API key for the authenticated account. Restrict access by listing permitted IP addresses in `permitted_ips`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.create({
    label: "Production API Key",
    active: true,
    restricted: true,
    permitted_ips: ["192.168.1.1", "10.0.0.1"],
    scopes_enabled: true,
    numbers: {
        allow: "read"
    },
    calls: {
        allow: "read"
    },
    messages: {
        allow: "write"
    },
    two_fa: {
        allow: "write"
    },
    billing: {
        allow: "read"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ApiKeyCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the API key identified by `id`. Deletion is permanent and revokes the key immediately.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.delete({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.DeleteApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">update</a>({ ...params }) -> Wavix.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an API key identified by `id`. Only the provided fields are changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.update({
    id: 1,
    active: true,
    restricted: true,
    scopes_enabled: true,
    permitted_ips: ["192.168.1.1", "10.0.0.1"],
    label: "Production API Key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ApiKeyUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SIP trunks
<details><summary><code>client.sipTrunks.<a href="/src/api/resources/sipTrunks/client/Client.ts">list</a>({ ...params }) -> Wavix.SipTrunkListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of SIP trunks for the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sipTrunks.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListSipTrunksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sipTrunks.<a href="/src/api/resources/sipTrunks/client/Client.ts">create</a>({ ...params }) -> Wavix.SipTrunkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a SIP trunk for routing inbound and outbound calls. Returns the trunk with its generated `access_token`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sipTrunks.create({
    label: "My trunk",
    password: "4r=h;EaCB85QNtr2",
    callerid: "13132847320",
    ip_restrict: false,
    didinfo_enabled: true,
    call_restrict: true,
    cost_limit: true,
    channels_restrict: false,
    rewrite_enabled: true,
    transcription_enabled: true,
    transcription_threshold: 10
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.SipTrunkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sipTrunks.<a href="/src/api/resources/sipTrunks/client/Client.ts">get</a>({ ...params }) -> Wavix.SipTrunkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the SIP trunk identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sipTrunks.get({
    id: 3107
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetSipTrunksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sipTrunks.<a href="/src/api/resources/sipTrunks/client/Client.ts">update</a>({ ...params }) -> Wavix.SipTrunkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the configuration of the SIP trunk identified by `id`. Omitted fields revert to their defaults.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sipTrunks.update({
    id: 3107,
    body: {
        label: "My trunk",
        password: "4r=h;EaCB85QNtr2",
        callerid: "13132847320",
        ip_restrict: false,
        didinfo_enabled: true,
        call_restrict: true,
        cost_limit: true,
        channels_restrict: false,
        rewrite_enabled: true,
        transcription_enabled: true,
        transcription_threshold: 10
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.UpdateSipTrunksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.sipTrunks.<a href="/src/api/resources/sipTrunks/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the SIP trunk identified by `id`. Deletion is permanent and stops call routing through the trunk.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sipTrunks.delete({
    id: 3107
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.DeleteSipTrunksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cart
<details><summary><code>client.cart.<a href="/src/api/resources/cart/client/Client.ts">get</a>() -> Wavix.GetCartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the current purchase cart, including the phone numbers it contains and the documents each requires.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cart.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cart.<a href="/src/api/resources/cart/client/Client.ts">add</a>({ ...params }) -> unknown[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds the listed phone numbers to the purchase cart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cart.add({
    ids: ["541139862174", "541139862175"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.AddCartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cart.<a href="/src/api/resources/cart/client/Client.ts">remove</a>({ ...params }) -> Wavix.RemoveCartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the listed phone numbers from the purchase cart.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cart.remove({
    ids: ["541139862174", "541139862175"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.RemoveCartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cart.<a href="/src/api/resources/cart/client/Client.ts">checkout</a>({ ...params }) -> Wavix.CheckoutCartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Purchases the listed phone numbers from the cart. Activation and monthly fees are deducted from the account balance.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cart.checkout({
    ids: ["541139862174", "541139862175"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CheckoutCartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CartClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Numbers
<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">list</a>({ ...params }) -> Wavix.NumberListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of the phone numbers owned by the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.list({
    city_id: 123,
    search: "256537",
    label: "ALEX",
    label_present: true,
    page: 2,
    per_page: 50
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">delete</a>({ ...params }) -> Wavix.DeleteNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Releases the listed phone numbers back to stock. Selection accepts either `ids` (record IDs) or `dids` (phone numbers), but not both.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.delete({
    dids: "47832123321,47832123324,478321233215"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.DeleteNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">bulkUpdate</a>({ ...params }) -> Wavix.BulkUpdateNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Applies the same changes to every listed phone number. Only the provided fields are changed. Destination and SMS callback changes are applied asynchronously and may not be reflected in the response immediately.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.bulkUpdate({
    ids: [123, 456]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.NumberBulkUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">get</a>({ ...params }) -> Wavix.Number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the phone number identified by `id`, including its destinations, documents, and feature settings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.get({
    id: 123
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">update</a>({ ...params }) -> Wavix.Number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the phone number identified by `id`. Only the provided fields are changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.update({
    id: 123
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.NumberUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CDRs
<details><summary><code>client.cdrs.<a href="/src/api/resources/cdrs/client/Client.ts">list</a>({ ...params }) -> Wavix.CdrListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of call detail records for the authenticated account, within the requested date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.list({
    from: "2023-01-01",
    to: "2023-09-01",
    type: "received",
    from_search: "13524815863",
    to_search: "12565378257",
    sip_trunk: "12321",
    uuid: "99df5ffd-962a-410f-bcce-d08f1f7f328c",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListCdrsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CdrsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cdrs.<a href="/src/api/resources/cdrs/client/Client.ts">search</a>({ ...params }) -> Wavix.CdrTranscriptionSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches call transcriptions for the given keywords or phrases and returns the matching CDRs with their transcriptions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.search({
    type: "placed",
    from: "2023-08-01",
    to: "2023-08-31",
    page: 1,
    per_page: 50
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CdrSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CdrsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cdrs.<a href="/src/api/resources/cdrs/client/Client.ts">retranscribe</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Transcribes the recording of the call identified by `call_id`. Transcription is asynchronous; poll the transcription endpoint for the result.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.retranscribe({
    call_id: "bbaa37bf-430a-46da-ade3-c248e407016"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CdrRetranscriptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CdrsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cdrs.<a href="/src/api/resources/cdrs/client/Client.ts">transcriptions</a>({ ...params }) -> Wavix.CdrTranscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcription of the recorded call identified by `call_id`. Alias of the `transcription` endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.transcriptions({
    call_id: "bbaa37bf-430a-46da-ade3-c248e407016"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.TranscriptionsCdrsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CdrsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cdrs.<a href="/src/api/resources/cdrs/client/Client.ts">get</a>({ ...params }) -> Wavix.CdrResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the call detail record for the call identified by `call_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.get({
    call_id: "aa566501-c591-4a8b-b3b9-cc1295398b72",
    show_transcription: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetCdrsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CdrsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cdrs.<a href="/src/api/resources/cdrs/client/Client.ts">listAll</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Streams matching call detail records as newline-delimited JSON (NDJSON), one record per line, for bulk export.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.listAll({
    from: "2023-01-01",
    to: "2023-09-01",
    type: "received",
    from_search: "13524815863",
    to_search: "12565378257",
    sip_trunk: "12321",
    uuid: "99df5ffd-962a-410f-bcce-d08f1f7f328c",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListAllCdrsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CdrsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Call recording
<details><summary><code>client.callRecording.<a href="/src/api/resources/callRecording/client/Client.ts">list</a>({ ...params }) -> Wavix.CallRecordingListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of call recordings for the authenticated account, filtered by date range, number, call, or SIP trunk.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callRecording.list({
    from_date: "2023-01-01",
    to_date: "2023-12-31",
    from: "123456",
    to: "1987654321",
    call_uuid: "aa566501-c591-4a8b-b3b9-cc1295398b72",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallRecordingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callRecording.<a href="/src/api/resources/callRecording/client/Client.ts">getByCall</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redirects to the recording file for the call identified by `call_id`. The download URL is returned in the `Location` header.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callRecording.getByCall({
    call_id: "aa566501-c591-4a8b-b3b9-cc1295398b72"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetByCallCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallRecordingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callRecording.<a href="/src/api/resources/callRecording/client/Client.ts">get</a>({ ...params }) -> Wavix.Recording</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the call recording identified by `id`, including its metadata and download URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callRecording.get({
    id: 123
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallRecordingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callRecording.<a href="/src/api/resources/callRecording/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the call recording identified by `id`. Deletion is permanent and removes the recording file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callRecording.delete({
    id: 123
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.DeleteCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallRecordingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Speech Analytics
<details><summary><code>client.speechAnalytics.<a href="/src/api/resources/speechAnalytics/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateSpeechAnalyticsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads an audio file for transcription. Transcription is asynchronous; Wavix sends a POST callback to `callback_url` when it completes, including the `request_id` returned by this request.

Callback body:
```json
   {
        "request_id": "e865ea07-25af-4fdd-876e-04b0d41d5ebd",
        "status": "completed",
        "error": null
   }
```

- `request_id`: ID of the transcription request.
- `status`: One of `completed` (transcription succeeded) or `failed` (transcription encountered an error).
- `error`: Error description, or `null` when the transcription succeeded.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.speechAnalytics.create({
    file: fs.createReadStream("/path/to/your/file"),
    callback_url: "callback_url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CreateSpeechAnalyticsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SpeechAnalyticsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.speechAnalytics.<a href="/src/api/resources/speechAnalytics/client/Client.ts">get</a>({ ...params }) -> Wavix.GetSpeechAnalyticsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcription for the request identified by `request_id`, including transcript, speaker turns, and insights when available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.speechAnalytics.get({
    request_id: "e865ea07-25af-4fdd-876e-04b0d41d5ebd"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetSpeechAnalyticsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SpeechAnalyticsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.speechAnalytics.<a href="/src/api/resources/speechAnalytics/client/Client.ts">retranscribe</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-runs transcription on the file identified by `request_id`, replacing the existing transcript.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.speechAnalytics.retranscribe({
    request_id: "e865ea07-25af-4fdd-876e-04b0d41d5ebd",
    callback_url: "https://you-site.com/webhook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.SpeechAnalyticsRetranscribeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SpeechAnalyticsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Call webhooks
<details><summary><code>client.callWebhooks.<a href="/src/api/resources/callWebhooks/client/Client.ts">list</a>() -> Wavix.CallWebhookListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the configured call webhooks for the authenticated account. Wavix sends POST callbacks for `on-call` and `post-call` events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callWebhooks.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CallWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callWebhooks.<a href="/src/api/resources/callWebhooks/client/Client.ts">create</a>({ ...params }) -> Wavix.CallWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a callback URL for the `on-call` or `post-call` event. Wavix sends a POST callback to the URL when the event occurs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callWebhooks.create({
    url: "https://you-site.com/webhook",
    event_type: "post-call"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CallWebhooksCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callWebhooks.<a href="/src/api/resources/callWebhooks/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the call webhook for the given event type. Wavix stops sending callbacks for that event.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callWebhooks.delete({
    event_type: "post-call"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.DeleteCallWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallWebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Call control
<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">list</a>() -> Wavix.CallListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the calls currently in progress for the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">create</a>({ ...params }) -> Wavix.CallCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Places an outbound call. Returns the call with its `uuid` for tracking and control.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.create({
    from: "+1234567890",
    to: "+1987654321",
    callback_url: "https://examples.com/callback"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">get</a>({ ...params }) -> Wavix.CallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the call identified by `id`, including its current event and timestamps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetCallControlRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ends the active call identified by `id` by hanging up.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.DeleteCallControlRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">update</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the active call identified by `id`. Only the `tag` field can be changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.update({
    id: "id",
    tag: "marketing-campaign"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.UpdateCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">answer</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Answers the inbound call identified by `id`. Optionally starts media streaming on answer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.answer({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CallAnswerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.<a href="/src/api/resources/callControl/client/Client.ts">collect</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Collects DTMF keypad input from the caller on the active call identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.collect({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CallDtmfCollectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallControlClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## NumberValidator
<details><summary><code>client.numberValidator.<a href="/src/api/resources/numberValidator/client/Client.ts">get</a>({ ...params }) -> Wavix.GetNumberValidatorResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a single phone number and returns line type, carrier, portability, and reachability details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numberValidator.get({
    phone_number: "971569483322",
    type: "format"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetNumberValidatorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumberValidatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.numberValidator.<a href="/src/api/resources/numberValidator/client/Client.ts">createBulk</a>({ ...params }) -> Wavix.NumberValidatorCreateBulkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a batch of phone numbers. When `async` is `true`, returns a `request_id` to poll for results instead of the validation details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numberValidator.createBulk({
    phone_numbers: ["971501390098", "971504359195"],
    type: "format",
    async: true,
    force: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.PhoneValidationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumberValidatorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Voice campaigns
<details><summary><code>client.voiceCampaigns.<a href="/src/api/resources/voiceCampaigns/client/Client.ts">create</a>({ ...params }) -> Wavix.VoiceCampaignsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Launches a voice campaign that places an outbound call using a pre-configured scenario. Track progress with the returned voice campaign `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voiceCampaigns.create({
    voice_campaign: {
        callflow_id: 3212,
        caller_id: "13123310912",
        contact: "16729923812"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.CreateVoiceCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VoiceCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.voiceCampaigns.<a href="/src/api/resources/voiceCampaigns/client/Client.ts">get</a>({ ...params }) -> Wavix.VoiceCampaignsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the voice campaign identified by `id`, including its current status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voiceCampaigns.get({
    id: 2321423
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetVoiceCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VoiceCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Link shortener
<details><summary><code>client.linkShortener.<a href="/src/api/resources/linkShortener/client/Client.ts">create</a>({ ...params }) -> Wavix.ShortLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a short link that redirects to the target URL and tracks click metrics.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkShortener.create({
    link: "https://your-site.com/long-url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ShortLinkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkShortenerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Profile
<details><summary><code>client.profile.<a href="/src/api/resources/profile/client/Client.ts">get</a>() -> Wavix.ProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the profile and billing details of the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profile.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.profile.<a href="/src/api/resources/profile/client/Client.ts">update</a>({ ...params }) -> Wavix.ProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the profile and billing details of the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profile.update();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ProfileUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SubAccounts
<details><summary><code>client.subAccounts.<a href="/src/api/resources/subAccounts/client/Client.ts">list</a>({ ...params }) -> Wavix.SubAccountsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of sub-accounts under the authenticated master account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subAccounts.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.ListSubAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.subAccounts.<a href="/src/api/resources/subAccounts/client/Client.ts">create</a>({ ...params }) -> Wavix.SubOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a sub-account under the authenticated master account. Returns the sub-account with its generated `api_key`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subAccounts.create({
    name: "Company",
    default_destinations: {
        sms_endpoint: "https://examples.com/sms",
        dlr_endpoint: "https://examples.com/dlr"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.SubAccountsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.subAccounts.<a href="/src/api/resources/subAccounts/client/Client.ts">get</a>({ ...params }) -> Wavix.SubOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the sub-account identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subAccounts.get({
    id: 123
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.GetSubAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.subAccounts.<a href="/src/api/resources/subAccounts/client/Client.ts">update</a>({ ...params }) -> Wavix.SubOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the configuration of the sub-account identified by `id`. Omitted fields revert to their defaults.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subAccounts.update({
    id: 123,
    name: "Updated Company Name",
    status: "enabled",
    default_destinations: {
        sms_endpoint: "https://examples.com/sms",
        dlr_endpoint: "https://examples.com/dlr"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.SubAccountsUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Billing Transactions
<details><summary><code>client.billing.transactions.<a href="/src/api/resources/billing/resources/transactions/client/Client.ts">list</a>({ ...params }) -> Wavix.ListTransactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of billing transactions for the authenticated account within the requested date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.transactions.list({
    from_date: "2023-08-01",
    to_date: "2023-08-31",
    details_contains: "monthly",
    payments: true,
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.billing.ListTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Billing Invoices
<details><summary><code>client.billing.invoices.<a href="/src/api/resources/billing/resources/invoices/client/Client.ts">list</a>({ ...params }) -> Wavix.ListInvoicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the auto-generated financial statements for the authenticated account, paginated and ordered by billing period.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.invoices.list({
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.billing.ListInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.billing.invoices.<a href="/src/api/resources/billing/resources/invoices/client/Client.ts">download</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the financial statement identified by `id` as a PDF file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.invoices.download({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.billing.DownloadInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Buy Countries
<details><summary><code>client.buy.countries.<a href="/src/api/resources/buy/resources/countries/client/Client.ts">list</a>({ ...params }) -> Wavix.ListCountriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of countries where phone numbers are available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.buy.countries.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.buy.ListCountriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CountriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Buy Regions
<details><summary><code>client.buy.regions.<a href="/src/api/resources/buy/resources/regions/client/Client.ts">list</a>({ ...params }) -> Wavix.ListRegionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of regions (states or provinces) for countries where `has_provinces_or_states` is `true`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.buy.regions.list({
    country_id: 1892
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.buy.ListRegionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Buy Cities
<details><summary><code>client.buy.cities.<a href="/src/api/resources/buy/resources/cities/client/Client.ts">list</a>({ ...params }) -> Wavix.ListCitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of cities for countries where
 `has_provinces_or_states` is `false`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.buy.cities.list({
    country_id: 1891
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.buy.ListCitiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Buy RegionCities
<details><summary><code>client.buy.regionCities.<a href="/src/api/resources/buy/resources/regionCities/client/Client.ts">list</a>({ ...params }) -> Wavix.ListRegionCitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of cities in the specified region for countries where `has_provinces_or_states` is `true`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.buy.regionCities.list({
    country_id: 1891,
    region_id: 821
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.buy.ListRegionCitiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegionCitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Buy Numbers
<details><summary><code>client.buy.numbers.<a href="/src/api/resources/buy/resources/numbers/client/Client.ts">list</a>({ ...params }) -> Wavix.ListNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of phone numbers available for purchase in the specified city.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.buy.numbers.list({
    country_id: 1,
    city_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.buy.ListNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CallControl Streams
<details><summary><code>client.callControl.streams.<a href="/src/api/resources/callControl/resources/streams/client/Client.ts">create</a>({ ...params }) -> Wavix.CallStreamResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts streaming the media of the call identified by `call_id` to the configured destination. Returns the `stream_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.streams.create({
    call_id: "call_id",
    stream_url: "wss://examples.com/stream",
    stream_type: "oneway",
    stream_channel: "inbound"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.callControl.CallStreamCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StreamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.streams.<a href="/src/api/resources/callControl/resources/streams/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stops the media stream identified by `id` on the call identified by `call_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.streams.delete({
    call_id: "call_id",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.callControl.DeleteStreamsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StreamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CallControl Audio
<details><summary><code>client.callControl.audio.<a href="/src/api/resources/callControl/resources/audio/client/Client.ts">play</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Plays an audio prompt into the active call identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.audio.play({
    id: "id",
    audio_file: "https://examples.com/audio.wav"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.callControl.CallAudioPlayRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.callControl.audio.<a href="/src/api/resources/callControl/resources/audio/client/Client.ts">stop</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stops audio playback in the active call identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.callControl.audio.stop({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.callControl.StopAudioRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cdrs Transcription
<details><summary><code>client.cdrs.transcription.<a href="/src/api/resources/cdrs/resources/transcription/client/Client.ts">get</a>({ ...params }) -> Wavix.CdrTranscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcription of the recorded call identified by `call_id`, including the transcript, speaker turns, and summary.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cdrs.transcription.get({
    call_id: "bbaa37bf-430a-46da-ade3-c248e407016"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.cdrs.GetTranscriptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TranscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## LinkShortener Metrics
<details><summary><code>client.linkShortener.metrics.<a href="/src/api/resources/linkShortener/resources/metrics/client/Client.ts">list</a>({ ...params }) -> Wavix.ShortLinkMetricsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns per-click metrics for short links, including device, location, and campaign attribution, within the requested date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.linkShortener.metrics.list({
    from: "2023-05-01",
    to: "2023-05-31",
    phone: "1872025555",
    utm_campaign: "summer",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.linkShortener.ListMetricsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MetricsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## NumberValidator Results
<details><summary><code>client.numberValidator.results.<a href="/src/api/resources/numberValidator/resources/results/client/Client.ts">get</a>({ ...params }) -> Wavix.PhoneValidationBatchResultResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the results of an asynchronous batch validation identified by `request_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numberValidator.results.get({
    request_id: "12542c5c-1a17-4d12-a163-5b68543e75f6"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.numberValidator.GetResultsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResultsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Numbers Papers
<details><summary><code>client.numbers.papers.<a href="/src/api/resources/numbers/resources/papers/client/Client.ts">upload</a>({ ...params }) -> Wavix.NumberDocument[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a verification document for one or more phone numbers.
Uploaded files must meet the following requirements:
- Allowed formats: PNG, JPG, JPEG, TIFF, BMP, or PDF
- Maximum file size: 10 MB
- Files can't be password protected
- PDF files must not contain digital signatures
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.papers.upload({
    doc_attachment: fs.createReadStream("/path/to/your/file"),
    did_ids: "did_ids",
    doc_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.numbers.UploadPapersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PapersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Profile Config
<details><summary><code>client.profile.config.<a href="/src/api/resources/profile/resources/config/client/Client.ts">get</a>() -> Wavix.GetConfigResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the balance and global limits configured for the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profile.config.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ConfigClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SmsAndMms SenderIds
<details><summary><code>client.smsAndMms.senderIds.<a href="/src/api/resources/smsAndMms/resources/senderIds/client/Client.ts">list</a>() -> Wavix.SenderIdListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Sender IDs registered for the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.senderIds.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SenderIdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.senderIds.<a href="/src/api/resources/smsAndMms/resources/senderIds/client/Client.ts">create</a>({ ...params }) -> Wavix.SenderIdDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Sender ID. Use the 10DLC API to create Sender IDs in the US.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.senderIds.create({
    sender_id: "Wavix",
    type: "numeric",
    countries: ["countries"],
    usecase: "transactional"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.SenderIdCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SenderIdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.senderIds.<a href="/src/api/resources/smsAndMms/resources/senderIds/client/Client.ts">get</a>({ ...params }) -> Wavix.SenderIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Sender ID identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.senderIds.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.GetSenderIdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SenderIdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.senderIds.<a href="/src/api/resources/smsAndMms/resources/senderIds/client/Client.ts">delete</a>({ ...params }) -> Wavix.DeleteSenderIdsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the Sender ID identified by `id`. Deletion is permanent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.senderIds.delete({
    id: "fc34ba88-1eee-476e-b09e-dae63dc441e0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.DeleteSenderIdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SenderIdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SmsAndMms OptOuts
<details><summary><code>client.smsAndMms.optOuts.<a href="/src/api/resources/smsAndMms/resources/optOuts/client/Client.ts">list</a>({ ...params }) -> Wavix.OptOutsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of phone numbers that have opted out of receiving messages from the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.optOuts.list({
    sender_id: "MySender",
    campaign_id: "C123456",
    created_after: "2024-01-01",
    created_before: "2024-12-31"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.ListOptOutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OptOutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.optOuts.<a href="/src/api/resources/smsAndMms/resources/optOuts/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateOptOutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Opts a phone number out of receiving messages from a Sender ID, a 10DLC campaign, or all outbound messages.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.optOuts.create({
    opt_out: {
        number: "16419252149",
        sender_id: "15072429497"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.OptOutCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OptOutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SmsAndMms Messages
<details><summary><code>client.smsAndMms.messages.<a href="/src/api/resources/smsAndMms/resources/messages/client/Client.ts">list</a>({ ...params }) -> Wavix.ListMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of SMS and MMS messages for the authenticated account, filtered by direction, date, and other criteria.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.messages.list({
    sent_after: "2023-04-10",
    sent_before: "2023-04-13",
    type: "outbound",
    from: "15072429497",
    to: "16419252149",
    tag: "campaignX",
    page: 2,
    per_page: 50
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.ListMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.messages.<a href="/src/api/resources/smsAndMms/resources/messages/client/Client.ts">send</a>({ ...params }) -> Wavix.SendMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends an SMS or MMS message. MMS is supported for U.S. numbers only. Track delivery using the returned `message_id` and the message status callback.
**Rate limit**: 20 messages per phone number in 24 hours.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
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
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.SendMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.messages.<a href="/src/api/resources/smsAndMms/resources/messages/client/Client.ts">get</a>({ ...params }) -> Wavix.GetMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the SMS or MMS message identified by `id`, including its delivery status and content.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.messages.get({
    id: "3a525ca2-6909-4c72-9399-905adf7f3a74"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.GetMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.smsAndMms.messages.<a href="/src/api/resources/smsAndMms/resources/messages/client/Client.ts">listAll</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Streams matching SMS and MMS messages as newline-delimited JSON (NDJSON), one message per line, for bulk export.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smsAndMms.messages.listAll({
    sent_after: "2023-04-10T00:00:00",
    sent_before: "2023-04-13T23:59:59",
    type: "outbound",
    from: "15072429497",
    to: "16419252149",
    tag: "campaignX"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.smsAndMms.ListAllMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SpeechAnalytics File
<details><summary><code>client.speechAnalytics.file.<a href="/src/api/resources/speechAnalytics/resources/file/client/Client.ts">get</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the original audio file submitted for the transcription identified by `request_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.speechAnalytics.file.get({
    request_id: "request_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.speechAnalytics.GetFileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FileClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SubAccounts Transactions
<details><summary><code>client.subAccounts.transactions.<a href="/src/api/resources/subAccounts/resources/transactions/client/Client.ts">list</a>({ ...params }) -> Wavix.SubAccountsTransactionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of billing transactions for the sub-account identified by `id`, within the requested date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subAccounts.transactions.list({
    id: 123,
    from_date: "2023-01-01",
    to_date: "2023-12-31",
    type: 1,
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.subAccounts.ListTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc Brands
<details><summary><code>client.tenDlc.brands.<a href="/src/api/resources/tenDlc/resources/brands/client/Client.ts">list</a>({ ...params }) -> Wavix.ListBrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of 10DLC Brands for the authenticated account, filtered by date, name, legal name, and status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brands.list({
    dba_name: "Brand",
    company_name: "Company",
    entity_type: "PRIVATE_PROFIT",
    status: "VERIFIED",
    country: "US",
    show_deleted: false,
    ein_taxid: "999999999",
    mock: false,
    created_before: "2024-08-22",
    created_after: "2024-08-22",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListBrandsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brands.<a href="/src/api/resources/tenDlc/resources/brands/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateBrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a 10DLC Brand. TCR automatically verifies the brand identity. Only brands with `VERIFIED` or `VETTED_VERIFIED` identity status can register 10DLC Campaigns.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brands.create({});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.TenDlcBrandCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brands.<a href="/src/api/resources/tenDlc/resources/brands/client/Client.ts">get</a>({ ...params }) -> Wavix.GetBrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brands.get({
    brand_id: "BM20QP9"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.GetBrandsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brands.<a href="/src/api/resources/tenDlc/resources/brands/client/Client.ts">update</a>({ ...params }) -> Wavix.UpdateBrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the 10DLC Brand identified by `brand_id`. Changing identity fields, including `ein_taxid`, `ein_taxid_country`, and `entity_type`, resets the Brand status to `UNVERIFIED` and triggers automatic re-submission. Brands in `VETTED_VERIFIED` status or with active Campaigns cannot be updated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brands.update({
    brand_id: "BM20QP9"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.TenDlcBrandUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brands.<a href="/src/api/resources/tenDlc/resources/brands/client/Client.ts">delete</a>({ ...params }) -> Wavix.DeleteBrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a 10DLC Brand. Brands with active campaigns cannot be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brands.delete({
    brand_id: "BM20QP9"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.DeleteBrandsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brands.<a href="/src/api/resources/tenDlc/resources/brands/client/Client.ts">qualifyUsecase</a>({ ...params }) -> Wavix.QualifyUsecaseBrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the qualification results for a 10DLC Brand use case. Includes MNO-specific attributes, restrictions, and fees.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brands.qualifyUsecase({
    brand_id: "BMQFB7X",
    use_case: "AGENTS_FRANCHISES"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.QualifyUsecaseBrandsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc BrandAppeals
<details><summary><code>client.tenDlc.brandAppeals.<a href="/src/api/resources/tenDlc/resources/brandAppeals/client/Client.ts">list</a>({ ...params }) -> Wavix.TenDlcBrandAppeal[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the identity verification appeals submitted for the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandAppeals.list({
    brand_id: "BM20QP9"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListBrandAppealsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandAppealsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandAppeals.<a href="/src/api/resources/tenDlc/resources/brandAppeals/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateBrandAppealsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an appeal for 10DLC brand identity verification. Provide any additional documentation to support the appeal. Use `appeal_category` to specify the appeal type:
- `VERIFY_TAX_ID` — Use if the brand is UNVERIFIED due to a tax ID mismatch. Applies to private companies, public companies, non-profits, and government entities.
- `VERIFY_NON_PROFIT` — Use if a non-profit brand is UNVERIFIED or VERIFIED but missing tax-exempt status.
- `VERIFY_GOVERNMENT` — Use if a government brand is UNVERIFIED or VERIFIED but missing government entity status.      
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandAppeals.create({
    brand_id: "BM20QP9",
    appeal_categories: ["VERIFY_TAX_ID"],
    evidence: ["855dff49-c097-4645-3983-08dcb9856232"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.CreateBrandAppealsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandAppealsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc BrandEvidence
<details><summary><code>client.tenDlc.brandEvidence.<a href="/src/api/resources/tenDlc/resources/brandEvidence/client/Client.ts">list</a>({ ...params }) -> Wavix.ListBrandEvidenceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the evidence files uploaded for the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandEvidence.list({
    brand_id: "B6AI7PA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListBrandEvidenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandEvidenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandEvidence.<a href="/src/api/resources/tenDlc/resources/brandEvidence/client/Client.ts">upload</a>({ ...params }) -> Wavix.UploadBrandEvidenceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a supporting evidence file for the 10DLC Brand identified by `brand_id`. Supported formats include `.jpg`, `.png`, and `.pdf`. Maximum size is 10 MB.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandEvidence.upload({
    file: fs.createReadStream("/path/to/your/file"),
    brand_id: "B6AI7PA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.UploadBrandEvidenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandEvidenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandEvidence.<a href="/src/api/resources/tenDlc/resources/brandEvidence/client/Client.ts">get</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Brand evidence file identified by the evidence ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandEvidence.get({
    brand_id: "brand_id",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.GetBrandEvidenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandEvidenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandEvidence.<a href="/src/api/resources/tenDlc/resources/brandEvidence/client/Client.ts">delete</a>({ ...params }) -> Wavix.DeleteBrandEvidenceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the Brand evidence file identified by the evidence ID. Deletion is permanent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandEvidence.delete({
    brand_id: "B6AI7PA",
    id: "191eb205-8357-4d71-b8da-160a25a000d7"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.DeleteBrandEvidenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandEvidenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc BrandVettings
<details><summary><code>client.tenDlc.brandVettings.<a href="/src/api/resources/tenDlc/resources/brandVettings/client/Client.ts">list</a>({ ...params }) -> Wavix.TenDlcBrandVetting[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the external vettings for the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandVettings.list({
    brand_id: "B6AI7PA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListBrandVettingsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandVettingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandVettings.<a href="/src/api/resources/tenDlc/resources/brandVettings/client/Client.ts">create</a>({ ...params }) -> Wavix.TenDlcBrandVetting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requests external vetting for a 10DLC Brand. Supported providers: `AEGIS`, `CV`, `WMC`. Supported classes: `STANDARD`, `ENHANCED`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandVettings.create({
    brand_id: "B6AI7PA",
    evp_id: "AEGIS",
    vetting_class: "STANDARD"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.TenDlcBrandVettingCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandVettingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandVettings.<a href="/src/api/resources/tenDlc/resources/brandVettings/client/Client.ts">import</a>({ ...params }) -> Wavix.TenDlcBrandVetting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Imports an existing external vetting record into the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandVettings.import({
    brand_id: "B6AI7PA",
    evp_id: "AEGIS",
    vetting_id: "13d8e00c-3cb4-4dc0-9e26-d5057fa938d9",
    vetting_token: "3oDcE1vq8OR43claMa6Thu/7V4vzZywAfKRgiJnXDjlw+08wpWbGqOssAXKgeZibHCLaGgXvU/yPb7kISeeb5qGdisGRLdhPnSNpvRR82RnCWYNpTp92orlJWjTJU8ZGmNxL5MwK0tt/9SxCha36iTtPV2+4vND8xCPe5suItuQTonG4A3Yi6F1LMqihgwdesRjxJnKqcE7Thcv9ug1NyNPYEZQvPugFj2F2DdU6jFZcOWgXsnE7ucZ+xNaNX9LkF9if3v0hrcviG9L8bUUrpPBGr02txP0i+cPBTLbj4Rq1Ox83R+WUx1gnoXHCIU1ByDGWvQq2Ef4qxGVOwPJHJbja1BovxKBk4YJxiz8OSO68QAIEfxuPTpj5eZz7KEFtFmBIVaVmxBDe4b8Tpl01C2rek7xgPzXaoURvh7CQVnVmJL00DTWKvyOmUOQQW901XEcgcJ7VWgfIvxhIMuXEXXtVDGNowmEc9JQXXYHVlGuN5QicSbApkwwqRZI7TQ4lsS66zCfqomIIJyBNRJpl+8sGwsa2J2h6fEkAD77J9zdUgIKXMFamHbvRadCKMZNIbMrkOC7PuOjZdSiWKh5A8FSjzkv3PlN2hRDqkaODEoodp5pTQeBtNe37+uAMOuHNfsZXlwvfMgCZjiZJ9HQNSLhJBUq7/IvT/EzszUk4HPTj/WFSbT1YrrkDi+zrB20ZDY9lZFWxN1hlYQoNcanDAAWPmw/yW1+8DroL5WIMGsXX3WFGOG7eWB1GHgFQsziAeRQl78u1qOvsRMN08+GrkASBJwqwy5l7xCesUKqbz3O0QA/dwzzsWIDvFPavZpjqMBSjRTurQLFahAaGmdY0BX/Ii+s2+OxfaHQIa1lgucm0P7GPKeZvLX/8boO01Onr/87ra+NX7ABvQb+SXvwsg+Bm5CziWB6DMKDKRD/KQjHxpjIY35UwSEW7G4ixux7ufizXttthHfPJWd/rWFhfYigFhVLgIPCR12smwFVuZwM7ujvY2CIM0X4E0dsX9uVHkgYmqRIdNf5vshpmRuIcHsXZpTJP/tD7zQM6m214c5xkJSfAVIaD7WzRYS4eVL+R3z4u+6n5p6FjuWSjSzuEffUai3HCWjes4JbtDSjIwoG0tOMtBukgPbreH+pjXcvnhU+1QhCV2aIdG6C3FmaI5Uoo/mthJyiFAThwtOpxQ5YkdsRunqVVEFYZfMNEn4Ig2clCFrLOm46JB2wPcLGP2MoH5RqajYzQ6IV8IXIFQVzG0C7HoHsBkVp+GrpnH6N0FCKR+fpbGjigM2lLf4pYBhChUY4ao9hvV1hd8ikS6QoasvDLPytBBa1YAwbSa8d7YdwO6fXfQqetfS8S9gbHD0zxazw5p9Lp5fXFmajDNkD2voYNMzOHJMMHG/49pWV2"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.TenDlcBrandVettingImportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandVettingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc BrandVettingAppeals
<details><summary><code>client.tenDlc.brandVettingAppeals.<a href="/src/api/resources/tenDlc/resources/brandVettingAppeals/client/Client.ts">list</a>({ ...params }) -> Wavix.TenDlcBrandVettingAppeal[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the external vetting appeals for the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandVettingAppeals.list({
    brand_id: "BMQFB7X"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListBrandVettingAppealsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandVettingAppealsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.brandVettingAppeals.<a href="/src/api/resources/tenDlc/resources/brandVettingAppeals/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateBrandVettingAppealsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an appeal for an external vetting of the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.brandVettingAppeals.create({
    brand_id: "B6AI7PA",
    appeal_categories: ["VERIFY_TAX_ID"],
    evidence: ["855dff49-c097-4645-3983-08dcb9856232"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.TenDlcBrandVettingAppealCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandVettingAppealsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc Campaigns
<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">list</a>({ ...params }) -> Wavix.ListCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of 10DLC Campaigns for the authenticated account, filtered by date, status, and use case.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.list({
    name: "Name",
    usecase: "2FA",
    status: "APPROVED",
    mock: true,
    created_before: "2024-08-22",
    created_after: "2024-08-22",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">listByBrand</a>({ ...params }) -> Wavix.ListByBrandCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of 10DLC Campaigns associated with the 10DLC Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.listByBrand({
    brand_id: "BM20QP9",
    name: "Name",
    usecase: "2FA",
    status: "APPROVED",
    mock: true,
    created_before: "2024-08-22",
    created_after: "2024-08-22",
    page: 1,
    per_page: 25
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListByBrandCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a 10DLC Campaign under the 10DLC Brand identified by `brand_id`. The Brand must have a verified identity status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.create({
    brand_id: "BM20QP9",
    affiliate_marketing: false,
    age_gated: false,
    auto_renewal: false,
    direct_lending: false,
    embedded_links: false,
    embedded_phones: false,
    embedded_link_sample: "https://site.com/verify",
    description: "Our campaign aims to \u2026",
    optin_workflow: "Our SMS ...",
    help: true,
    help_keywords: "help",
    help_message: "For help, please visit www.site.com. To opt-out, reply STOP.",
    optin: true,
    optin_keywords: "begin,start",
    optin_message: "You are now opted-in for help please reply HELP, to stop please reply STOP",
    optout: true,
    optout_keywords: "stop,quit,unsubscribe",
    optout_message: "You are now opted out and will receive no further messages",
    name: "My first campaign",
    sample1: "Your verification code is XXXXXX",
    sample2: "XXXX is your verification code",
    sample3: "Your code is XXXXXX, valid for 10 minutes",
    sample4: "Use code XXXXXX to confirm your login",
    sample5: "XXXXXX is your one-time passcode",
    mock: false,
    usecase: "2FA",
    privacy_policy: "https://site.com/privacy-policy",
    terms_conditions: "https://site.com/terms-and-conditions"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.TenDlcCampaignCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">get</a>({ ...params }) -> Wavix.GetCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the 10DLC Campaign identified by `campaign_id` under the Brand identified by `brand_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.get({
    brand_id: "BM20QP9",
    campaign_id: "CKLCK95"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.GetCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">update</a>({ ...params }) -> Wavix.UpdateCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the 10DLC Campaign identified by `campaign_id`. Only the provided fields are changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.update({
    brand_id: "BM20QP9",
    campaign_id: "CKLCK95"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.TenDlcCampaignUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">delete</a>({ ...params }) -> Wavix.DeleteCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a 10DLC Campaign. Associated phone numbers cannot be used as Sender IDs once the Campaign is deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.delete({
    brand_id: "BM20QP9",
    campaign_id: "CKLCK95"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.DeleteCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaigns.<a href="/src/api/resources/tenDlc/resources/campaigns/client/Client.ts">nudge</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Requests action on a pending or rejected 10DLC Campaign. Use `nudge_intent` to specify the action: 
- `REVIEW`: Request review for a pending Campaign. - `APPEAL_REJECTION`: Appeal a rejected Campaign.
Note:
- The Campaign must be at least 72 hours old.
- Only one nudge request per Campaign is allowed every 24 hours.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaigns.nudge({
    brand_id: "B9FXYNH",
    campaign_id: "CSJ4TV0",
    nudge_intent: "REVIEW",
    description: "Please review the campaign."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.NudgeCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc Subscriptions
<details><summary><code>client.tenDlc.subscriptions.<a href="/src/api/resources/tenDlc/resources/subscriptions/client/Client.ts">list</a>() -> Wavix.TenDlcEventSubscription[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the 10DLC event subscriptions for the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.subscriptions.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SubscriptionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.subscriptions.<a href="/src/api/resources/tenDlc/resources/subscriptions/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a callback URL to receive Wavix 10DLC event notifications.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.subscriptions.create({
    subscription_category: "brand",
    url: "https://webhook.url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.TenDlcEventSubscription` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.subscriptions.<a href="/src/api/resources/tenDlc/resources/subscriptions/client/Client.ts">delete</a>({ ...params }) -> Wavix.DeleteSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the 10DLC event subscription for the specified event category.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.subscriptions.delete({
    subscription_category: "number"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.DeleteSubscriptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TenDlc CampaignNumbers
<details><summary><code>client.tenDlc.campaignNumbers.<a href="/src/api/resources/tenDlc/resources/campaignNumbers/client/Client.ts">link</a>({ ...params }) -> Wavix.LinkCampaignNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links a phone number to a 10DLC Campaign. Wavix automatically creates a Sender ID once the number is approved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaignNumbers.link({
    brand_id: "B9FXYNH",
    campaign_id: "CSJ4TV0",
    number: "17029641104"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.LinkCampaignNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaignNumbers.<a href="/src/api/resources/tenDlc/resources/campaignNumbers/client/Client.ts">unlink</a>({ ...params }) -> Wavix.UnlinkCampaignNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks a phone number from a 10DLC Campaign. The associated Sender ID is also deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaignNumbers.unlink({
    brand_id: "B9FXYNH",
    campaign_id: "CSJ4TV0",
    number: "17029641104"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.UnlinkCampaignNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tenDlc.campaignNumbers.<a href="/src/api/resources/tenDlc/resources/campaignNumbers/client/Client.ts">list</a>({ ...params }) -> Wavix.ListCampaignNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the phone numbers linked to the 10DLC Campaign identified by `campaign_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenDlc.campaignNumbers.list({
    brand_id: "B9FXYNH",
    campaign_id: "CSJ4TV0"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.tenDlc.ListCampaignNumbersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CampaignNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TwoFa Verification
<details><summary><code>client.twoFa.verification.<a href="/src/api/resources/twoFa/resources/verification/client/Client.ts">create</a>({ ...params }) -> Wavix.CreateVerificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a 2FA verification and sends a one-time password (OTP) to the destination phone number over the selected channel. Requires a 2FA service configured in the Wavix portal; the service is reused to generate and validate OTPs.

The verification proceeds through three steps:
1. Create a verification to generate and send an OTP.
2. Resend the OTP on the same verification if needed.
3. Validate the OTP through the check endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.twoFa.verification.create({
    service_id: "7204a030201211ee9fb47d093f2f127c",
    to: "447919433768",
    channel: "sms"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.twoFa.TwoFactorVerificationCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.twoFa.verification.<a href="/src/api/resources/twoFa/resources/verification/client/Client.ts">resend</a>({ ...params }) -> Wavix.ResendVerificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resends the OTP for the verification identified by `session_id` over the specified channel. Previously sent codes are invalidated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.twoFa.verification.resend({
    session_id: "2953d4308f2e11ecb75fcdafd6d2d687",
    channel: "sms"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.twoFa.TwoFactorVerificationResendRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.twoFa.verification.<a href="/src/api/resources/twoFa/resources/verification/client/Client.ts">check</a>({ ...params }) -> Wavix.CheckVerificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates the OTP submitted by the end user against the verification identified by `session_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.twoFa.verification.check({
    session_id: "2953d4308f2e11ecb75fcdafd6d2d687",
    code: "123456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.twoFa.TwoFactorVerificationCheckRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.twoFa.verification.<a href="/src/api/resources/twoFa/resources/verification/client/Client.ts">cancel</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels the 2FA verification identified by `session_id`. No further codes are sent, and previously sent codes can no longer be validated. A new verification is required to send another code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.twoFa.verification.cancel({
    session_id: "2953d4308f2e11ecb75fcdafd6d2d687"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.twoFa.CancelVerificationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TwoFa Sessions
<details><summary><code>client.twoFa.sessions.<a href="/src/api/resources/twoFa/resources/sessions/client/Client.ts">list</a>({ ...params }) -> Wavix.ListSessionsResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the 2FA verifications for the service identified by `service_id`, within the requested date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.twoFa.sessions.list({
    service_id: "7204a030201211ee9fb47d093f2f127c",
    from: "2022-01-01",
    to: "2022-01-31"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.twoFa.ListSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TwoFa Events
<details><summary><code>client.twoFa.events.<a href="/src/api/resources/twoFa/resources/events/client/Client.ts">list</a>({ ...params }) -> Wavix.TwoFactorVerificationEvent[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the lifecycle events of the 2FA verification identified by `session_id`, such as number lookup and code delivery.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.twoFa.events.list({
    session_id: "8753d4308f2e11ecb75fcdafd6d2d690"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.twoFa.ListEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webrtc Tokens
<details><summary><code>client.webrtc.tokens.<a href="/src/api/resources/webrtc/resources/tokens/client/Client.ts">list</a>() -> Wavix.WebRtcTokensListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of active Wavix Embeddable widget tokens for the authenticated account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webrtc.tokens.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webrtc.tokens.<a href="/src/api/resources/webrtc/resources/tokens/client/Client.ts">create</a>({ ...params }) -> Wavix.WebRtcTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Wavix Embeddable widget token that authenticates a browser-based softphone session. The token expires after `ttl` seconds.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webrtc.tokens.create({
    sip_trunk: "my-sip-trunk",
    payload: {
        "user_id": "42"
    },
    ttl: 3600
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.webrtc.WebRtcTokenCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webrtc.tokens.<a href="/src/api/resources/webrtc/resources/tokens/client/Client.ts">get</a>({ ...params }) -> Wavix.WebRtcToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Wavix Embeddable widget token identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webrtc.tokens.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.webrtc.GetTokensRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webrtc.tokens.<a href="/src/api/resources/webrtc/resources/tokens/client/Client.ts">update</a>({ ...params }) -> Wavix.WebRtcToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the `payload` carried by the Wavix Embeddable widget token identified by `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webrtc.tokens.update({
    id: "id",
    payload: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.webrtc.WebRtcTokenUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webrtc.tokens.<a href="/src/api/resources/webrtc/resources/tokens/client/Client.ts">delete</a>({ ...params }) -> Wavix.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the Wavix Embeddable widget token identified by `id`. The token can no longer authenticate widget sessions, and any active session using it ends.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webrtc.tokens.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Wavix.webrtc.DeleteTokensRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

