---
id: "en-php-function-mysql-xdevapi-table-existsindatabase"
language: "php"
lang: "en"
category: "function"
name: "Table::existsInDatabase"
title: "Check if table exists in database"
signature: "public bool mysql_xdevapi\\Table::existsInDatabase()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-table.existsindatabase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if table exists in database

## Description

```php
public bool mysql_xdevapi\Table::existsInDatabase()
```

Verifies if this table exists in the database.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if table exists in the database, else `false` if it does not.

## Examples

**`mysql_xdevapi\Table::existsInDatabase()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

if ($table->existsInDatabase()) {
  echo "Yes, this table still exists in the session's schema.";
}
?>

   
```

The above example will output something similar to:

```text


Yes, this table still exists in the session's schema.

   
```
