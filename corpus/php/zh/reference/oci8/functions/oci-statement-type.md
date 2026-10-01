---
id: "zh-php-function-function-oci-statement-type"
language: "php"
lang: "zh"
category: "function"
name: "oci_statement_type"
title: "返回语句的类型"
signature: "string|false oci_statement_type(resource $statement)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-statement-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回语句的类型

## 说明

```php
string|false oci_statement_type(resource $statement)
```

返回关键字，标识 OCI8 `$statement` 的类型。

## 参数

- **`$statement`** — 来自 `oci_parse()` 的有效 OCI8 语句标识符。

## 返回值

返回 `$statement` 类型，可能为以下字符串之一。

| 返回字符串 | 说明 |
| --- | --- |
| `ALTER` |  |
| `BEGIN` |  |
| `CALL` |  |
| `CREATE` |  |
| `DECLARE` |  |
| `DELETE` |  |
| `DROP` |  |
| `INSERT` |  |
| `SELECT` |  |
| `UPDATE` |  |
| `UNKNOWN` |  |

错误时返回 `false`。

## 示例

**`oci_statement_type()` 示例**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, 'DELETE FROM departments WHERE department_id = 130;');
if (oci_statement_type($stid) == "DELETE") {
    trigger_error('You are not allowed to delete from this table', E_USER_ERROR);
}
else {
    oci_execute($stid);  // delete the row
}

oci_free_statement($stid);
oci_close($conn);

?>

    
```
