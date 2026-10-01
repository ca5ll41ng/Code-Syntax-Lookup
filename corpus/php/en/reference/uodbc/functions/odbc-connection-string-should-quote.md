---
id: "en-php-function-function-odbc-connection-string-should-quote"
language: "php"
lang: "en"
category: "function"
name: "odbc_connection_string_should_quote"
title: "Determines if an ODBC connection string value should be quoted"
signature: "bool odbc_connection_string_should_quote(string $str)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-connection-string-should-quote.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if an ODBC connection string value should be quoted

## Description

```php
bool odbc_connection_string_should_quote(string $str)
```

Determines if a string needs to be quoted for an ODBC connection string value; that is, if it contains special characters.

Note that this does not check if the string is already quoted; an already quoted string will contain characters that will make this function return true. You should call `odbc_connection_string_is_quoted()` to check.

## Parameters

- **`$str`** — The string to check for.

## Return Values

`true` if the string should be quoted; `false` otherwise.

## See Also

`odbc_connection_string_quote()` `odbc_connection_string_is_quoted()`
