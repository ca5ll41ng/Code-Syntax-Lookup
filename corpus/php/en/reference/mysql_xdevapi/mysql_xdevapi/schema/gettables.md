---
id: "en-php-function-mysql-xdevapi-schema-gettables"
language: "php"
lang: "en"
category: "function"
name: "Schema::getTables"
title: "Get schema tables"
signature: "public array mysql_xdevapi\\Schema::getTables()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.gettables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get schema tables

## Description

```php
public array mysql_xdevapi\Schema::getTables()
```

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

Array of all tables in this schema, where each array element value is a Table object with the table name as the key.

## Examples

**`mysql_xdevapi\Schema::getTables()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$session->sql("CREATE TABLE addressbook.cities(name text, population int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('Portland', 639863), ('Seattle', 704352)")->execute();

$schema = $session->getSchema("addressbook");
$tables = $schema->getTables();

var_dump($tables);
?>

   
```

The above example will output something similar to:

```text


array(2) {
  ["cities"]=>
  object(mysql_xdevapi\Table)#3 (1) {
    ["name"]=>
    string(6) "cities"
  }

  ["names"]=>
  object(mysql_xdevapi\Table)#4 (1) {
    ["name"]=>
    string(5) "names"
  }
}

   
```
