---
id: "en-php-function-mysqli-result-fetch-object"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "mysqli_result::fetch_object"
aliases: ["mysqli_fetch_object"]
title: "Fetch the next row of a result set as an object"
signature: "public object|null|false mysqli_result::fetch_object(string $class = \"stdClass\", array $constructor_args = [])"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the next row of a result set as an object

## Description

Object-oriented style

```php
public object|null|false mysqli_result::fetch_object(string $class = "stdClass", array $constructor_args = [])
```

Procedural style

```php
object|null|false mysqli_fetch_object(mysqli_result $result, string $class = "stdClass", array $constructor_args = [])
```

Fetches one row of data from the result set and returns it as an object, where each property represents the name of the result set's column. Each subsequent call to this function will return the next row within the result set, or `null` if there are no more rows.

If two or more columns of the result have the same name, the last column will take precedence and overwrite any previous data. To access multiple columns with the same name, `mysqli_fetch_row()` may be used to fetch the numerically indexed array, or aliases may be used in the SQL query select list to give columns different names.

> This function sets the properties of the object before calling the object constructor.

> Field names returned by this function are *case-sensitive*.

> This function sets NULL fields to the PHP `null` value.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.
- **`$class`** — The name of the class to instantiate, set the properties of and return. If not specified, a `stdClass` object is returned.
- **`$constructor_args`** — An optional `array` of parameters to pass to the constructor for `$class` objects.

## Return Values

Returns an object representing the fetched row, where each property represents the name of the result set's column, `null` if there are no more rows in the result set, or `false` on failure.

## Errors/Exceptions

A `ValueError` is thrown when the `$constructor_args` is non-empty with the class not having a constructor.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Now throws a `ValueError` exception when the `$constructor_args` is non-empty with the class not having a constructor; previously an `Exception` was thrown. |
| 8.0.0 | `$constructor_args` now accepts `[]` for constructors with 0 parameters; previously an exception was thrown. |

## Examples

**`mysqli_result::fetch_object()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");
 
$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = $mysqli->query($query);

while ($obj = $result->fetch_object()) {
    printf("%s (%s)\n", $obj->Name, $obj->CountryCode);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = mysqli_query($link, $query);

while ($obj = mysqli_fetch_object($result)) {
    printf("%s (%s)\n", $obj->Name, $obj->CountryCode);
}

   
```

The above examples will output something similar to:

```text


Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Santa Clara (USA)

   
```

## See Also

`mysqli_fetch_array()` `mysqli_fetch_assoc()` `mysqli_fetch_column()` `mysqli_fetch_row()` `mysqli_query()` `mysqli_data_seek()`
