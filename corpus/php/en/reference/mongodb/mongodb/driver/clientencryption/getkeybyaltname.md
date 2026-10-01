---
id: "en-php-function-mongodb-driver-clientencryption-getkeybyaltname"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::getKeyByAltName"
title: "Gets a key document by an alternate name"
signature: "final public object|null MongoDB\\Driver\\ClientEncryption::getKeyByAltName(string $keyAltName)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.getkeybyaltname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a key document by an alternate name

## Description

```php
final public object|null MongoDB\Driver\ClientEncryption::getKeyByAltName(string $keyAltName)
```

Finds a single key document in the key vault collection with the given alternate name `$keyAltName`.

## Parameters

- **`$keyAltName`** — Alternate name for the key document.

## Return Values

Returns the key document, or `null` if no document matched.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## See Also

 `MongoDB\Driver\ClientEncryption::addKeyAltName()` `MongoDB\Driver\ClientEncryption::removeKeyAltName()`
