---
id: "en-php-function-messageformatter-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::getErrorMessage"
aliases: ["msgfmt_get_error_message"]
title: "Get the error text from the last operation"
signature: "public string MessageFormatter::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the error text from the last operation

## Description

Object-oriented style

```php
public string MessageFormatter::getErrorMessage()
```

Procedural style

```php
string msgfmt_get_error_message(MessageFormatter $formatter)
```

Get the error text from the last operation.

## Parameters

- **`$formatter`** — The message formatter

## Return Values

Description of the last error.

## Examples

**`msgfmt_get_error_message()` example**

```php


<?php
$fmt = msgfmt_create("en_US", "{0, number} monkeys on {1, number} trees");
$str = msgfmt_format($fmt, array());
if(!$str) {
    echo "ERROR: ".msgfmt_get_error_message($fmt) . " (" . msgfmt_get_error_code($fmt) . ")\n";
}
?>

   
```

**OO example**

```php


<?php
$fmt = new MessageFormatter("en_US", "{0, number} monkeys on {1, number} trees");
$str = $fmt->format(array());
if(!$str) {
    echo "ERROR: ".$fmt->getErrorMessage() . " (" . $fmt->getErrorCode() . ")\n";
}
?>

   
```

The above example will output:

```text


ERROR: msgfmt_format: not enough parameters: U_ILLEGAL_ARGUMENT_ERROR (1)

  
```

## See Also

`msgfmt_get_error_code()` `intl_get_error_code()` `intl_is_failure()`
