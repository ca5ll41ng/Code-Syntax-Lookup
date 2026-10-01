---
id: "en-php-function-mongodb-driver-clientencryption-encryptexpression"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::encryptExpression"
title: "Encrypts a match or aggregate expression"
signature: "final public object MongoDB\\Driver\\ClientEncryption::encryptExpression(array|object $expr, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.encryptexpression.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypts a match or aggregate expression

## Description

```php
final public object MongoDB\Driver\ClientEncryption::encryptExpression(array|object $expr, array|null $options = null)
```

Encrypts a match or aggregate expression to query a range index.

To query with a range encrypted payload, the `MongoDB\Driver\Manager` must be configured with the `"autoEncryption"` driver option. The `"bypassQueryAnalysis"` auto encryption option may be `true`. The `"bypassAutoEncryption"` auto encryption option must be `false`.

> The extension does not yet support range queries for Decimal128 BSON field types.

## Parameters

- **`$expr`** — The match or aggregate expression to be encrypted. Expressions must use at least one of the `$gt`, `$gte`, `$lt`, or `$lte` operators. A top-level `$and` operator is required, even if only a single comparison operator is used. — An example of a supported match expression (applies to queries and the `$match` aggregation stage) is as follows:
  ```text


  [
      '$and' => [
          [ '<field>' => [ '$gt'  => '<value1>' ] ],
          [ '<field>' => [ '$lte' => '<value2>' ] ],
      ],
  ]

       
  ```

 — An example of a supported aggregate expression is as follows:
  ```text


  [
      '$and' => [
          [ '$gte' => [ '<fieldPath>', '<value1>' ] ],
          [ '$lt'  => [ '<fieldPath>', '<value2>' ] ],
      ],
  ]

       
  ```


- **`$options`** — | Option | Type | Description | | --- | --- | --- | | algorithm | `string` | The encryption algorithm to be used. This option is required. Specify one of the following ClientEncryption constants: `MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_DETERMINISTIC` `MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_RANDOM` `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` `MongoDB\Driver\ClientEncryption::ALGORITHM_UNINDEXED` `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE` | | contentionFactor | `int` | The contention factor for evaluating queries with indexed, encrypted payloads. This option only applies and may only be specified when `algorithm` is `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` or `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE`. | | keyAltName | `string` | Identifies a key vault collection document by `keyAltName`. This option is mutually exclusive with `keyId` and exactly one is required. | | keyId | `MongoDB\BSON\Binary` | Identifies a data key by `_id`. The value is a UUID (binary subtype 4). This option is mutually exclusive with `keyAltName` and exactly one is required. | | queryType | `string` | The query type for evaluating queries with indexed, encrypted payloads. Specify one of the following ClientEncryption constants: `MongoDB\Driver\ClientEncryption::QUERY_TYPE_EQUALITY` `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE` This option only applies and may only be specified when `algorithm` is `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` or `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE`. | | rangeOpts | `array` | Index options for a queryable encryption field supporting "range" queries. The options below must match the values set in the `encryptedFields` of the target collection. For double and decimal128 BSON field types, `min`, `max`, and `precision` must all be set, or all be unset. \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| min \| `mixed` \| Required if `precision` is set. The minimum BSON value of the range. \| \| max \| `mixed` \| Required if `precision` is set. The maximum BSON value of the range. \| \| sparsity \| `int` \| Optional. Positive 64-bit integer. \| \| precision \| `int` \| Optional. Positive 32-bit integer specifying precision to use for explicit encryption. May only be set for double or decimal128 BSON field types. \| \| trimFactor \| `int` \| Optional. Positive 32-bit integer. \| |

## Return Values

Returns the encrypted expression as an object.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\EncryptionException` if an error occurs while encrypting the expression 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.20.0 | Added the `"trimFactor"` range option. The `"sparsity"` range option is now optional. |

## See Also

 `MongoDB\Driver\Manager::__construct()` `MongoDB\Driver\ClientEncryption::encrypt()`
