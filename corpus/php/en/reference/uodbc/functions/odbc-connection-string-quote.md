---
id: "en-php-function-function-odbc-connection-string-quote"
language: "php"
lang: "en"
category: "function"
name: "odbc_connection_string_quote"
title: "Quotes an ODBC connection string value"
signature: "string odbc_connection_string_quote(string $str)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-connection-string-quote.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Quotes an ODBC connection string value

## Description

```php
string odbc_connection_string_quote(string $str)
```

Quotes a value for a connection string, according to ODBC rules. That is, it will be surrounded by quotes, and any ending curly braces will be escaped. This should be done for any connection string values that come from user input. Not doing so can lead to issues with parsing the connection string, or values being injected into the connection string.

Note that this function does not check if the string is already quoted, nor if the string needs quoting. For that, call `odbc_connection_string_is_quoted()` and `odbc_connection_string_should_quote()`.

## Parameters

- **`$str`** — The unquoted string.

## Return Values

A quoted string, surrounded by curly braces, and properly escaped.

## Examples

 {{{ 

**`odbc_connection_string_quote()` example**

 {{{ 

This example quotes a string, then puts it in a connection string. Note that the string is quoted, and the ending quote character in the middle of the string has been escaped.

```php


<?php
$value = odbc_connection_string_quote("foo}bar");
$connection_string = "DSN=PHP;UserValue=$value";
echo $connection_string;
?>

   
```

The above example will output something similar to:

```text


DSN=PHP;UserValue={foo}}bar}

   
```

 }}} 

 }}} 

## See Also

`odbc_connection_string_is_quoted()` `odbc_connection_string_should_quote()`
