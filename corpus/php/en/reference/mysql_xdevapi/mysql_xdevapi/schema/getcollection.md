---
id: "en-php-function-mysql-xdevapi-schema-getcollection"
language: "php"
lang: "en"
category: "function"
name: "Schema::getCollection"
title: "Get collection from schema"
signature: "public mysql_xdevapi\\Collection mysql_xdevapi\\Schema::getCollection(string $name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.getcollection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get collection from schema

## Description

```php
public mysql_xdevapi\Collection mysql_xdevapi\Schema::getCollection(string $name)
```

Get a collection from the schema.

## Parameters

- **`$name`** — Collection name to retrieve.

## Return Values

The Collection object for the selected collection.

## Examples

**`mysql_xdevapi\Schema::getCollection()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS food")->execute();
$session->sql("CREATE DATABASE food")->execute();

$schema = $session->getSchema("food");
$schema->createCollection("trees");

// ...

$trees = $schema->getCollection("trees");

var_dump($trees);

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Collection)#3 (1) {
  ["name"]=>
  string(5) "trees"
}

   
```
