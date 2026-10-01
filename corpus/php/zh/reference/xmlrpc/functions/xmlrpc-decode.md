---
id: "zh-php-function-function-xmlrpc-decode"
language: "php"
lang: "zh"
category: "function"
name: "xmlrpc_decode"
title: "将 XML 解码为原生 PHP 类型"
signature: "mixed xmlrpc_decode(string $xml, string $encoding = \"iso-8859-1\")"
module: "xmlrpc"
source_url: "https://www.php.net/manual/zh/function.xmlrpc-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 XML 解码为原生 PHP 类型

## 说明

```php
mixed xmlrpc_decode(string $xml, string $encoding = "iso-8859-1")
```

> 此函数是*实验性*的。此函数的表象，包括名称及其相关文档都可能在未来的 PHP 发布版本中未通知就被修改。使用本函数风险自担。

## 参数

- **`$xml`** — XMLRPC 方法返回的 XML 响应。
- **`$encoding`** — iconv 支持的输入编码。

## 返回值

根据 XMLRPC 方法的响应返回数组、整数、字符串或布尔值。

## 示例

参阅 `xmlrpc_encode_request()` 示例。

## 参见

`xmlrpc_encode_request()` `xmlrpc_is_fault()`
