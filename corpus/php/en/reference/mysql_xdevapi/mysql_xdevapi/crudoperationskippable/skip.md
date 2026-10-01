---
id: "en-php-function-mysql-xdevapi-crudoperationskippable-skip"
language: "php"
lang: "en"
category: "function"
name: "CrudOperationSkippable::skip"
title: "Number of operations to skip"
signature: "abstract public mysql_xdevapi\\CrudOperationSkippable mysql_xdevapi\\CrudOperationSkippable::skip(int $skip)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-crudoperationskippable.skip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Number of operations to skip

## Description

```php
abstract public mysql_xdevapi\CrudOperationSkippable mysql_xdevapi\CrudOperationSkippable::skip(int $skip)
```

Skip this number of records in the returned operation.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$skip`** — Number of elements to skip.

## Return Values

A CrudOperationSkippable object.

## Examples

**`mysql_xdevapi\CrudOperationSkippable::skip()` example**

```php


<?php

$res = $coll->find('job like \'Programmatore\'')->limit(1)->skip(3)->sort('age asc')->execute();

?>

   
```
