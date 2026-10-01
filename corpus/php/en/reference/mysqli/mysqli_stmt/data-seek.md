---
id: "en-php-function-mysqli-stmt-data-seek"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::data_seek"
aliases: ["mysqli_stmt_data_seek"]
title: "Adjusts the result pointer to an arbitrary row in the buffered result"
signature: "public void mysqli_stmt::data_seek(int $offset)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.data-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adjusts the result pointer to an arbitrary row in the buffered result

## Description

Object-oriented style

```php
public void mysqli_stmt::data_seek(int $offset)
```

Procedural style

```php
void mysqli_stmt_data_seek(mysqli_stmt $statement, int $offset)
```

This function moves the result set pointer of the buffered result set to an arbitrary row specified by the `$offset` parameter.

This function works only on the buffered internal result set. `mysqli_stmt_store_result()` must be called prior to `mysqli_stmt_data_seek()`.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$offset`** — Must be between zero and the total number of rows minus one (0.. `mysqli_stmt_num_rows()` - 1).

## Return Values

No value is returned.

## Examples

**Object-oriented style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name";
$stmt = $mysqli->prepare($query);
$stmt->execute();

$stmt->bind_result($name, $code);

$stmt->store_result();

/* seek to row no. 400 */
$stmt->data_seek(399);

$stmt->fetch();

printf("City: %s  Countrycode: %s\n", $name, $code);

   
```

**Procedural style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name";
$stmt = mysqli_prepare($link, $query);

mysqli_stmt_execute($stmt);

mysqli_stmt_bind_result($stmt, $name, $code);

mysqli_stmt_store_result($stmt);

/* seek to row no. 400 */
mysqli_stmt_data_seek($stmt, 399);

mysqli_stmt_fetch($stmt);

printf("City: %s  Countrycode: %s\n", $name, $code);

   
```

The above examples will output:

```text


City: Benin City  Countrycode: NGA

   
```

## See Also

`mysqli_prepare()` `mysqli_stmt_store_result()` `mysqli_stmt_num_rows()` `mysqli_data_seek()`
