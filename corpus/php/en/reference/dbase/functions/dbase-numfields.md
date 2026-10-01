---
id: "en-php-function-function-dbase-numfields"
language: "php"
lang: "en"
category: "function"
name: "dbase_numfields"
title: "Gets the number of fields of a database"
signature: "int dbase_numfields(resource $database)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-numfields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of fields of a database

## Description

```php
int dbase_numfields(resource $database)
```

Gets the number of fields (columns) in the specified database.

> Field numbers are between 0 and `dbase_numfields($db)-1`, while record numbers are between 1 and `dbase_numrecords($db)`.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.

## Return Values

The number of fields in the database, or `false` if an error occurs.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## Examples

**`dbase_numfields()` Example**

```php


<?php

$rec = dbase_get_record($db, $recno);
$nf  = dbase_numfields($db);
for ($i = 0; $i < $nf; $i++) {
  echo $rec[$i], "\n";
}

?>

    
```

## See Also

`dbase_numrecords()`
