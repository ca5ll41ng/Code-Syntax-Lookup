---
id: "en-php-function-mysql-xdevapi-tableselect-offset"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::offset"
title: "Set limit offset"
signature: "public mysql_xdevapi\\TableSelect mysql_xdevapi\\TableSelect::offset(int $position)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.offset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set limit offset

## Description

```php
public mysql_xdevapi\TableSelect mysql_xdevapi\TableSelect::offset(int $position)
```

Skip given number of rows in result.

## Parameters

- **`$position`** — The limit offset.

## Return Values

A TableSelect object.

## Examples

**`mysql_xdevapi\TableSelect::offset()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 42)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('name', 'age')
  ->limit(1)
  ->offset(1)
  ->execute();

$row = $result->fetchAll();
print_r($row);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [name] => Sam
            [age] => 42
        )
)

   
```
