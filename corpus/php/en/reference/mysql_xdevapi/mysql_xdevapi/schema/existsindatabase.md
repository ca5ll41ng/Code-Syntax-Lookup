---
id: "en-php-function-mysql-xdevapi-schema-existsindatabase"
language: "php"
lang: "en"
category: "function"
name: "Schema::existsInDatabase"
title: "Check if exists in database"
signature: "public bool mysql_xdevapi\\Schema::existsInDatabase()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.existsindatabase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if exists in database

## Description

```php
public bool mysql_xdevapi\Schema::existsInDatabase()
```

Checks if the current object (schema, table, collection, or view) exists in the schema object.

## Parameters

This function has no parameters.

## Return Values

`true` if the schema, table, collection, or view still exists in the schema, else `false`.

## Examples

**`mysql_xdevapi\Schema::existsInDatabase()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS food")->execute();
$session->sql("CREATE DATABASE food")->execute();
$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();

$schema = $session->getSchema("food");
$schema->createCollection("trees");

// ...

$trees = $schema->getCollection("trees");

// ...

// Is this collection still in the database (schema)?
if ($trees->existsInDatabase()) {
    echo "Yes, the 'trees' collection is still present.";
}

   
```

The above example will output something similar to:

```text


Yes, the 'trees' collection is still present.

   
```
