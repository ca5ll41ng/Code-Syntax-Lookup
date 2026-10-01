---
id: "en-php-function-mysql-xdevapi-result-construct"
language: "php"
lang: "en"
category: "function"
name: "Result::__construct"
title: "Result constructor"
signature: "private mysql_xdevapi\\Result::__construct()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-result.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Result constructor

## Description

```php
private mysql_xdevapi\Result::__construct()
```

An object that retrieves generated IDs, AUTO_INCREMENT values, and warnings, for a Result set.

## Parameters

This function has no parameters.

## Examples

**`mysql_xdevapi\Result::__construct()` example**

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
