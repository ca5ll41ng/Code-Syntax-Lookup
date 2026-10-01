---
id: "en-php-function-mysqli-result-fetch-row"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "mysqli_result::fetch_row"
aliases: ["mysqli_fetch_row"]
title: "Fetch the next row of a result set as an enumerated array"
signature: "public array|null|false mysqli_result::fetch_row()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-row.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the next row of a result set as an enumerated array

## Description

Object-oriented style

```php
public array|null|false mysqli_result::fetch_row()
```

Procedural style

```php
array|null|false mysqli_fetch_row(mysqli_result $result)
```

Fetches one row of data from the result set and returns it as an enumerated array, where each column is stored in an array offset starting from 0 (zero). Each subsequent call to this function will return the next row within the result set, or `null` if there are no more rows.

> This function sets NULL fields to the PHP `null` value.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

Returns an enumerated array representing the fetched row, `null` if there are no more rows in the result set, or `false` on failure.

## Examples

**`mysqli_result::fetch_row()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = $mysqli->query($query);

/* fetch object array */
while ($row = $result->fetch_row()) {
    printf("%s (%s)\n", $row[0], $row[1]);
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
while ($row = mysqli_fetch_row($result)) {
    printf("%s (%s)\n", $row[0], $row[1]);
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

`mysqli_fetch_array()` `mysqli_fetch_assoc()` `mysqli_fetch_column()` `mysqli_fetch_object()` `mysqli_query()` `mysqli_data_seek()`
