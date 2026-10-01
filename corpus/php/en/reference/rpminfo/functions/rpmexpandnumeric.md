---
id: "en-php-function-function-rpmexpandnumeric"
language: "php"
lang: "en"
category: "function"
name: "rpmexpandnumeric"
title: "Retrieve numerical value of a RPM macro"
signature: "int rpmexpandnumeric(string $text)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmexpandnumeric.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve numerical value of a RPM macro

## Description

```php
int rpmexpandnumeric(string $text)
```

Retrieve numerical value of a RPM macro.

## Parameters

- **`$text`** — Text with RPM macros to expand.

## Return Values

Macro expansion as a `int`. Boolean values (`Y` or `y` returns 1, `N` or `n` returns `0`) are permitted as well. An undefined macro returns `0`.

## Examples

**A `rpmexpandnumeric()` example**

```php


<?php
$bits = rpmexpandnumeric("%__isa_bits");
print_r($bits);
?>

   
```

The above example will output:

```text


64

   
```

## See Also

 `rpmexpand()`
