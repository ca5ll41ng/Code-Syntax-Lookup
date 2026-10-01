---
id: "en-php-function-mongodb-driver-clientencryption-createdatakey"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::createDataKey"
title: "Creates a key document"
signature: "final public MongoDB\\BSON\\Binary MongoDB\\Driver\\ClientEncryption::createDataKey(string $kmsProvider, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.createdatakey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a key document

## Description

```php
final public MongoDB\BSON\Binary MongoDB\Driver\ClientEncryption::createDataKey(string $kmsProvider, array|null $options = null)
```

Creates a new key document and inserts it into the key vault collection.

## Parameters

- **`$kmsProvider`** — The KMS provider (e.g. `"local"`, `"aws"`) that will be used to encrypt the new data key.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | masterKey | `array` | The masterKey document identifies a KMS-specific key used to encrypt the new data key. This option is required unless `$kmsProvider` is `"local"`. \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| region \| string \| Required. \| \| key \| string \| Required. The Amazon Resource Name (ARN) to the AWS customer master key (CMK). \| \| endpoint \| string \| Optional. An alternate host identifier to send KMS requests to. May include port number. \| \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| keyVaultEndpoint \| string \| Required. Host with optional port (e.g. "example.vault.azure.net"). \| \| keyName \| string \| Required. \| \| keyVersion \| string \| Optional. A specific version of the named key. Defaults to using the key's primary version. \| \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| projectId \| string \| Required. \| \| location \| string \| Required. \| \| keyRing \| string \| Required. \| \| keyName \| string \| Required. \| \| keyVersion \| string \| Optional. A specific version of the named key. Defaults to using the key's primary version. \| \| endpoint \| string \| Optional. Host with optional port. Defaults to "cloudkms.googleapis.com". \| \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| keyId \| string \| Optional. Unique identifier to a 96-byte KMIP secret data managed object. If unspecified, the driver creates a random 96-byte KMIP secret data managed object. \| \| endpoint \| string \| Optional. Host with optional port. \| \| delegated \| bool \| Optional. If true, this key should be decrypted by the KMIP server. \| | | keyAltNames | `array` | An optional list of string alternate names used to reference a key. If a key is created with alternate names, then encryption may refer to the key by the unique alternate name instead of by `_id`. | | keyMaterial | `MongoDB\BSON\Binary` | An optional 96-byte value to use as custom key material for the data key being created. If keyMaterial is given, the custom key material is used for encrypting and decrypting data. Otherwise, the key material for the new data key is generated from a cryptographically secure random device. |

## Return Values

Returns the identifier of the new key as a `MongoDB\BSON\Binary` object with subtype 4 (UUID).

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.20.0 | Added `"delegated"` to the KMIP provider masterKey options. |
| PECL mongodb 1.15.0 | Added the `"keyMaterial"` option. |
| PECL mongodb 1.10.0 | Azure and GCP are now supported as KMS providers for client-side encryption. |
