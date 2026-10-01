---
id: "en-php-function-mysql-xdevapi-sqlstatementresult-getwarnings"
language: "php"
lang: "en"
category: "function"
name: "SqlStatementResult::getWarnings"
title: "Get warnings from last operation"
signature: "public array mysql_xdevapi\\SqlStatementResult::getWarnings()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-sqlstatementresult.getwarnings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get warnings from last operation

## Description

```php
public array mysql_xdevapi\SqlStatementResult::getWarnings()
```

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

An array of Warning objects from the last operation. Each object defines an error 'message', error 'level', and error 'code'. An empty array is returned if no errors are present.

## Examples

**`mysql_xdevapi\SqlStatementResult::getWarnings()` example**

```php


<?php

/* ... */

?>

   
```
