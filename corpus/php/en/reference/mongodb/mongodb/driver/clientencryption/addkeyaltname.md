---
id: "en-php-function-mongodb-driver-clientencryption-addkeyaltname"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::addKeyAltName"
title: "Adds an alternate name to a key document"
signature: "final public object|null MongoDB\\Driver\\ClientEncryption::addKeyAltName(MongoDB\\BSON\\Binary $keyId, string $keyAltName)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.addkeyaltname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds an alternate name to a key document

## Description

```php
final public object|null MongoDB\Driver\ClientEncryption::addKeyAltName(MongoDB\BSON\Binary $keyId, string $keyAltName)
```

Adds `$keyAltName` to the set of alternate names for the key document with the given UUID `$keyId`.

## Parameters

- **`$keyId`** — A `MongoDB\BSON\Binary` instance with subtype 4 (UUID) identifying the key document.
- **`$keyAltName`** — Alternate name to add to the key document.

## Return Values

Returns the previous version of the key document, or `null` if no document matched.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## See Also

 `MongoDB\Driver\ClientEncryption::getKeyByAltName()` `MongoDB\Driver\ClientEncryption::removeKeyAltName()`
