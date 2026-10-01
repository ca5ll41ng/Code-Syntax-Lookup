---
id: "en-php-function-mysqli-result-fetch-array"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "mysqli_result::fetch_array"
aliases: ["mysqli_fetch_array"]
title: "Fetch the next row of a result set as an associative, a numeric array, or both"
signature: "public array|null|false mysqli_result::fetch_array(int $mode = MYSQLI_BOTH)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the next row of a result set as an associative, a numeric array, or both

## Description

Object-oriented style

```php
public array|null|false mysqli_result::fetch_array(int $mode = MYSQLI_BOTH)
```

Procedural style

```php
array|null|false mysqli_fetch_array(mysqli_result $result, int $mode = MYSQLI_BOTH)
```

Fetches one row of data from the result set and returns it as an array. Each subsequent call to this function will return the next row within the result set, or `null` if there are no more rows.

In addition to storing the data in the numeric indices of the result array, this function can also store the data in associative indices by using the field names of the result set as keys.

If two or more columns of the result have the same name, the last column will take precedence and overwrite any previous data. To access multiple columns with the same name, the numerically indexed version of the row must be used.

> Field names returned by this function are *case-sensitive*.

> This function sets NULL fields to the PHP `null` value.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.
- **`$mode`** — This optional parameter is a constant indicating what type of array should be produced from the current row data. The possible values for this parameter are the constants `MYSQLI_ASSOC`, `MYSQLI_NUM`, or `MYSQLI_BOTH`. — By using the `MYSQLI_ASSOC` constant this function will behave identically to the `mysqli_fetch_assoc()`, while `MYSQLI_NUM` will behave identically to the `mysqli_fetch_row()` function. The final option `MYSQLI_BOTH` will create a single array with the attributes of both.

## Return Values

Returns an array representing the fetched row, `null` if there are no more rows in the result set, or `false` on failure.

## Examples

**`mysqli_result::fetch_array()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3";
$result = $mysqli->query($query);

/* numeric array */
$row = $result->fetch_array(MYSQLI_NUM);
printf("%s (%s)\n", $row[0], $row[1]);

/* associative array */
$row = $result->fetch_array(MYSQLI_ASSOC);
printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);

/* associative and numeric array */
$row = $result->fetch_array(MYSQLI_BOTH);
printf("%s (%s)\n", $row[0], $row["CountryCode"]);

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER by ID LIMIT 3";
$result = mysqli_query($mysqli, $query);

/* numeric array */
$row = mysqli_fetch_array($result, MYSQLI_NUM);
printf("%s (%s)\n", $row[0], $row[1]);

/* associative array */
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);

/* associative and numeric array */
$row = mysqli_fetch_array($result, MYSQLI_BOTH);
printf("%s (%s)\n", $row[0], $row["CountryCode"]);

   
```

The above examples will output something similar to:

```text


Kabul (AFG)
Qandahar (AFG)
Herat (AFG)

   
```

## See Also

`mysqli_fetch_assoc()` `mysqli_fetch_column()` `mysqli_fetch_row()` `mysqli_fetch_object()` `mysqli_query()` `mysqli_data_seek()`
