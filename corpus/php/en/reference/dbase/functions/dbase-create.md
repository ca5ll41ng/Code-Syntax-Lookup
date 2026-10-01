---
id: "en-php-function-function-dbase-create"
language: "php"
lang: "en"
category: "function"
name: "dbase_create"
title: "Creates a database"
signature: "resource dbase_create(string $path, array $fields, int $type = DBASE_TYPE_DBASE)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a database

## Description

```php
resource dbase_create(string $path, array $fields, int $type = DBASE_TYPE_DBASE)
```

`dbase_create()` creates a dBase database with the given definition. If the file already exists, it is not truncated. `dbase_pack()` can be called to force truncation.

> This function is affected by open_basedir.

## Parameters

- **`$path`** — The path of the database. It can be a relative or absolute path to the file where dBase will store your data.
- **`$fields`** — An array of arrays, each array describing the format of one field of the database. Each field consists of a name, a character indicating the field type, and optionally, a length, a precision and a nullable flag. The supported field types are listed in the introduction section.
  > The fieldnames are limited in length and must not exceed 10 chars.


- **`$type`** — The type of database to be created. Either `DBASE_TYPE_DBASE` or `DBASE_TYPE_FOXPRO`.

## Return Values

Returns a database resource if the database is successfully created, or `false` if an error occurred.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | The `$type` parameter has been added. |
| PECL dbase 7.0.0 | The return value is now a `resource` instead of an `int`. |

## Examples

**Creating a dBase database file**

```php


<?php

// database "definition"
$def = array(
  array("date",     "D"),
  array("name",     "C",  50),
  array("age",      "N",   3, 0),
  array("email",    "C", 128),
  array("ismember", "L")
);

// creation
if (!dbase_create('/tmp/test.dbf', $def)) {
  echo "Error, can't create the database\n";
}

?>

    
```

## See Also

`dbase_open()` `dbase_close()`
