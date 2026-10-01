---
id: "zh-php-function-weakmap-offsetget"
language: "php"
lang: "zh"
category: "function"
name: "WeakMap::offsetGet"
title: "返回某个对象指向的值"
signature: "public mixed WeakMap::offsetGet(object $object)"
module: "language"
source_url: "https://www.php.net/manual/zh/weakmap.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回某个对象指向的值

## 说明

```php
public mixed WeakMap::offsetGet(object $object)
```

返回某个对象指向的值。

## 参数

- **`$object`** — map 中包含的 key 对象。

## 返回值

返回与作为参数传入对象关联的值。

## 错误／异常

 {{{ 

失败时抛出一个 `Error` 异常。
