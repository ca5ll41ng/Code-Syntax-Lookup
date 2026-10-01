---
id: "en-php-function-mysqli-result-fetch-assoc"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "mysqli_result::fetch_assoc"
aliases: ["mysqli_fetch_assoc"]
title: "Fetch the next row of a result set as an associative array"
signature: "public array|null|false mysqli_result::fetch_assoc()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-assoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the next row of a result set as an associative array

## Description

Object-oriented style

```php
public array|null|false mysqli_result::fetch_assoc()
```

Procedural style

```php
array|null|false mysqli_fetch_assoc(mysqli_result $result)
```

Fetches one row of data from the result set and returns it as an associative array. Each subsequent call to this function will return the next row within the result set, or `null` if there are no more rows.

If two or more columns of the result have the same name, the last column will take precedence and overwrite any previous data. To access multiple columns with the same name, `mysqli_fetch_row()` may be used to fetch the numerically indexed array, or aliases may be used in the SQL query select list to give columns different names.

> Field names returned by this function are *case-sensitive*.

> This function sets NULL fields to the PHP `null` value.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

Returns an associative array representing the fetched row, where each key in the array represents the name of one of the result set's columns, `null` if there are no more rows in the result set, or `false` on failure.

## Examples

**`mysqli_result::fetch_assoc()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = $mysqli->query($query);

/* fetch associative array */
while ($row = $result->fetch_assoc()) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = mysqli_query($mysqli, $query);

/* fetch associative array */
while ($row = mysqli_fetch_assoc($result)) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
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

**Comparison of `mysqli_result` `iterator` and `mysqli_result::fetch_assoc()` usage**

`mysqli_result` can be iterated using . The result set will always be iterated from the first row, regardless of the current position.

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = 'SELECT Name, CountryCode FROM City ORDER BY ID DESC';

// Using iterators
$result = $mysqli->query($query);
foreach ($result as $row) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}

echo "\n==================\n";

// Not using iterators
$result = $mysqli->query($query);
while ($row = $result->fetch_assoc()) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}

   
```

The above example will output something similar to:

```text


Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Santa Clara (USA)

==================
Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Santa Clara (USA)


   
```

## See Also

`mysqli_fetch_array()` `mysqli_fetch_column()` `mysqli_fetch_row()` `mysqli_fetch_object()` `mysqli_query()` `mysqli_data_seek()`
