---
id: "en-php-function-mysqli-result-fetch-all"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "mysqli_result::fetch_all"
aliases: ["mysqli_fetch_all"]
title: "Fetch all result rows as an associative array, a numeric array, or both"
signature: "public array mysqli_result::fetch_all(int $mode = MYSQLI_NUM)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch all result rows as an associative array, a numeric array, or both

## Description

Object-oriented style

```php
public array mysqli_result::fetch_all(int $mode = MYSQLI_NUM)
```

Procedural style

```php
array mysqli_fetch_all(mysqli_result $result, int $mode = MYSQLI_NUM)
```

Returns a two-dimensional array of all result rows as an associative array, a numeric array, or both.

> Prior to PHP 8.1.0, available only with mysqlnd.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.
- **`$mode`** — This optional parameter is a constant indicating what type of array should be produced from the current row data. The possible values for this parameter are the constants `MYSQLI_ASSOC`, `MYSQLI_NUM`, or `MYSQLI_BOTH`.

## Return Values

Returns an array of associative or numeric arrays holding result rows.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Now also available when linking against libmysqlclient. |

## Examples

**`mysqli_result::fetch_all()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

$rows = $result->fetch_all(MYSQLI_ASSOC);
foreach ($rows as $row) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($mysqli, "SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
foreach ($rows as $row) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}

   
```

The above examples will output:

```text


Kabul (AFG)
Qandahar (AFG)
Herat (AFG)

   
```

## See Also

`mysqli_fetch_array()` `mysqli_fetch_column()` `mysqli_query()`
