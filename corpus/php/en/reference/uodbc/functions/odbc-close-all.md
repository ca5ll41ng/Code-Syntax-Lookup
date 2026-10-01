---
id: "en-php-function-function-odbc-close-all"
language: "php"
lang: "en"
category: "function"
name: "odbc_close_all"
title: "Close all ODBC connections"
signature: "void odbc_close_all()"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-close-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close all ODBC connections

## Description

```php
void odbc_close_all()
```

`odbc_close_all()` will close down all connections to database server(s).

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Notes

> This function will fail if there are open transactions on a connection. This connection will remain open in this case.
