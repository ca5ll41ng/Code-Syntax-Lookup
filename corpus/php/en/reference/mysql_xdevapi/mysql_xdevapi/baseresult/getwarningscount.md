---
id: "en-php-function-mysql-xdevapi-baseresult-getwarningscount"
language: "php"
lang: "en"
category: "function"
name: "BaseResult::getWarningsCount"
title: "Fetch warning count from last operation"
signature: "abstract public int mysql_xdevapi\\BaseResult::getWarningsCount()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-baseresult.getwarningscount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch warning count from last operation

## Description

```php
abstract public int mysql_xdevapi\BaseResult::getWarningsCount()
```

Returns the number of warnings raised by the last operation. Specifically, these warnings are raised by the MySQL server.

## Parameters

This function has no parameters.

## Return Values

The number of warnings from the last operation.

## Examples

**`mysql_xdevapi\RowResult::getWarningsCount()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS foo")->execute();
$session->sql("CREATE DATABASE foo")->execute();
$session->sql("CREATE TABLE foo.test_table(x int)")->execute();

$schema = $session->getSchema("foo");
$table  = $schema->getTable("test_table");

$table->insert(['x'])->values([1])->values([2])->execute();

$res = $table->select(['x/0 as bad_x'])->execute();

echo $res->getWarningsCount();
?>

   
```

The above example will output something similar to:

```text


2

   
```
