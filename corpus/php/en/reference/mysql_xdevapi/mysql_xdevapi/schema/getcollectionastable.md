---
id: "en-php-function-mysql-xdevapi-schema-getcollectionastable"
language: "php"
lang: "en"
category: "function"
name: "Schema::getCollectionAsTable"
title: "Get collection as a Table object"
signature: "public mysql_xdevapi\\Table mysql_xdevapi\\Schema::getCollectionAsTable(string $name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.getcollectionastable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get collection as a Table object

## Description

```php
public mysql_xdevapi\Table mysql_xdevapi\Schema::getCollectionAsTable(string $name)
```

Get a collection, but as a Table object instead of a Collection object.

## Parameters

- **`$name`** — Name of the collection to instantiate a Table object from.

## Return Values

A `mysql_xdevapi\Table` object for the collection.

## Examples

**`mysql_xdevapi\Schema::getCollectionAsTable()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema  = $session->getSchema("addressbook");
$collect = $schema->createCollection("people");
$collect->add('{"name": "Fred",  "age": 21, "job": "Construction"}')->execute();
$collect->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();

$table      = $schema->getCollectionAsTable("people");
$collection = $schema->getCollection("people");

var_dump($table);
var_dump($collection);

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Table)#4 (1) {
  ["name"]=>
  string(6) "people"
}

object(mysql_xdevapi\Collection)#5 (1) {
  ["name"]=>
  string(6) "people"
}

   
```
