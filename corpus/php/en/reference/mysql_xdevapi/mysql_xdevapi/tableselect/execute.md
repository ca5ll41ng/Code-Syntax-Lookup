---
id: "en-php-function-mysql-xdevapi-tableselect-execute"
language: "php"
lang: "en"
category: "function"
name: "TableSelect::execute"
title: "Execute select statement"
signature: "public mysql_xdevapi\\RowResult mysql_xdevapi\\TableSelect::execute()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-tableselect.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute select statement

## Description

```php
public mysql_xdevapi\RowResult mysql_xdevapi\TableSelect::execute()
```

Execute the select statement by chaining it with the execute() method.

## Parameters

This function has no parameters.

## Return Values

A RowResult object.

## Examples

**`mysql_xdevapi\TableSelect::execute()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->select('name','age')
  ->where('name like :name and age > :age')
  ->bind(['name' => 'John', 'age' => 42])
  ->orderBy('age desc')
  ->execute();

$row = $result->fetchAll();
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
