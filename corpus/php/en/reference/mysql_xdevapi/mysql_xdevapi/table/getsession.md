---
id: "en-php-function-mysql-xdevapi-table-getsession"
language: "php"
lang: "en"
category: "function"
name: "Table::getSession"
title: "Get table session"
signature: "public mysql_xdevapi\\Session mysql_xdevapi\\Table::getSession()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.getsession.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get table session

## Description

```php
public mysql_xdevapi\Session mysql_xdevapi\Table::getSession()
```

Get session associated with the table.

## Parameters

This function has no parameters.

## Return Values

A Session object.

## Examples

**`mysql_xdevapi\Table::getSession()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

var_dump($table->getSession());
?>

   
```

The above example will output something similar to:

```text


object(mysql_xdevapi\Session)#9 (0) {
}

   
```
