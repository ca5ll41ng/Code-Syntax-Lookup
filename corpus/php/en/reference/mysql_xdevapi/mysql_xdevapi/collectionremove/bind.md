---
id: "en-php-function-mysql-xdevapi-collectionremove-bind"
language: "php"
lang: "en"
category: "function"
name: "CollectionRemove::bind"
title: "Bind value to placeholder"
signature: "public mysql_xdevapi\\CollectionRemove mysql_xdevapi\\CollectionRemove::bind(array $placeholder_values)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionremove.bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind value to placeholder

## Description

```php
public mysql_xdevapi\CollectionRemove mysql_xdevapi\CollectionRemove::bind(array $placeholder_values)
```

Bind a parameter to the placeholder in the search condition of the remove operation.

The placeholder has the form of :NAME where ':' is a common prefix that must always exists before any NAME where NAME is the name of the placeholder. The bind method accepts a list of placeholders if multiple entities have to be substituted in the search condition of the remove operation.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$placeholder_values`** — Placeholder values to substitute in the search condition. Multiple values are allowed and have to be passed as an array of mappings PLACEHOLDER_NAME->PLACEHOLDER_VALUE.

## Return Values

A CollectionRemove object that can be used to execute the command, or to add additional operations.

## Examples

**`mysql_xdevapi\CollectionRemove::bind()` example**

```php


<?php

$res = $coll->remove('age > :age_from and age < :age_to')->bind(['age_from' => 20, 'age_to' => 50])->limit(7)->execute();

?>

   
```
