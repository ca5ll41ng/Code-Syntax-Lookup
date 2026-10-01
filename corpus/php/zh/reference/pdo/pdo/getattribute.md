---
id: "zh-php-function-pdo-getattribute"
language: "php"
lang: "zh"
category: "function"
name: "PDO::getAttribute"
title: "取回一个数据库连接的属性"
signature: "public mixed PDO::getAttribute(int $attribute)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.getattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取回一个数据库连接的属性

## 说明

```php
public mixed PDO::getAttribute(int $attribute)
```

此方法返回数据库连接属性的值。要检索 PDOStatement 属性，请参阅 `PDOStatement::getAttribute()`。

注意有些数据库/驱动可能不支持所有的数据库连接属性。

## 参数

- **`$attribute`** — `PDO::ATTR_*` 常量之一。下列为应用到数据库连接中的通用属性： `PDO::ATTR_AUTOCOMMIT` `PDO::ATTR_CASE` `PDO::ATTR_CLIENT_VERSION` `PDO::ATTR_CONNECTION_STATUS` `PDO::ATTR_DRIVER_NAME` `PDO::ATTR_ERRMODE` `PDO::ATTR_ORACLE_NULLS` `PDO::ATTR_PERSISTENT` `PDO::ATTR_PREFETCH` `PDO::ATTR_SERVER_INFO` `PDO::ATTR_SERVER_VERSION` `PDO::ATTR_TIMEOUT` — 一些驱动程序可能会使用额外的特定驱动程序属性。请注意，特定驱动程序的属性*不能*与其它驱动程序一起使用。

## 返回值

成功调用则返回请求的 PDO 属性值。不成功则返回 `null`。

## 错误／异常

当底层驱动程序不支持请求的 `$attribute` 时， `PDO::getAttribute()` 可能会抛出 PDOException。

## 示例

**取回数据库连接属性**

```php


<?php
$conn = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');
$attributes = array(
    "AUTOCOMMIT", "ERRMODE", "CASE", "CLIENT_VERSION", "CONNECTION_STATUS",
    "ORACLE_NULLS", "PERSISTENT", "PREFETCH", "SERVER_INFO", "SERVER_VERSION",
    "TIMEOUT"
);

foreach ($attributes as $val) {
    echo "PDO::ATTR_$val: ";
    echo $conn->getAttribute(constant("PDO::ATTR_$val")) . "\n";
}
?>

    
```

 <simpara xmlns="http://docbook.org/ns/docbook">以上示例会输出：</simpara> <screen> <![CDATA[ Use the PEAR Coding Standards ]]> </screen> 

## 参见

`PDO::setAttribute()` `PDOStatement::getAttribute()` `PDOStatement::setAttribute()`
