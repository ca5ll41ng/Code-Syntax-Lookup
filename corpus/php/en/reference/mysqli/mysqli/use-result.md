---
id: "en-php-function-mysqli-use-result"
language: "php"
lang: "en"
category: "function"
name: "mysqli::use_result"
aliases: ["mysqli_use_result"]
title: "Initiate a result set retrieval"
signature: "public mysqli_result|false mysqli::use_result()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli.use-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initiate a result set retrieval

## Description

Object-oriented style

```php
public mysqli_result|false mysqli::use_result()
```

Procedural style

```php
mysqli_result|false mysqli_use_result(mysqli $mysql)
```

Used to initiate the retrieval of a result set from the last query executed using the `mysqli_real_query()` function on the database connection.

Either this or the `mysqli_store_result()` function must be called before the results of a query can be retrieved, and one or the other must be called to prevent the next query on that database connection from failing.

> The `mysqli_use_result()` function does not transfer the entire result set from the database and hence cannot be used with functions such as `mysqli_data_seek()` to move to a particular row within the set. To use this functionality, the result set must be stored using `mysqli_store_result()`. One should not use `mysqli_use_result()` if a lot of processing on the client side is performed, since this will tie up the server and prevent other threads from updating any tables from which the data is being fetched.

## Parameters

This function has no parameters.

## Return Values

Returns an unbuffered result object or `false` if an error occurred.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**`mysqli::use_result()` example**

Object-oriented style

```php


<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query  = "SELECT CURRENT_USER();";
$query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* execute multi query */
if ($mysqli->multi_query($query)) {
    do {
        /* store first result set */
        if ($result = $mysqli->use_result()) {
            while ($row = $result->fetch_row()) {
                printf("%s\n", $row[0]);
            }
            $result->close();
        }
        /* print divider */
        if ($mysqli->more_results()) {
            printf("-----------------\n");
        }
    } while ($mysqli->next_result());
}

/* close connection */
$mysqli->close();
?>

   
```

Procedural style

```php


<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query  = "SELECT CURRENT_USER();";
$query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* execute multi query */
if (mysqli_multi_query($link, $query)) {
    do {
        /* store first result set */
        if ($result = mysqli_use_result($link)) {
            while ($row = mysqli_fetch_row($result)) {
                printf("%s\n", $row[0]);
            }
            mysqli_free_result($result);
        }
        /* print divider */
        if (mysqli_more_results($link)) {
            printf("-----------------\n");
        }
    } while (mysqli_next_result($link));
}

/* close connection */
mysqli_close($link);
?>

  
```

The above examples will output:

```text


my_user@localhost
-----------------
Amersfoort
Maastricht
Dordrecht
Leiden
Haarlemmermeer

   
```

## See Also

`mysqli_real_query()` `mysqli_store_result()`
