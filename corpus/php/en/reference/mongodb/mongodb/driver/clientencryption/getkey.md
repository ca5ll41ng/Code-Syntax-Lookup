---
id: "en-php-function-mongodb-driver-clientencryption-getkey"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::getKey"
title: "Gets a key document"
signature: "final public object|null MongoDB\\Driver\\ClientEncryption::getKey(MongoDB\\BSON\\Binary $keyId)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.getkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a key document

## Description

```php
final public object|null MongoDB\Driver\ClientEncryption::getKey(MongoDB\BSON\Binary $keyId)
```

Finds a single key document in the key vault collection with the given UUID `$keyId`.

## Parameters

- **`$keyId`** — A `MongoDB\BSON\Binary` instance with subtype 4 (UUID) identifying the key document.

## Return Values

Returns the key document, or `null` if no document matched.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors.
