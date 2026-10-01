---
id: "zh-php-function-iterator-key"
language: "php"
lang: "zh"
category: "function"
name: "Iterator::key"
title: "返回当前元素的键"
signature: "public mixed Iterator::key()"
module: "language"
source_url: "https://www.php.net/manual/zh/iterator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前元素的键

## 说明

```php
public mixed Iterator::key()
```

返回当前元素的键。

## 参数

此函数没有参数。

## 返回值

成功返回`标量`，失败则返回 `null`。

## 错误／异常

 {{{ 

失败时分发 `E_NOTICE` 级错误。

 }}}
