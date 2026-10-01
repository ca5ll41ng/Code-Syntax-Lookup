---
id: "en-php-function-function-mysql-xdevapi-expression"
language: "php"
lang: "en"
category: "function"
name: "expression"
title: "Bind prepared statement variables as parameters"
signature: "object mysql_xdevapi\\expression(string $expression)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/function.mysql-xdevapi-expression.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind prepared statement variables as parameters

## Description

```php
object mysql_xdevapi\expression(string $expression)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$expression`**

## Return Values

## Examples

**`mysql_xdevapi\Expression()` example**

```php


<?php
$expression = mysql_xdevapi\Expression("[age,job]");

$res  = $coll->find("age > 30")->fields($expression)->limit(3)->execute();
$data = $res->fetchAll();

print_r($data);
?>

   
```

The above example will output something similar to:

```text


<?php

   
```
