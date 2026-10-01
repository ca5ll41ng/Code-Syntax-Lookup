---
id: "en-php-function-mysql-xdevapi-result-getautoincrementvalue"
language: "php"
lang: "en"
category: "function"
name: "Result::getAutoIncrementValue"
title: "Get autoincremented value"
signature: "public int mysql_xdevapi\\Result::getAutoIncrementValue()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-result.getautoincrementvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get autoincremented value

## Description

```php
public int mysql_xdevapi\Result::getAutoIncrementValue()
```

Get the last AUTO_INCREMENT value (last insert id).

## Parameters

This function has no parameters.

## Return Values

The last AUTO_INCREMENT value.

## Examples

**`mysql_xdevapi\Result::getAutoIncrementValue()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();
$session->sql("
  CREATE TABLE addressbook.names
    (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30), age INT, PRIMARY KEY (id))
  ")->execute();

$schema = $session->getSchema("addressbook");
$table  = $schema->getTable("names");

$result = $table->insert("name", "age")->values(["Suzanne", 31],["Julie", 43])->execute();
$result = $table->insert("name", "age")->values(["Suki", 34])->execute();

$ai = $result->getAutoIncrementValue();
var_dump($ai);
?>

   
```

The above example will output:

```text


int(3)

   
```
