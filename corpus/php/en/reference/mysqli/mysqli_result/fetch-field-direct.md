---
id: "en-php-function-mysqli-result-fetch-field-direct"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::fetch_field_direct"
aliases: ["mysqli_fetch_field_direct"]
title: "Fetch meta-data for a single field"
signature: "public object|false mysqli_result::fetch_field_direct(int $index)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-field-direct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch meta-data for a single field

## Description

Object-oriented style

```php
public object|false mysqli_result::fetch_field_direct(int $index)
```

Procedural style

```php
object|false mysqli_fetch_field_direct(mysqli_result $result, int $index)
```

Returns an object which contains field definition information from the specified result set.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.
- **`$index`** — The field number. This value must be in the range from `0` to `number of fields - 1`.

## Return Values

Returns an object which contains field definition information or `false` if no field information for specified `$index` is available.



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

$query = "SELECT Name, SurfaceArea from Country ORDER BY Name LIMIT 5";

if ($result = $mysqli->query($query)) {

    /* Get field information for column 'SurfaceArea' */
    $finfo = $result->fetch_field_direct(1);

    printf("Name:     %s\n", $finfo->name);
    printf("Table:    %s\n", $finfo->table);
    printf("max. Len: %d\n", $finfo->max_length);
    printf("Flags:    %d\n", $finfo->flags);
    printf("Type:     %d\n", $finfo->type);

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

$query = "SELECT Name, SurfaceArea from Country ORDER BY Name LIMIT 5";

if ($result = mysqli_query($link, $query)) {

    /* Get field information for column 'SurfaceArea' */
    $finfo = mysqli_fetch_field_direct($result, 1);

    printf("Name:     %s\n", $finfo->name);
    printf("Table:    %s\n", $finfo->table);
    printf("max. Len: %d\n", $finfo->max_length);
    printf("Flags:    %d\n", $finfo->flags);
    printf("Type:     %d\n", $finfo->type);

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

`mysqli_num_fields()` `mysqli_fetch_field()` `mysqli_fetch_fields()`
