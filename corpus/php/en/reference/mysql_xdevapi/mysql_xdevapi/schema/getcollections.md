---
id: "en-php-function-mysql-xdevapi-schema-getcollections"
language: "php"
lang: "en"
category: "function"
name: "Schema::getCollections"
title: "Get all schema collections"
signature: "public array mysql_xdevapi\\Schema::getCollections()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.getcollections.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all schema collections

## Description

```php
public array mysql_xdevapi\Schema::getCollections()
```

Fetch a list of collections for this schema.

## Parameters

This function has no parameters.

## Return Values

Array of all collections in this schema, where each array element value is a Collection object with the collection name as the key.

## Examples

**`mysql_xdevapi\Schema::getCollections()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema  = $session->getSchema("addressbook");
$collect = $schema->createCollection("people");
$collect->add('{"name": "Fred",  "age": 21, "job": "Construction"}')->execute();
$collect->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();

$collections = $schema->getCollections();
var_dump($collections);
?>

   
```

The above example will output something similar to:

```text


array(1) {
  ["people"]=>
  object(mysql_xdevapi\Collection)#4 (1) {
    ["name"]=>
    string(6) "people"
  }
}

   
```
