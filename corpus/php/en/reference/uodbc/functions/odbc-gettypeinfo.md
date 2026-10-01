---
id: "en-php-function-function-odbc-gettypeinfo"
language: "php"
lang: "en"
category: "function"
name: "odbc_gettypeinfo"
title: "Retrieves information about data types supported by the data source"
signature: "Odbc\\Result|false odbc_gettypeinfo(Odbc\\Connection $odbc, int $data_type = 0)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-gettypeinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves information about data types supported by the data source

## Description

```php
Odbc\Result|false odbc_gettypeinfo(Odbc\Connection $odbc, int $data_type = 0)
```

Retrieves information about data types supported by the data source.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$data_type`** — The data type, which can be used to restrict the information to a single data type.

## Return Values

Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- TYPE_NAME
- DATA_TYPE
- PRECISION
- LITERAL_PREFIX
- LITERAL_SUFFIX
- CREATE_PARAMS
- NULLABLE
- CASE_SENSITIVE
- SEARCHABLE
- UNSIGNED_ATTRIBUTE
- MONEY
- AUTO_INCREMENT
- LOCAL_TYPE_NAME
- MINIMUM_SCALE
- MAXIMUM_SCALE

The result set is ordered by DATA_TYPE and TYPE_NAME.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |
