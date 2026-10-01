---
id: "en-php-function-mongodb-driver-clientencryption-deletekey"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::deleteKey"
title: "Deletes a key document"
signature: "final public object MongoDB\\Driver\\ClientEncryption::deleteKey(MongoDB\\BSON\\Binary $keyId)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.deletekey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes a key document

## Description

```php
final public object MongoDB\Driver\ClientEncryption::deleteKey(MongoDB\BSON\Binary $keyId)
```

Removes the key document with the given UUID `$keyId` from the key vault collection.

## Parameters

- **`$keyId`** — A `MongoDB\BSON\Binary` instance with subtype 4 (UUID) identifying the key document.

## Return Values

Returns the result of the internal `deleteOne` operation on the key vault collection.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors.
