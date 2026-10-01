---
id: "zh-php-function-pdostatement-errorcode"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::errorCode"
title: "获取跟上一次语句句柄操作相关的 SQLSTATE"
signature: "public string|null PDOStatement::errorCode()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.errorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取跟上一次语句句柄操作相关的 SQLSTATE

## 说明

```php
public string|null PDOStatement::errorCode()
```

## 参数

此函数没有参数。

## 返回值

与 `PDO::errorCode()` 相同，只是 `PDOStatement::errorCode()` 只取回 PDOStatement 对象执行操作中的错误码。

## 示例

**检索 SQLSTATE 码**

```php


<?php
/* 引发一个错误 --  BONES 数据表不存在 */
$err = $dbh->prepare('SELECT skull FROM bones');
$err->execute();

echo "\nPDOStatement::errorCode(): ";
print $err->errorCode();
?>

    
```

以上示例会输出：

```text


PDOStatement::errorCode(): 42S02

    
```

## 参见

`PDO::errorCode()` `PDO::errorInfo()` `PDOStatement::errorInfo()`
