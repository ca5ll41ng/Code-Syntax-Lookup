---
id: "en-php-function-mysql-xdevapi-schema-dropcollection"
language: "php"
lang: "en"
category: "function"
name: "Schema::dropCollection"
title: "Drop collection from schema"
signature: "public bool mysql_xdevapi\\Schema::dropCollection(string $collection_name)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.dropcollection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Drop collection from schema

## Description

```php
public bool mysql_xdevapi\Schema::dropCollection(string $collection_name)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$collection_name`**

## Return Values

## Examples

**`mysql_xdevapi\Schema::dropCollection()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS food")->execute();
$session->sql("CREATE DATABASE food")->execute();
$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();

$schema = $session->getSchema("food");

$schema->createCollection("trees");
$schema->dropCollection("trees");
$schema->createCollection("buildings");

print_r($schema->gettables());
print_r($schema->getcollections());

   
```

The above example will output something similar to:

```text


Array
(
    [fruit] => mysql_xdevapi\Table Object
        (
            [name] => fruit
        )
)
Array
(
    [buildings] => mysql_xdevapi\Collection Object
        (
            [name] => buildings
        )
)

   
```
