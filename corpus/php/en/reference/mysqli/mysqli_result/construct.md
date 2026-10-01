---
id: "en-php-function-mysqli-result-construct"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::__construct"
title: "Constructs a `mysqli_result` object"
signature: "public mysqli_result::__construct(mysqli $mysql, int $result_mode = MYSQLI_STORE_RESULT)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a `mysqli_result` object

## Description

```php
public mysqli_result::__construct(mysqli $mysql, int $result_mode = MYSQLI_STORE_RESULT)
```

This method constructs a new `mysqli_result` object.

It can be used to create the `mysqli_result` object after calling the `mysqli_real_query()` or `mysqli_multi_query()` function. Constructing the object manually is equivalent to calling the `mysqli_store_result()` or `mysqli_use_result()` function.

## Parameters

- **`$mysql`** — Procedural style only: A `mysqli` object returned by `mysqli_connect()` or `mysqli_init()`
- **`$result_mode`** — The result mode can be one of 2 constants indicating how the result will be returned from the MySQL server. — `MYSQLI_STORE_RESULT` (default) - creates a `mysqli_result` object with buffered result set. — `MYSQLI_USE_RESULT` - creates a `mysqli_result` object with unbuffered result set. As long as there are pending records waiting to be fetched, the connection line will be busy and all subsequent calls will return error `Commands out of sync`. To avoid the error all records must be fetched from the server or the result set must be discarded by calling `mysqli_free_result()`. The connection must remain open for the rows to be fetched.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**Creation of a `mysqli_result` object**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Select queries return a result set */
$mysqli->real_query("SELECT Name FROM City LIMIT 10");

$result = new mysqli_result($mysqli);
printf("Select returned %d rows.\n", $result->num_rows);

   
```

The above examples will output something similar to:

```text


Select returned 10 rows.

   
```

## See Also

`mysqli_multi_query()` `mysqli_real_query()` `mysqli_store_result()` `mysqli_use_result()`
