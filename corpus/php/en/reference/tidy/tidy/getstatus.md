---
id: "en-php-function-tidy-getstatus"
language: "php"
lang: "en"
category: "function"
name: "tidy::getStatus"
aliases: ["tidy_get_status"]
title: "Get status of specified document"
signature: "public int tidy::getStatus()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.getstatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get status of specified document

## Description

Object-oriented style

```php
public int tidy::getStatus()
```

Procedural style

```php
int tidy_get_status(tidy $tidy)
```

Returns the status for the specified tidy `$tidy`.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns 0 if no error/warning was raised, 1 for warnings or accessibility errors, or 2 for errors.

## Examples

**`tidy::getStatus()` example**

```php


<?php
$html = '<p>paragraph</i>';
$tidy = new tidy();
$tidy->parseString($html);

$tidy2 = new tidy();
$html2 = '<bogus>test</bogus>';
$tidy2->parseString($html2);

echo $tidy->getStatus(); //1

echo $tidy2->getStatus(); //2
?>

    
```
