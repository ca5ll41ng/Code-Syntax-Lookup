---
id: "en-php-function-mysqli-stmt-field-count"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::$field_count"
aliases: ["mysqli_stmt_field_count"]
title: "Returns the number of columns in the given statement"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.field-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of columns in the given statement

## Description

Object-oriented style

```php
int $mysqli_stmt->field_count;
```

Procedural style

```php
int mysqli_stmt_field_count(mysqli_stmt $statement)
```

Returns the number of columns in the prepared statement.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns an integer representing the number of columns.

## Examples

**Object-oriented style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$code = 'FR';

$stmt = $mysqli->prepare("SELECT Name FROM Country WHERE Code=?");
$stmt->bind_param('s', $code);
$stmt->execute();
$row = $stmt->get_result()->fetch_row();
for ($i = 0; $i < $stmt->field_count; $i++) {
    printf("Value of column number %d is %s", $i, $row[$i]);
}

   
```

**Procedural style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$code = 'FR';

$stmt = mysqli_prepare($mysqli, "SELECT Name FROM Country WHERE Code=?");
mysqli_stmt_bind_param($stmt, 's', $code);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_row($result);
for ($i = 0; $i < mysqli_stmt_field_count($stmt); $i++) {
    printf("Value of column number %d is %s", $i, $row[$i]);
}

   
```

The above examples will output something similar to:

```text


Value of column number 0 is France

   
```

## See Also

`mysqli_stmt_num_rows()`
