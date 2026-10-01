---
id: "en-php-function-mysql-xdevapi-result-getwarnings"
language: "php"
lang: "en"
category: "function"
name: "Result::getWarnings"
title: "Get warnings from last operation"
signature: "public array mysql_xdevapi\\Result::getWarnings()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-result.getwarnings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get warnings from last operation

## Description

```php
public array mysql_xdevapi\Result::getWarnings()
```

Retrieve warnings from the last Result operation.

## Parameters

This function has no parameters.

## Return Values

An array of Warning objects from the last operation. Each object defines an error 'message', error 'level', and error 'code'. An empty array is returned if no errors are present.

## Examples

**`mysql_xdevapi\RowResult::getWarnings()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("CREATE DATABASE foo")->execute();
$session->sql("CREATE TABLE foo.test_table(x int)")->execute();

$schema = $session->getSchema("foo");
$table  = $schema->getTable("test_table");

$table->insert(['x'])->values([1])->values([2])->execute();

$res = $table->select(['x/0 as bad_x'])->execute();
$warnings = $res->getWarnings();

print_r($warnings);
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => mysql_xdevapi\Warning Object
        (
            [message] => Division by 0
            [level] => 2
            [code] => 1365
        )
    [1] => mysql_xdevapi\Warning Object
        (
            [message] => Division by 0
            [level] => 2
            [code] => 1365
        )
)

   
```
