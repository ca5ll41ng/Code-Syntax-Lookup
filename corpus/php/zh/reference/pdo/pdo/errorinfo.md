---
id: "zh-php-function-pdo-errorinfo"
language: "php"
lang: "zh"
category: "function"
name: "PDO::errorInfo"
title: "获取与数据库句柄上最后一次操作相关的扩展错误信息"
signature: "public array PDO::errorInfo()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.errorinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取与数据库句柄上最后一次操作相关的扩展错误信息

## 说明

```php
public array PDO::errorInfo()
```

## 参数

此函数没有参数。

## 返回值

`PDO::errorInfo()` 返回一个包含此数据库句柄上最后一次操作的错误信息的数组。该数组至少包含以下字段：

| 元素 | 信息 |
| --- | --- |
| 0 | SQLSTATE 错误码（由 ANSI SQL 标准定义的五个字符的字母数字标识符）。 |
| 1 | 驱动程序特定的错误码。 |
| 2 | 驱动程序特定的错误信息。 |

> 如果没有设置 SQLSTATE 错误码或驱动程序没有报告特定错误，则元素 0 之后的元素将被设置为 `null`。

`PDO::errorInfo()` 仅获取直接在数据库句柄上执行的操作的错误信息。如果通过 `PDO::prepare()` 或 `PDO::query()` 创建 PDOStatement 对象，并在语句句柄上产生错误，`PDO::errorInfo()` 将不会反映语句句柄上的错误。必须调用 `PDOStatement::errorInfo()` 来返回在特定语句句柄上执行的操作的错误信息。

## 示例

**显示连接到 DB2 数据库的 PDO_ODBC 的 errorInfo() 字段**

```php


<?php
/* 引发一个错误——虚假的 SQL 语法 */
$stmt = $dbh->prepare('bogus sql');
if (!$stmt) {
    echo "\nPDO::errorInfo():\n";
    print_r($dbh->errorInfo());
}
?>

    
```

以上示例会输出：

```text


PDO::errorInfo():
Array
(
    [0] => HY000
    [1] => 1
    [2] => near "bogus": syntax error
)

    
```

## 参见

`PDO::errorCode()` `PDOStatement::errorCode()` `PDOStatement::errorInfo()`
