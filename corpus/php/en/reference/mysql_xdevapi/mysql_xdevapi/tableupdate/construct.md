---
id: "en-php-function-mysql-xdevapi-tableupdate-construct"
language: "php"
lang: "en"
category: "function"
name: "TableUpdate::__construct"
title: "TableUpdate constructor"
signature: "private mysql_xdevapi\\TableUpdate::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableupdate.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# TableUpdate constructor

## Description

```php
private mysql_xdevapi\TableUpdate::__construct()
```

Initiated by using the update() method.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\TableUpdate::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$res = $table->update()
  ->set('level', 3)
  ->where('age > 15 and age < 22')
  ->limit(4)
  ->orderby(['age asc','name desc'])
  ->execute();

?>

   
```
