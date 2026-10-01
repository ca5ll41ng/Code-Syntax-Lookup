---
id: "en-php-function-mongodb-driver-clientencryption-encrypt"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::encrypt"
title: "Encrypt a value"
signature: "final public MongoDB\\BSON\\Binary MongoDB\\Driver\\ClientEncryption::encrypt(mixed $value, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt a value

## Description

```php
final public MongoDB\BSON\Binary MongoDB\Driver\ClientEncryption::encrypt(mixed $value, array|null $options = null)
```

Encrypts the value.

## Parameters

- **`$value`** — The value to be encrypted. Any value that can be inserted into MongoDB can be encrypted using this method.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | algorithm | `string` | The encryption algorithm to be used. This option is required. Specify one of the following ClientEncryption constants: `MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_DETERMINISTIC` `MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_RANDOM` `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` `MongoDB\Driver\ClientEncryption::ALGORITHM_UNINDEXED` `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE` | | contentionFactor | `int` | The contention factor for evaluating queries with indexed, encrypted payloads. This option only applies and may only be specified when `algorithm` is `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` or `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE`. | | keyAltName | `string` | Identifies a key vault collection document by `keyAltName`. This option is mutually exclusive with `keyId` and exactly one is required. | | keyId | `MongoDB\BSON\Binary` | Identifies a data key by `_id`. The value is a UUID (binary subtype 4). This option is mutually exclusive with `keyAltName` and exactly one is required. | | queryType | `string` | The query type for evaluating queries with indexed, encrypted payloads. Specify one of the following ClientEncryption constants: `MongoDB\Driver\ClientEncryption::QUERY_TYPE_EQUALITY` `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE` This option only applies and may only be specified when `algorithm` is `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` or `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE`. | | rangeOpts | `array` | Index options for a queryable encryption field supporting "range" queries. The options below must match the values set in the `encryptedFields` of the target collection. For double and decimal128 BSON field types, `min`, `max`, and `precision` must all be set, or all be unset. \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| min \| `mixed` \| Required if `precision` is set. The minimum BSON value of the range. \| \| max \| `mixed` \| Required if `precision` is set. The maximum BSON value of the range. \| \| sparsity \| `int` \| Optional. Positive 64-bit integer. \| \| precision \| `int` \| Optional. Positive 32-bit integer specifying precision to use for explicit encryption. May only be set for double or decimal128 BSON field types. \| \| trimFactor \| `int` \| Optional. Positive 32-bit integer. \| |

## Return Values

Returns the encrypted value as `MongoDB\BSON\Binary` object with subtype 6.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\EncryptionException` if an error occurs while encrypting the value 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.20.0 | Added the `"trimFactor"` range option. The `"sparsity"` range option is now optional. |
| PECL mongodb 1.16.0 | Added the `"rangeOpts"` option. |
| PECL mongodb 1.14.0 | Added the `"contentionFactor"` and `"queryType"` options. |

## See Also

 `MongoDB\Driver\ClientEncryption::decrypt()` `MongoDB\Driver\ClientEncryption::encryptExpression()`
