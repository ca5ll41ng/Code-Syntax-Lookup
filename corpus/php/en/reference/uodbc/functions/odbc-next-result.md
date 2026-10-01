---
id: "en-php-function-function-odbc-next-result"
language: "php"
lang: "en"
category: "function"
name: "odbc_next_result"
title: "Checks if multiple results are available"
signature: "bool odbc_next_result(Odbc\\Result $statement)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-next-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if multiple results are available

## Description

```php
bool odbc_next_result(Odbc\Result $statement)
```

Checks if there are more result sets available as well as allowing access to the next result set via `odbc_fetch_array()`, `odbc_fetch_row()`, `odbc_result()`, etc.

## Parameters

- **`$statement`** — The ODBC result object.

## Return Values

Returns `true` if there are more result sets, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |

## Examples

**`odbc_next_result()`**

```php


<?php
$r_Connection = odbc_connect($dsn, $username, $password);

$s_SQL = <<<END_SQL
SELECT 'A'
SELECT 'B'
SELECT 'C'
END_SQL;

$r_Results = odbc_exec($r_Connection, $s_SQL);

$a_Row1 = odbc_fetch_array($r_Results);
$a_Row2 = odbc_fetch_array($r_Results);
echo "Dump first result set";
var_dump($a_Row1, $a_Row2);

echo "Get second results set ";
var_dump(odbc_next_result($r_Results));

$a_Row1 = odbc_fetch_array($r_Results);
$a_Row2 = odbc_fetch_array($r_Results);
echo "Dump second result set ";
var_dump($a_Row1, $a_Row2);

echo "Get third results set ";
var_dump(odbc_next_result($r_Results));

$a_Row1 = odbc_fetch_array($r_Results);
$a_Row2 = odbc_fetch_array($r_Results);
echo "Dump third result set ";
var_dump($a_Row1, $a_Row2);

echo "Try for a fourth result set ";
var_dump(odbc_next_result($r_Results));
?>

    
```

The above example will output:

```text


Dump first result set array(1) {
  ["A"]=>
  string(1) "A"
}
bool(false)
Get second results set bool(true)
Dump second result set array(1) {
  ["B"]=>
  string(1) "B"
}
bool(false)
Get third results set bool(true)
Dump third result set array(1) {
  ["C"]=>
  string(1) "C"
}
bool(false)
Try for a fourth result set bool(false)

    
```
