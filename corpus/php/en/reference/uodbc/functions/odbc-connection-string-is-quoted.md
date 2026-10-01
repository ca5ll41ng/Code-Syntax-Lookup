---
id: "en-php-function-function-odbc-connection-string-is-quoted"
language: "php"
lang: "en"
category: "function"
name: "odbc_connection_string_is_quoted"
title: "Determines if an ODBC connection string value is quoted"
signature: "bool odbc_connection_string_is_quoted(string $str)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-connection-string-is-quoted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if an ODBC connection string value is quoted

## Description

```php
bool odbc_connection_string_is_quoted(string $str)
```

Determines if a string is properly quoted for an ODBC connection string value. ODBC connection string quoting is performed using curly braces, and ending braces within a string must be escaped through repeating them twice, similar to SQL quoting.

## Parameters

- **`$str`** — The string to check for quoting.

## Return Values

`true` if quoted properly, `false` if not.

## See Also

`odbc_connection_string_quote()` `odbc_connection_string_should_quote()`
