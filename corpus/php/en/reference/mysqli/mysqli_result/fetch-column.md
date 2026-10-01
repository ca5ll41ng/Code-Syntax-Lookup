---
id: "en-php-function-mysqli-result-fetch-column"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::fetch_column"
aliases: ["mysqli_fetch_column"]
title: "Fetch a single column from the next row of a result set"
signature: "public null|int|float|string|false mysqli_result::fetch_column(int $column = 0)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-column.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch a single column from the next row of a result set

## Description

Object-oriented style

```php
public null|int|float|string|false mysqli_result::fetch_column(int $column = 0)
```

Procedural style

```php
null|int|float|string|false mysqli_fetch_column(mysqli_result $result, int $column = 0)
```

Fetches one row of data from the result set and returns the 0-indexed column. Each subsequent call to this function will return the value from the next row within the result set, or `false` if there are no more rows.

> This function sets NULL fields to the PHP `null` value.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.
- **`$column`** — 0-indexed number of the column you wish to retrieve from the row. If no value is supplied, the first column will be returned.

## Return Values

Returns a single column from the next row of a result set or `false` if there are no more rows.

> There is no way to return another column from the same row if you use this function to retrieve data.

## Examples

**`mysqli_result::fetch_column()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT CountryCode, Name FROM City ORDER BY ID DESC LIMIT 5";

$result = $mysqli->query($query);

/* fetch a single value from the second column */
while ($Name = $result->fetch_column(1)) {
    printf("%s\n", $Name);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT CountryCode, Name FROM City ORDER BY ID DESC LIMIT 5";

$result = mysqli_query($mysqli, $query);

/* fetch a single value from the second column */
while ($Name = mysqli_fetch_column($result, 1)) {
    printf("%s\n", $Name);
}

   
```

The above examples will output something similar to:

```text


Rafah
Nablus
Jabaliya
Hebron
Khan Yunis

   
```

## See Also

`mysqli_fetch_all()` `mysqli_fetch_array()` `mysqli_fetch_assoc()` `mysqli_fetch_object()` `mysqli_fetch_row()` `mysqli_data_seek()`
