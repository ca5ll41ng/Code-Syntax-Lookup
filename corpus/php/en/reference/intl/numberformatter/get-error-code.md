---
id: "en-php-function-numberformatter-geterrorcode"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getErrorCode"
aliases: ["numfmt_get_error_code"]
title: "Get formatter's last error code"
signature: "public int NumberFormatter::getErrorCode()"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.geterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get formatter's last error code

## Description

Object-oriented style

```php
public int NumberFormatter::getErrorCode()
```

Procedural style

```php
int numfmt_get_error_code(NumberFormatter $formatter)
```

Get error code from the last function performed by the formatter.

## Parameters

- **`$formatter`** — `NumberFormatter` object.

## Return Values

Returns error code from last formatter call.

## Examples

**`numfmt_get_error_code()` example**

```php


<?php
$fmt  = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$data = numfmt_format($fmt, 1234567.891234567890000);
if (intl_is_failure(numfmt_get_error_code($fmt))) {
    echo 'Formatter error';
}
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$fmt->format(1234567.891234567890000);
if (intl_is_failure($fmt->getErrorCode())) {
    echo 'Formatter error';
}
?>

   
```

## See Also

`numfmt_get_error_message()` `intl_get_error_code()` `intl_is_failure()`
