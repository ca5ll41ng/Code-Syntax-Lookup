---
id: "en-php-function-mysql-xdevapi-table-isview"
language: "php"
lang: "en"
category: "function"
name: "Table::isView"
title: "Check if table is view"
signature: "public bool mysql_xdevapi\\Table::isView()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.isview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if table is view

## Description

```php
public bool mysql_xdevapi\Table::isView()
```

Determine if the underlying object is a view or not.

## Parameters

This function has no parameters.

## Return Values

`true` if the underlying object is a view, otherwise `false`.

## Examples

**`mysql_xdevapi\Table::isView()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

if ($table->isView()) {
    echo "This is a view.";
} else {
    echo "This is not a view.";
}
?>

   
```

The above example will output:

```text


This is not a view.

   
```
