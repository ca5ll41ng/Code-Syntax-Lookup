---
id: "en-php-function-mongodb-driver-clientencryption-getkeys"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::getKeys"
title: "Gets all key documents"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\ClientEncryption::getKeys()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.getkeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets all key documents

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\ClientEncryption::getKeys()
```

Finds all key documents in the key vault collection.

## Parameters

This function has no parameters.

## Return Values

Returns `MongoDB\Driver\Cursor` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors.
