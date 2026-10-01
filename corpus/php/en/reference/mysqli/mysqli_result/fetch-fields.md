---
id: "en-php-function-mysqli-result-fetch-fields"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::fetch_fields"
aliases: ["mysqli_fetch_fields"]
title: "Returns an array of objects representing the fields in a result set"
signature: "public array mysqli_result::fetch_fields()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.fetch-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of objects representing the fields in a result set

## Description

Object-oriented style

```php
public array mysqli_result::fetch_fields()
```

Procedural style

```php
array mysqli_fetch_fields(mysqli_result $result)
```

This function serves an identical purpose to the `mysqli_fetch_field()` function with the single difference that, instead of returning one object at a time for each field, the columns are returned as an array of objects.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

Returns an array of objects containing field definition information.

| Property | Description |
| --- | --- |
| name | The name of the column |
| orgname | Original column name if an alias was specified |
| table | The name of the table this field belongs to (if not calculated) |
| orgtable | Original table name if an alias was specified |
| def | Unused. Always an empty string |
| db | The name of the database |
| catalog | Unused. Always `"def"` |
| max_length | The maximum width of the field for the result set. As of PHP 8.1, this value is always `0`. |
| length | The width of the field in bytes. For string columns, the length value depends on the connection character set. For example, if the character set is `latin1`, a single-byte character set, the length value for a `SELECT 'abc'` query is 3. If the character set is `utf8mb4`, a multibyte character set in which characters take up to 4 bytes, the length value is 12. |
| charsetnr | The character set number for the field. |
| flags | An integer representing the bit-flags for the field. |
| type | The data type used for this field |
| decimals | The number of decimals for numeric fields, and the fractional seconds precision for temporal fields. |

## Examples

**Object-oriented style**

```php


<?php
$mysqli = new mysqli("127.0.0.1", "root", "foofoo", "sakila");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

foreach (array('latin1', 'utf8') as $charset) {

    // Set character set, to show its impact on some values (e.g., length in bytes)
    $mysqli->set_charset($charset);

    $query = "SELECT actor_id, last_name from actor ORDER BY actor_id";

    echo "======================\n";
    echo "Character Set: $charset\n";
    echo "======================\n";
    
    if ($result = $mysqli->query($query)) {

        /* Get field information for all columns */
        $finfo = $result->fetch_fields();

        foreach ($finfo as $val) {
            printf("Name:      %s\n",   $val->name);
            printf("Table:     %s\n",   $val->table);
            printf("Max. Len:  %d\n",   $val->max_length);
            printf("Length:    %d\n",   $val->length);
            printf("charsetnr: %d\n",   $val->charsetnr);
            printf("Flags:     %d\n",   $val->flags);
            printf("Type:      %d\n\n", $val->type);
        }
        $result->free();
    }
}
$mysqli->close();
?>

   
```

**Procedural style**

```php


<?php
$link = mysqli_connect("127.0.0.1", "my_user", "my_password", "sakila");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

foreach (array('latin1', 'utf8') as $charset) {

    // Set character set, to show its impact on some values (e.g., length in bytes)
    mysqli_set_charset($link, $charset);

    $query = "SELECT actor_id, last_name from actor ORDER BY actor_id";

    echo "======================\n";
    echo "Character Set: $charset\n";
    echo "======================\n";

    if ($result = mysqli_query($link, $query)) {

        /* Get field information for all columns */
        $finfo = mysqli_fetch_fields($result);

        foreach ($finfo as $val) {
            printf("Name:      %s\n",   $val->name);
            printf("Table:     %s\n",   $val->table);
            printf("Max. Len:  %d\n",   $val->max_length);
            printf("Length:    %d\n",   $val->length);
            printf("charsetnr: %d\n",   $val->charsetnr);
            printf("Flags:     %d\n",   $val->flags);
            printf("Type:      %d\n\n", $val->type);
        }
        mysqli_free_result($result);
    }
}

mysqli_close($link);
?>

   
```

The above examples will output:

```text


======================
Character Set: latin1
======================
Name:      actor_id
Table:     actor
Max. Len:  3
Length:    5
charsetnr: 63
Flags:     49699
Type:      2

Name:      last_name
Table:     actor
Max. Len:  12
Length:    45
charsetnr: 8
Flags:     20489
Type:      253

======================
Character Set: utf8
======================
Name:      actor_id
Table:     actor
Max. Len:  3
Length:    5
charsetnr: 63
Flags:     49699
Type:      2

Name:      last_name
Table:     actor
Max. Len:  12
Length:    135
charsetnr: 33
Flags:     20489

   
```

## See Also

`mysqli_num_fields()` `mysqli_fetch_field_direct()` `mysqli_fetch_field()`
