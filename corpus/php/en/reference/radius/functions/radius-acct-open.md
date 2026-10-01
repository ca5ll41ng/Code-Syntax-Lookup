---
id: "en-php-function-function-radius-acct-open"
language: "php"
lang: "en"
category: "function"
name: "radius_acct_open"
title: "Creates a Radius handle for accounting"
signature: "resource radius_acct_open()"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-acct-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a Radius handle for accounting

## Description

```php
resource radius_acct_open()
```

## Parameters

This function has no parameters.

## Return Values

Returns a handle on success, `false` on error. This function only fails if insufficient memory is available.

## Examples

**`radius_acct_open()` example**

```php


<?php
$res = radius_acct_open ()
    or die ("Could not create handle");
print "Handle successfully created";
?>

   
```
