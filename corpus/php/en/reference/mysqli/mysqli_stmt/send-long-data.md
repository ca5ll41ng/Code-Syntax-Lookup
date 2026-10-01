---
id: "en-php-function-mysqli-stmt-send-long-data"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::send_long_data"
aliases: ["mysqli_stmt_send_long_data"]
title: "Send data in blocks"
signature: "public bool mysqli_stmt::send_long_data(int $param_num, string $data)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.send-long-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data in blocks

## Description

Object-oriented style

```php
public bool mysqli_stmt::send_long_data(int $param_num, string $data)
```

Procedural style

```php
bool mysqli_stmt_send_long_data(mysqli_stmt $statement, int $param_num, string $data)
```

Allows sending parameter data to the server in pieces (or chunks), e.g. if the size of a blob exceeds the size of `max_allowed_packet`. This function can be called multiple times to send the parts of a character or binary data value for a column, which must be one of the TEXT or BLOB datatypes.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$param_num`** — Indicates which parameter to associate the data with. Parameters are numbered beginning with 0.
- **`$data`** — A string containing data to be sent.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Object-oriented style**

```php


<?php
$stmt = $mysqli->prepare("INSERT INTO messages (message) VALUES (?)");
$null = NULL;
$stmt->bind_param("b", $null);
$fp = fopen("messages.txt", "r");
while (!feof($fp)) {
    $stmt->send_long_data(0, fread($fp, 8192));
}
fclose($fp);
$stmt->execute();
?>

  
```

## See Also

`mysqli_prepare()` `mysqli_stmt_bind_param()`
