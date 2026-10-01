---
id: "zh-php-function-function-xmlrpc-get-type"
language: "php"
lang: "zh"
category: "function"
name: "xmlrpc_get_type"
title: "获取 PHP 值的 xmlrpc 类型"
signature: "string xmlrpc_get_type(mixed $value)"
module: "xmlrpc"
source_url: "https://www.php.net/manual/zh/function.xmlrpc-get-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 PHP 值的 xmlrpc 类型

## 说明

```php
string xmlrpc_get_type(mixed $value)
```

> 此函数是*实验性*的。此函数的表象，包括名称及其相关文档都可能在未来的 PHP 发布版本中未通知就被修改。使用本函数风险自担。

该函数对于 base64 与日期时间字符串特别有用。

## 参数

- **`$value`** — PHP 值

## 返回值

返回 XML-RPC 类型。

## 示例

**XML-RPC 类型示例**

```php


<?php
echo xmlrpc_get_type(null) . "\n"; // base64
echo xmlrpc_get_type(false) . "\n"; // boolean
echo xmlrpc_get_type(1) . "\n"; // int
echo xmlrpc_get_type(1.0) . "\n"; // double
echo xmlrpc_get_type("") . "\n"; // string
echo xmlrpc_get_type(array()) . "\n"; // array
echo xmlrpc_get_type(new stdClass) . "\n"; // array
echo xmlrpc_get_type(STDIN) . "\n"; // int
?>

    
```

## 参见

`xmlrpc_set_type()`
