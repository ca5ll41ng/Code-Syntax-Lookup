---
id: "zh-php-function-weakmap-offsetexists"
language: "php"
lang: "zh"
category: "function"
name: "WeakMap::offsetExists"
title: "检测 map 中是否存在某个对象"
signature: "public bool WeakMap::offsetExists(object $object)"
module: "language"
source_url: "https://www.php.net/manual/zh/weakmap.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测 map 中是否存在某个对象

## 说明

```php
public bool WeakMap::offsetExists(object $object)
```

检查传入的对象在 map 中是否被引用。

## 参数

- **`$object`** — 要检查的对象。

## 返回值

如果 map 中包含该对象返回 `true`，否则返回 `false`。
