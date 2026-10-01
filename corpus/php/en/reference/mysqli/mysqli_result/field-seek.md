---
id: "en-php-function-mysqli-result-field-seek"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::field_seek"
aliases: ["mysqli_field_seek"]
title: "Set result pointer to a specified field offset"
signature: "public true mysqli_result::field_seek(int $index)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.field-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set result pointer to a specified field offset

## Description

Object-oriented style

```php
public true mysqli_result::field_seek(int $index)
```

Procedural style

```php
true mysqli_field_seek(mysqli_result $result, int $index)
```

Sets the field cursor to the given offset. The next call to `mysqli_fetch_field()` will retrieve the field definition of the column associated with that offset.

> To seek to the beginning of a row, pass an offset value of zero.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.
- **`$index`** — The field number. This value must be in the range from `0` to `number of fields - 1`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function now always returns `true`. Previously it returned `false` on failure. |

## Examples

**Object-oriented style**

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";

if ($result = $mysqli->query($query)) {

    /* Get field information for 2nd column */
    $result->field_seek(1);
    $finfo = $result->fetch_field();

    printf("Name:     %s\n", $finfo->name);
    printf("Table:    %s\n", $finfo->table);
    printf("max. Len: %d\n", $finfo->max_length);
    printf("Flags:    %d\n", $finfo->flags);
    printf("Type:     %d\n\n", $finfo->type);

    $result->close();
}

/* close connection */
$mysqli->close();
?>

   
```

**Procedural style**

```php


<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";

if ($result = mysqli_query($link, $query)) {

    /* Get field information for 2nd column */
    mysqli_field_seek($result, 1);
    $finfo = mysqli_fetch_field($result);

    printf("Name:     %s\n", $finfo->name);
    printf("Table:    %s\n", $finfo->table);
    printf("max. Len: %d\n", $finfo->max_length);
    printf("Flags:    %d\n", $finfo->flags);
    printf("Type:     %d\n\n", $finfo->type);

    mysqli_free_result($result);
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Name:     SurfaceArea
Table:    Country
max. Len: 10
Flags:    32769
Type:     4


   
```

## See Also

`mysqli_fetch_field()`
