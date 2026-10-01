---
id: "en-php-function-mysql-xdevapi-crudoperationlimitable-limit"
language: "php"
lang: "en"
category: "function"
name: "CrudOperationLimitable::limit"
title: "Set result limit"
signature: "abstract public mysql_xdevapi\\CrudOperationLimitable mysql_xdevapi\\CrudOperationLimitable::limit(int $rows)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-crudoperationlimitable.limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set result limit

## Description

```php
abstract public mysql_xdevapi\CrudOperationLimitable mysql_xdevapi\CrudOperationLimitable::limit(int $rows)
```

Sets the maximum number of records or documents to return.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$rows`** — The maximum number of records or documents.

## Return Values

A CrudOperationLimitable object.

## Examples

**`mysql_xdevapi\CrudOperationLimitable::limit()` example**

```php


<?php

$res = $coll->find()->fields(['name as n','age as a','job as j'])->groupBy('j')->limit(11)->execute();
$res = $table->update()->set('age',69)->where('age > 15 and age < 22')->limit(4)->orderby(['age asc','name desc'])->execute();

?>

   
```
