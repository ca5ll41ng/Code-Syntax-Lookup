---
id: "en-php-function-mysql-xdevapi-schema-construct"
language: "php"
lang: "en"
category: "function"
name: "Schema::__construct"
title: "Schema constructor"
signature: "private mysql_xdevapi\\Schema::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Schema constructor

## Description

```php
private mysql_xdevapi\Schema::__construct()
```

The Schema object provides full access to the schema (database).

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\Schema::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS food")->execute();
$session->sql("CREATE DATABASE food")->execute();
$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();

$schema = $session->getSchema("food");
$schema->createCollection("trees");

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
    [trees] => mysql_xdevapi\Collection Object
        (
            [name] => trees
        )
)

   
```
