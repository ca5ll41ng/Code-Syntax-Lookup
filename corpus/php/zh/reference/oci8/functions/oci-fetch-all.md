---
id: "zh-php-function-function-oci-fetch-all"
language: "php"
lang: "zh"
category: "function"
name: "oci_fetch_all"
title: "从查询中读取多行到二维数组中"
signature: "int oci_fetch_all(resource $statement, array $output, int $offset = 0, int $limit = -1, int $flags = OCI_FETCHSTATEMENT_BY_COLUMN | OCI_ASSOC)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-fetch-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从查询中读取多行到二维数组中

## 说明

```php
int oci_fetch_all(resource $statement, array $output, int $offset = 0, int $limit = -1, int $flags = OCI_FETCHSTATEMENT_BY_COLUMN | OCI_ASSOC)
```

在查询中的读取多行到二维数组中。默认情况下，返回所有行。

对于使用 `oci_execute()` 执行的每个查询，此函数只能调用一次。

## 参数

- **`$statement`** — 有效的 OCI8 报表标识符 由 `oci_parse()` 创建，被 `oci_execute()` 或 `REF CURSOR` statement 标识执行。
- **`$output`** — 包含返回行的变量。 — LOB 列作为字符串返回，其中 Oracle 支持转换。 — 有关如何读取数据和类型的更多信息，请参见 `oci_fetch_array()`。
- **`$offset`** — 读取结果时要丢弃的初始行数。默认值为 0，因此返回第一行。
- **`$limit`** — 要返回的行数。默认值为 -1，表示返回从 `$offset` + 1 开始的所有行。
- **`$flags`** — 参数 `$flags` 表示数组结构以及是否应使用关联数组。 | 常量 | 说明 | | --- | --- | | `OCI_FETCHSTATEMENT_BY_ROW` | 外部数组将包含每个查询行的子数组。 | | `OCI_FETCHSTATEMENT_BY_COLUMN` | 外部数组将包含每个查询列的子数组。这是默认设置。 | — 数组可以按列标头或数字索引。只会返回一种索引模式。 | 常量 | 说明 | | --- | --- | | `OCI_NUM` | 数字索引用于每一列的数组。 | | `OCI_ASSOC` | 关联索引用于每一列的数组。这是默认设置。 | — 使用加法运算符“+”选择数组结构和索引模式的组合。 — Oracle's default, non-case sensitive column names will have uppercase array keys. Case-sensitive column names will have array keys using the exact column case. Use `var_dump()` on `$output` to verify the appropriate case to use for each query. — 具有多个同名列的查询应使用列别名。否则只有一列会出现在关联数组中。

## 返回值

返回 `$output` 中的行数，可以是 0 或更多。

## 示例

**`oci_fetch_all()` 示例**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT POSTAL_CODE, CITY FROM locations WHERE ROWNUM < 3');
oci_execute($stid);

$nrows = oci_fetch_all($stid, $res);

echo "$nrows rows fetched<br>\n";
var_dump($res);

// var_dump output is:
//    2 rows fetched
//    array(2) {
//      ["POSTAL_CODE"]=>
//      array(2) {
//        [0]=>
//        string(6) "00989x"
//        [1]=>
//        string(6) "10934x"
//      }
//      ["CITY"]=>
//      array(2) {
//        [0]=>
//        string(4) "Roma"
//        [1]=>
//        string(6) "Venice"
//      }
//    }

// Pretty-print the results
echo "<table border='1'>\n";
foreach ($res as $col) {
    echo "<tr>\n";
    foreach ($col as $item) {
        echo "    <td>".($item !== null ? htmlentities($item, ENT_QUOTES) : "")."</td>\n";
    }
    echo "</tr>\n";
}
echo "</table>\n";

oci_free_statement($stid);
oci_close($conn);

?>

    
```

**带有 `OCI_FETCHSTATEMENT_BY_ROW` 的 `oci_fetch_all()` 示例**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT POSTAL_CODE, CITY FROM locations WHERE ROWNUM < 3');
oci_execute($stid);

$nrows = oci_fetch_all($stid, $res, null, null, OCI_FETCHSTATEMENT_BY_ROW);

echo "$nrows rows fetched<br>\n";
var_dump($res);

// Output is:
//    2 rows fetched
//    array(2) {
//      [0]=>
//      array(2) {
//        ["POSTAL_CODE"]=>
//        string(6) "00989x"
//        ["CITY"]=>
//        string(4) "Roma"
//      }
//      [1]=>
//      array(2) {
//        ["POSTAL_CODE"]=>
//        string(6) "10934x"
//        ["CITY"]=>
//        string(6) "Venice"
//      }
//    }

oci_free_statement($stid);
oci_close($conn);

?>

    
```

**带有 `OCI_NUM` 的 `oci_fetch_all()`**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT POSTAL_CODE, CITY FROM locations WHERE ROWNUM < 3');
oci_execute($stid);

$nrows = oci_fetch_all($stid, $res, null, null, OCI_FETCHSTATEMENT_BY_ROW + OCI_NUM);

echo "$nrows rows fetched<br>\n";
var_dump($res);

// Output is:
//    2 rows fetched
//    array(2) {
//      [0]=>
//      array(2) {
//        [0]=>
//        string(6) "00989x"
//        [1]=>
//        string(4) "Roma"
//      }
//      [1]=>
//      array(2) {
//        [0]=>
//        string(6) "10934x"
//        [1]=>
//        string(6) "Venice"
//      }
//    }

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 注释

> 使用 `$offset` 非常低效。所有要跳过的行都包含在从数据库返回到 PHP 的结果集中。然后将它们丢弃。使用 SQL 限制查询中行的偏移量和范围会更高效。有关示例，请参见 `oci_fetch_array()`。

> 如果使用像 `oci_fetch_array()` 这样的单行读取函数，返回大量行的查询可以提高内存效率。

> 查询返回巨大数量的数据行时，通过增大 oci8.default_prefetch 值或使用 `oci_set_prefetch()` 可显著提高性能。

> 不会从 Oracle Database 12*c* 隐式结果集中返回行。请改用 `oci_fetch_array()`。

## 参见

`oci_fetch()` `oci_fetch_array()` `oci_fetch_assoc()` `oci_fetch_object()` `oci_fetch_row()` `oci_set_prefetch()`
