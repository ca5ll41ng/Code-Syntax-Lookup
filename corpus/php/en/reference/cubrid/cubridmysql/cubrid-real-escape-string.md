---
id: "en-php-function-function-cubrid-real-escape-string"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "cubrid_real_escape_string"
title: "Escape special characters in a string for use in an SQL statement"
signature: "string cubrid_real_escape_string(string $unescaped_string, [resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-real-escape-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Escape special characters in a string for use in an SQL statement

## Description

```php
string cubrid_real_escape_string(string $unescaped_string, [resource $conn_identifier = ...])
```

This function returns the escaped string version of the given string. It will escape the following characters: `'`. In general, single quotations are used to enclose character string. Double quotations may be used as well depending on the value of ansi_quotes, which is a parameter related to SQL statement. If the ansi_quotes value is set to no, character string enclosed by double quotations is handled as character string, not as an identifier. The default value is yes. If you want to include a single quote as part of a character string, enter two single quotes in a row.

## Parameters

- **`$unescaped_string`** — The string that is to be escaped.
- **`$conn_identifier`** — The CUBRID connection. If the connection identifier is not specified, the last connection opened by `cubrid_connect()` is assumed.

## Return Values

Escaped string version of the given string, on success.

`false` on failure.

## Examples

**`cubrid_real_escape_string()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$unescaped_str = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
$escaped_str = cubrid_real_escape_string($unescaped_str);

$len = strlen($unescaped_str);

@cubrid_execute($conn, "DROP TABLE cubrid_test");
cubrid_execute($conn, "CREATE TABLE cubrid_test (t char($len))");
cubrid_execute($conn, "INSERT INTO cubrid_test (t) VALUES('$escaped_str')");

$req = cubrid_execute($conn, "SELECT * FROM cubrid_test");
$row = cubrid_fetch_assoc($req);

var_dump($row);

cubrid_close_request($req);
cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


array(1) {
  ["t"]=>
  string(95) " !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
}

    
```
