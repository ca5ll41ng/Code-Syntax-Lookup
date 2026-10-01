---
id: "en-php-guide-class-mongodb-driver-clientencryption"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-clientencryption"
title: "The MongoDB\\Driver\\ClientEncryption class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-clientencryption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\ClientEncryption class

MongoDB\Driver\ClientEncryption

   Introduction  The `MongoDB\Driver\ClientEncryption` class handles creation of data keys for client-side encryption, as well as manually encrypting and decrypting values.      Class Synopsis   `MongoDB\Driver\ClientEncryption`   `final`  `MongoDB\Driver\ClientEncryption`       `const` `string` `MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_DETERMINISTIC` AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic   `const` `string` `MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_RANDOM` AEAD_AES_256_CBC_HMAC_SHA_512-Random   `const` `string` `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED` Indexed   `const` `string` `MongoDB\Driver\ClientEncryption::ALGORITHM_UNINDEXED` Unindexed   `const` `string` `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE` Range   `const` `string` `MongoDB\Driver\ClientEncryption::QUERY_TYPE_EQUALITY` equality   `const` `string` `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE` range         Predefined Constants 
- **`MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_DETERMINISTIC`** — Specifies an algorithm for [deterministic encryption](core/csfle/fundamentals/encryption-algorithms/#deterministic-encryption), which is suitable for querying.
- **`MongoDB\Driver\ClientEncryption::AEAD_AES_256_CBC_HMAC_SHA_512_RANDOM`** — Specifies an algorithm for [randomized encryption](core/csfle/fundamentals/encryption-algorithms/#randomized-encryption)
- **`MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED`** — Specifies an algorithm for an indexed, encrypted payload, which can be used with queryable encryption. — To insert or query with an indexed, encrypted payload, the `MongoDB\Driver\Manager` must be configured with the `"autoEncryption"` driver option. The `"bypassQueryAnalysis"` auto encryption option may be `true`. The `"bypassAutoEncryption"` auto encryption option must be `false`.
- **`MongoDB\Driver\ClientEncryption::ALGORITHM_UNINDEXED`** — Specifies an algorithm for an unindexed, encrypted payload.
- **`MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE`** — Specifies an algorithm for a range encrypted payload, which can be used with queryable encryption. — To query with a range encrypted payload, the `MongoDB\Driver\Manager` must be configured with the `"autoEncryption"` driver option. The `"bypassQueryAnalysis"` auto encryption option may be `true`. The `"bypassAutoEncryption"` auto encryption option must be `false`.
  > The extension does not yet support range queries for Decimal128 BSON field types.

- **`MongoDB\Driver\ClientEncryption::QUERY_TYPE_EQUALITY`** — Specifies an equality query type, which is used in conjunction with `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED`.
- **`MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE`** — Specifies a range query type, which is used in conjunction with `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE`.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Removed `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE_PREVIEW` and `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE_PREVIEW`. |
| PECL mongodb 1.20.0 | Added `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE` and `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE`.    Deprecated `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE_PREVIEW` and `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE_PREVIEW`. |
| PECL mongodb 1.16.0 | Added `MongoDB\Driver\ClientEncryption::ALGORITHM_RANGE_PREVIEW` and `MongoDB\Driver\ClientEncryption::QUERY_TYPE_RANGE_PREVIEW`. |
| PECL mongodb 1.14.0 | Added `MongoDB\Driver\ClientEncryption::ALGORITHM_INDEXED`, `MongoDB\Driver\ClientEncryption::ALGORITHM_UNINDEXED`, and `MongoDB\Driver\ClientEncryption::QUERY_TYPE_EQUALITY`. |

   See Also  `MongoDB\Driver\Manager::createClientEncryption()`
