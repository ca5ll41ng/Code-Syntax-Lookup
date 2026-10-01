---
id: "zh-php-function-serializable-serialize"
language: "php"
lang: "zh"
category: "function"
name: "Serializable::serialize"
title: "对象的字符串表示"
signature: "public string|null Serializable::serialize()"
module: "language"
source_url: "https://www.php.net/manual/zh/serializable.serialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对象的字符串表示

## 说明

```php
public string|null Serializable::serialize()
```

返回对象的字符串表示。

## 参数

此函数没有参数。

## 返回值

返回对象的字符串表示或者 `null` 。

## 错误／异常

如果返回除了字符串或 `null` 之外的其他类型，将抛出 `Exception`。

## 参见

__sleep() __serialize()
