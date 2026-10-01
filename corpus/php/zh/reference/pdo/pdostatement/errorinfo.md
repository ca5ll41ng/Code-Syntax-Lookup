---
id: "zh-php-function-pdostatement-errorinfo"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::errorInfo"
title: "获取跟上一次语句句柄操作相关的扩展错误信息"
signature: "public array PDOStatement::errorInfo()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.errorinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取跟上一次语句句柄操作相关的扩展错误信息

## 说明

```php
public array PDOStatement::errorInfo()
```

## 参数

此函数没有参数。

## 返回值

`PDOStatement::errorInfo()` 返回一个关于上一次语句句柄执行操作的错误信息的数组。该数组至少包含下列字段：

| Element | Information |
| --- | --- |
| 0 | SQLSTATE 错误码（一个由5个字母或数字组成的在 ANSI SQL 标准中定义的标识符）。 |
| 1 | 具体驱动错误码。 |
| 2 | 具体驱动错误信息。 |

## 示例

**显示连接到DB2数据库的 PDO_ODBC 连接的 errorInfo() 的字段**

```php


<?php
/* 激发一个错误 --  BONES 数据表不存在 */
$sth = $dbh->prepare('SELECT skull FROM bones');
$sth->execute();

echo "\nPDOStatement::errorInfo():\n";
$arr = $sth->errorInfo();
print_r($arr);
?>

    
```

以上示例会输出：

```text


PDOStatement::errorInfo():
Array
(
    [0] => 42S02
    [1] => -204
    [2] => [IBM][CLI Driver][DB2/LINUX] SQL0204N  "DANIELS.BONES" is an undefined name.  SQLSTATE=42704
)

    
```

## 参见

`PDO::errorCode()` `PDO::errorInfo()` `PDOStatement::errorCode()`
