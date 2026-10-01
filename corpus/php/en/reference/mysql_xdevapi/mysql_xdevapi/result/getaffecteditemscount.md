---
id: "en-php-function-mysql-xdevapi-result-getaffecteditemscount"
language: "php"
lang: "en"
category: "function"
name: "Result::getAffectedItemsCount"
title: "Get affected row count"
signature: "public int mysql_xdevapi\\Result::getAffectedItemsCount()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-result.getaffecteditemscount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get affected row count

## Description

```php
public int mysql_xdevapi\Result::getAffectedItemsCount()
```

Get the number of affected rows by the previous operation.

## Parameters

This function has no parameters.

## Return Values

The number (as an integer) of affected rows.

## Examples

**`mysql_xdevapi\Result::getAffectedItemsCount()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema = $session->getSchema("addressbook");
$create = $schema->createCollection("people");

$collection = $schema->getCollection("people");

$result = $collection->add('{"name": "Wilma", "age": 23, "job": "Teacher"}')->execute();

var_dump( $res->getAffectedItemsCount() );
?>

   
```

The above example will output:

```text


int(1)

   
```
