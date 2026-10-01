---
id: "en-php-function-sqlite3-version"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::version"
title: "Returns the SQLite3 library version as a string constant and as a number"
signature: "public static array SQLite3::version()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the SQLite3 library version as a string constant and as a number

## Description

```php
public static array SQLite3::version()
```

Returns the SQLite3 library version as a string constant and as a number.

## Parameters

This function has no parameters.

## Return Values

Returns an associative array with the keys "versionString" and "versionNumber".

## Examples

**`SQLite3::version()` example**

```php


<?php
print_r(SQLite3::version());
?>

    
```

The above example will output something similar to:

```text


Array
(
    [versionString] => 3.5.9
    [versionNumber] => 3005009
)

    
```
