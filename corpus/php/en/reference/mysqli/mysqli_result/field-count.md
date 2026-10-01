---
id: "en-php-function-mysqli-result-field-count"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::$field_count"
aliases: ["mysqli_num_fields"]
title: "Gets the number of fields in the result set"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.field-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of fields in the result set

## Description

Object-oriented style

```php
int $mysqli_result->field_count;
```

Procedural style

```php
int mysqli_num_fields(mysqli_result $result)
```

Returns the number of fields in the result set.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

An `int` representing the number of fields.

## Examples

**Object-oriented style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Name, CountryCode, District, Population FROM City ORDER BY ID LIMIT 1");

/* Get the number of fields in the result set */
$field_cnt = $result->field_count;

printf("Result set has %d fields.\n", $field_cnt);

   
```

**Procedural style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($link, "SELECT Name, CountryCode, District, Population FROM City ORDER BY ID LIMIT 1");

/* Get the number of fields in the result set */
$field_cnt = mysqli_num_fields($result);

printf("Result set has %d fields.\n", $field_cnt);

   
```

The above examples will output:

```text


Result set has 4 fields.

   
```

## See Also

`mysqli_fetch_field()`
