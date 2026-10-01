---
id: "en-php-function-mysql-xdevapi-crudoperationbindable-bind"
language: "php"
lang: "en"
category: "function"
name: "CrudOperationBindable::bind"
title: "Bind value to placeholder"
signature: "abstract public mysql_xdevapi\\CrudOperationBindable mysql_xdevapi\\CrudOperationBindable::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-crudoperationbindable.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind value to placeholder

## Description

```php
abstract public mysql_xdevapi\CrudOperationBindable mysql_xdevapi\CrudOperationBindable::bind(array $placeholder_values)
```

Binds a value to a specific placeholder.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$placeholder_values`** — The name of the placeholders and the values to bind.

## Return Values

A CrudOperationBindable object.

## Examples

**`mysql_xdevapi\CrudOperationBindable::bind()` example**

```php


<?php

$res = $coll->modify('name like :name')->arrayInsert('job[0]', 'Calciatore')->bind(['name' => 'ENTITY'])->execute();
$res = $table->delete()->orderby('age desc')->where('age < 20 and age > 12 and name != :name')->bind(['name' => 'Tierney'])->limit(2)->execute();

?>

   
```
