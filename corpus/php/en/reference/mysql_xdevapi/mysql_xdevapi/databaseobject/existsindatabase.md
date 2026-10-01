---
id: "en-php-function-mysql-xdevapi-databaseobject-existsindatabase"
language: "php"
lang: "en"
category: "function"
name: "DatabaseObject::existsInDatabase"
title: "Check if object exists in database"
signature: "abstract public bool mysql_xdevapi\\DatabaseObject::existsInDatabase()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-databaseobject.existsindatabase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if object exists in database

## Description

```php
abstract public bool mysql_xdevapi\DatabaseObject::existsInDatabase()
```

Verifies if the database object refers to an object that exists in the database.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if object exists in the database, else `false` if it does not.

## Examples

**`mysql_xdevapi\DatabaseObject::existsInDatabase()` example**

```php


<?php

$existInDb = $dbObj->existsInDatabase();

?>

   
```
