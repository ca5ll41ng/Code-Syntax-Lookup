---
id: "en-php-function-mysqli-result-fetch-field"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::fetch_field"
aliases: ["mysqli_fetch_field"]
title: "Returns the next field in the result set"
signature: "public object|false mysqli_result::fetch_field()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-field.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the next field in the result set

## Description

Object-oriented style

```php
public object|false mysqli_result::fetch_field()
```

Procedural style

```php
object|false mysqli_fetch_field(mysqli_result $result)
```

Returns the definition of one column of a result set as an object. Call this function repeatedly to retrieve information about all columns in the result set.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

Returns an object which contains field definition information or `false` if no field information is available.



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


Name:     Name
Table:    Country
max. Len: 11
Flags:    1
Type:     254

Name:     SurfaceArea
Table:    Country
max. Len: 10
Flags:    32769
Type:     4


   
```

## See Also

`mysqli_num_fields()` `mysqli_fetch_field_direct()` `mysqli_fetch_fields()` `mysqli_field_seek()`
