---
id: "en-php-function-numberformatter-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getErrorMessage"
aliases: ["numfmt_get_error_message"]
title: "Get formatter's last error message"
signature: "public string NumberFormatter::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get formatter's last error message

## Description

Object-oriented style

```php
public string NumberFormatter::getErrorMessage()
```

Procedural style

```php
string numfmt_get_error_message(NumberFormatter $formatter)
```

Get error message from the last function performed by the formatter.

## Parameters

- **`$formatter`** — `NumberFormatter` object.

## Return Values

Returns error message from last formatter call.

## Examples

**`numfmt_get_error_message()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$data = numfmt_format($fmt, 1234567.891234567890000);
var_dump(numfmt_get_error_message($fmt));
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$fmt->format(1234567.891234567890000);
var_dump(numfmt_get_error_message($fmt));
?>

   
```

## See Also

`numfmt_get_error_code()` `intl_get_error_code()` `intl_is_failure()`
