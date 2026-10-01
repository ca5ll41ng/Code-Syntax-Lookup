---
id: "en-php-function-mysql-xdevapi-table-construct"
language: "php"
lang: "en"
category: "function"
name: "Table::__construct"
title: "Table constructor"
signature: "private mysql_xdevapi\\Table::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Table constructor

## Description

```php
private mysql_xdevapi\Table::__construct()
```

Construct a table object.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\Table::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");
?>

   
```
