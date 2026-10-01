---
id: "en-php-function-function-radius-auth-open"
language: "php"
lang: "en"
category: "function"
name: "radius_auth_open"
title: "Creates a Radius handle for authentication"
signature: "resource radius_auth_open()"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-auth-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a Radius handle for authentication

## Description

```php
resource radius_auth_open()
```

## Parameters

This function has no parameters.

## Return Values

Returns a handle on success, `false` on error. This function only fails if insufficient memory is available.

## Examples

**`radius_auth_open()` example**

```php


<?php
$radh = radius_auth_open()
    or die ("Could not create handle");
echo "Handle successfully created";
?>

   
```
