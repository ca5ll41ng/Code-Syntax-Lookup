---
id: "en-php-function-mysqli-result-current-field"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::$current_field"
aliases: ["mysqli_field_tell"]
title: "Get current field offset of a result pointer"
signature: "int()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.current-field.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current field offset of a result pointer

## Description

Object-oriented style

```php
int $mysqli_result->current_field;
```

Procedural style

```php
int mysqli_field_tell(mysqli_result $result)
```

Returns the position of the field cursor used for the last `mysqli_fetch_field()` call. This value can be used as an argument to `mysqli_field_seek()`.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

Returns current offset of field cursor.

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

    /* Get field information for all columns */
    while ($finfo = $result->fetch_field()) {

        /* get fieldpointer offset */
        $currentfield = $result->current_field;

        printf("Column %d:\n", $currentfield);
        printf("Name:     %s\n", $finfo->name);
        printf("Table:    %s\n", $finfo->table);
        printf("max. Len: %d\n", $finfo->max_length);
        printf("Flags:    %d\n", $finfo->flags);
        printf("Type:     %d\n\n", $finfo->type);
    }
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

    /* Get field information for all fields */
    while ($finfo = mysqli_fetch_field($result)) {

        /* get fieldpointer offset */
        $currentfield = mysqli_field_tell($result);

        printf("Column %d:\n", $currentfield);
        printf("Name:     %s\n", $finfo->name);
        printf("Table:    %s\n", $finfo->table);
        printf("max. Len: %d\n", $finfo->max_length);
        printf("Flags:    %d\n", $finfo->flags);
        printf("Type:     %d\n\n", $finfo->type);
    }
    mysqli_free_result($result);
}

/* close connection */
mysqli_close($link);
?>

   
```

The above examples will output:

```text


Column 1:
Name:     Name
Table:    Country
max. Len: 11
Flags:    1
Type:     254

Column 2:
Name:     SurfaceArea
Table:    Country
max. Len: 10
Flags:    32769
Type:     4


   
```

## See Also

`mysqli_fetch_field()` `mysqli_field_seek()`
