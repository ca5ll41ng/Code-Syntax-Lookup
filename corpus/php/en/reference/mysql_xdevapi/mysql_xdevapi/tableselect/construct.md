---
id: "en-php-function-mysql-xdevapi-tableselect-construct"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::__construct"
title: "TableSelect constructor"
signature: "private mysql_xdevapi\\TableSelect::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# TableSelect constructor

## Description

```php
private mysql_xdevapi\TableSelect::__construct()
```

An object returned by the select() method; use execute() to execute the query.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\TableSelect::__construct()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("CREATE TABLE addressbook.names(name text, age int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('name','age')
  ->where('name like :name and age > :age')
  ->bind(['name' => 'John', 'age' => 42])
  ->orderBy('age desc')
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
            [name] => John
            [age] => 42
        )
)

   
```
