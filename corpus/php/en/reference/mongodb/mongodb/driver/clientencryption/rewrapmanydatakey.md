---
id: "en-php-function-mongodb-driver-clientencryption-rewrapmanydatakey"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::rewrapManyDataKey"
title: "Rewraps data keys"
signature: "final public object MongoDB\\Driver\\ClientEncryption::rewrapManyDataKey(array|object $filter, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.rewrapmanydatakey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewraps data keys

## Description

```php
final public object MongoDB\Driver\ClientEncryption::rewrapManyDataKey(array|object $filter, array|null $options = null)
```

Rewraps (i.e. decrypts and re-encrypts) zero or more data keys in the key vault collection that match the given `$filter`.

If the `"provider"` option is not specified, matching data keys will be rewrapped with their current KMS provider. Otherwise, matching data keys will be re-encrypted according to the specified `"provider"` and `"masterKey"` options.

## Parameters

- **`$filter` (`array|object`)** — The [query predicate](tutorial/query-documents/). An empty predicate will match all documents in the collection.
  > When evaluating query criteria, MongoDB compares types and values according to its own [comparison rules for BSON types](reference/bson-type-comparison-order/), which differs from PHP's comparison and type juggling rules. When matching a special BSON type the query criteria should use the respective BSON class (e.g. use `MongoDB\BSON\ObjectId` to match an [ObjectId]()).


- **`$options`** — | Option | Type | Description | | --- | --- | --- | | provider | `string` | The KMS provider (e.g. `"local"`, `"aws"`) that will be used to re-encrypt the matched data keys. If a KMS provider is not specified, matched data keys will be re-encrypted with their current KMS provider. | | masterKey | `array` | The masterKey identifies a KMS-specific key used to encrypt the new data key. This option should not be specified without the `"provider"` option. This option is required if `"provider"` is specified and not `"local"`. \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| region \| string \| Required. \| \| key \| string \| Required. The Amazon Resource Name (ARN) to the AWS customer master key (CMK). \| \| endpoint \| string \| Optional. An alternate host identifier to send KMS requests to. May include port number. \| \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| keyVaultEndpoint \| string \| Required. Host with optional port (e.g. "example.vault.azure.net"). \| \| keyName \| string \| Required. \| \| keyVersion \| string \| Optional. A specific version of the named key. Defaults to using the key's primary version. \| \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| projectId \| string \| Required. \| \| location \| string \| Required. \| \| keyRing \| string \| Required. \| \| keyName \| string \| Required. \| \| keyVersion \| string \| Optional. A specific version of the named key. Defaults to using the key's primary version. \| \| endpoint \| string \| Optional. Host with optional port. Defaults to "cloudkms.googleapis.com". \| \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| keyId \| string \| Optional. Unique identifier to a 96-byte KMIP secret data managed object. If unspecified, the driver creates a random 96-byte KMIP secret data managed object. \| \| endpoint \| string \| Optional. Host with optional port. \| \| delegated \| bool \| Optional. If true, this key should be decrypted by the KMIP server. \| |

## Return Values

Returns an object, which will have an optional `bulkWriteResult` property containing the result of the internal `bulkWrite` operation as an object. If no data keys matched the filter or the write was unacknowledged, the `bulkWriteResult` property will be `null`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\EncryptionException` if an error occurs while decrypting or re-encrypting a data key. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.20.0 | Added `"delegated"` to the KMIP provider masterKey options. |
