---
id: "en-php-function-mysqli-sql-exception-getsqlstate"
language: "php"
lang: "en"
category: "function"
name: "mysqli_sql_exception::getSqlState"
title: "Returns the SQLSTATE error code"
signature: "public string mysqli_sql_exception::getSqlState()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-sql-exception.getsqlstate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the SQLSTATE error code

## Description

```php
public string mysqli_sql_exception::getSqlState()
```

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters. The values are specified by ANSI SQL and ODBC. For a list of possible values, see []().

> Note that not all MySQL errors are yet mapped to SQLSTATEs. The value `HY000` (general error) is used for unmapped errors.

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters.
