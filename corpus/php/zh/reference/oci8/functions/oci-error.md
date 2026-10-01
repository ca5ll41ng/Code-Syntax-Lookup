---
id: "zh-php-function-function-oci-error"
language: "php"
lang: "zh"
category: "function"
name: "oci_error"
title: "返回最后发现的错误"
signature: "array|false oci_error(resource|null $connection_or_statement = null)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后发现的错误

## 说明

```php
array|false oci_error(resource|null $connection_or_statement = null)
```

返回最后发现的错误。

发生错误后应立即调用该函数。错误会由成功的语句清除。

## 参数

- **`$connection_or_statement`** — 对于大多数错误，`$connection_or_statement` 是传递给失败函数以供调用的资源句柄。对于 `oci_connect()`、`oci_new_connect()` 或 `oci_pconnect()` 的连接错误，应传递 `null`。

## 返回值

如果没有发现错误，`oci_error()` 返回 `false`。否则，`oci_error()` 将错误信息作为关联数组返回。

| 数组键 | 类型 | 说明 |
| --- | --- | --- |
| `code` | `int` | Oracle 错误编号。 |
| `message` | `string` | Oracle 错误文本。 |
| `offset` | `int` | SQL 语句中错误的字节位置。如果没有语句，则为 `0` |
| `sqltext` | `string` | SQL 语句文本。如果没有语句，则是空字符串。 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0、PECL OCI8 3.0.0 | `$connection_or_statement` 现在可为 null。 |

## 示例

**连接错误后显示 Oracle 错误消息**

```php


<?php
$conn = oci_connect("hr", "welcome", "localhost/XE");
if (!$conn) {
    $e = oci_error();   // For oci_connect errors do not pass a handle
    trigger_error(htmlentities($e['message']), E_USER_ERROR);
}
?>

    
```

**语法解析错误后显示 Oracle 错误消息**

```php


<?php
$stid = oci_parse($conn, "select ' from dual");  // note mismatched quote
if (!$stid) {
    $e = oci_error($conn);  // For oci_parse errors pass the connection handle
    trigger_error(htmlentities($e['message']), E_USER_ERROR);
}
?>

    
```

**显示 Oracle 错误信息、问题语句、执行错误问题所在位置**

```php


<?php
$stid = oci_parse($conn, "select does_not_exist from dual");
$r = oci_execute($stid);
if (!$r) {
    $e = oci_error($stid);  // For oci_execute errors pass the statement handle
    print htmlentities($e['message']);
    print "\n<pre>\n";
    print htmlentities($e['sqltext']);
    printf("\n%".($e['offset']+1)."s", "^");
    print  "\n</pre>\n";
}
?>

    
```
