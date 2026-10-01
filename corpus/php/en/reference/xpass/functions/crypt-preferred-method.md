---
id: "en-php-function-function-crypt-preferred-method"
language: "php"
lang: "en"
category: "function"
name: "crypt_preferred_method"
title: "Get the prefix of the preferred hash method"
signature: "string|null crypt_preferred_method()"
module: "xpass"
source_url: "https://www.php.net/manual/en/function.crypt-preferred-method.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the prefix of the preferred hash method

## Description

```php
string|null crypt_preferred_method()
```

Get the prefix of the preferred hash method.

## Parameters

This function has no parameters.

## Return Values

Returns a string with the prefix, or `null` in case of an error.

## Examples

**A `crypt_preferred_method()` example**

```php


<?php
var_dump(crypt_preferred_method());
?>

   
```

The above example will output:

```text


string(3) "$y$"

   
```

## See Also

 `crypt_gensalt()`
