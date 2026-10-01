---
id: "zh-php-function-function-xmlrpc-set-type"
language: "php"
lang: "zh"
category: "function"
name: "xmlrpc_set_type"
title: "为 PHP 字符串值设置 xmlrpc 类型，base64 或 datetime"
signature: "bool xmlrpc_set_type(string $value, string $type)"
module: "xmlrpc"
source_url: "https://www.php.net/manual/zh/function.xmlrpc-set-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为 PHP 字符串值设置 xmlrpc 类型，base64 或 datetime

## 说明

```php
bool xmlrpc_set_type(string $value, string $type)
```

为 PHP 字符串值设置 xmlrpc 类型，base64 或 datetime。

> 此函数是*实验性*的。此函数的表象，包括名称及其相关文档都可能在未来的 PHP 发布版本中未通知就被修改。使用本函数风险自担。

## 参数

- **`$value`** — 设置类型的值
- **`$type`** — 'base64' 或 'datetime'

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果成功，`$value` 将转换为对象。

## 错误／异常

使用 XMLRPC 不支持的类型会发出 E_WARNING。

## 示例

**`xmlrpc_set_type()` 示例**

```php


<?php

$params = date("Ymd\TH:i:s", time());
xmlrpc_set_type($params, 'datetime');
echo xmlrpc_encode($params);

?>

    
```

以上示例的输出类似于：

```xml


<?xml version="1.0" encoding="utf-8"?>
<params>
<param>
 <value>
  <dateTime.iso8601>20090322T23:43:03</dateTime.iso8601>
 </value>
</param>
</params>

    
```
