---
id: "en-php-function-mysql-xdevapi-collection-existsindatabase"
language: "php"
lang: "en"
category: "function"
name: "Collection::existsInDatabase"
title: "Check if collection exists in database"
signature: "public bool mysql_xdevapi\\Collection::existsInDatabase()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.existsindatabase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if collection exists in database

## Description

```php
public bool mysql_xdevapi\Collection::existsInDatabase()
```

Checks if the Collection object refers to a collection in the database (schema).

## Parameters

This function has no parameters.

## Return Values

Returns `true` if collection exists in the database, else `false` if it does not.

A table defined with two columns (doc and _id) is considered a collection, and a third _json_schema column as of MySQL 8.0.21. Adding an additional column means existsInDatabase() will no longer see it as a collection.

## Examples

**`mysql_xdevapi\Collection::existsInDatabase()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");

// ...

$collection = $schema->getCollection("people");

// ...

if (!$collection->existsInDatabase()) {
    echo "The collection no longer exists in the database named addressbook. What happened?";
}
?>

   
```
