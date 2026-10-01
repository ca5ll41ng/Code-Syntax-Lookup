---
id: "en-php-function-sqlite3-enableextendedresultcodes"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::enableExtendedResultCodes"
title: "Enables or disables the use of extended result codes"
signature: "public bool SQLite3::enableExtendedResultCodes(bool $enable = true)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.enableextendedresultcodes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enables or disables the use of extended result codes

## Description

```php
public bool SQLite3::enableExtendedResultCodes(bool $enable = true)
```

Enables or disables the use of extended result codes, which are then reported by `SQLite3::lastErrorCode()`. `SQLite3::lastExtendedErrorCode()` is not affected by this setting, and always returns the extended result code.

## Parameters

- **`$enable`** — Whether to enable (`true`) or disable (`false`) the use of extended result codes.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SQLite3::enableExtendedResultCodes()` example**

```php


<?php
$db = new SQLite3(':memory:');
$db->enableExceptions(true);
$db->exec('CREATE TABLE t (a INTEGER UNIQUE)');
$db->exec('INSERT INTO t VALUES (1)');

try {
    $db->exec('INSERT INTO t VALUES (1)');
} catch (Exception $e) {
}

// The primary result code (SQLITE_CONSTRAINT), then the extended result
// code (SQLITE_CONSTRAINT_UNIQUE).
var_dump($db->lastErrorCode(), $db->lastExtendedErrorCode());

// Once enabled, SQLite3::lastErrorCode() reports the extended result code
// as well.
$db->enableExtendedResultCodes();
var_dump($db->lastErrorCode());
?>

   
```

The above example will output:

```text


int(19)
int(2067)
int(2067)

   
```

## See Also

 `SQLite3::lastExtendedErrorCode()` `SQLite3::lastErrorCode()`
