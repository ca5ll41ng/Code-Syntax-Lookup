---
id: "en-php-function-mysql-xdevapi-table-getschema"
language: "php"
lang: "en"
category: "function"
name: "Table::getSchema"
title: "Get table schema"
signature: "public mysql_xdevapi\\Schema mysql_xdevapi\\Table::getSchema()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.getschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get table schema

## Description

```php
public mysql_xdevapi\Schema mysql_xdevapi\Table::getSchema()
```

Fetch the schema associated with the table.

## Parameters

This function has no parameters.

## Return Values

A Schema object.

## Examples

**`mysql_xdevapi\Table::getSchema()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

var_dump($table->getSchema());
?>

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Schema)#9 (1) {
  ["name"]=>
  string(11) "addressbook"
}

   
```
