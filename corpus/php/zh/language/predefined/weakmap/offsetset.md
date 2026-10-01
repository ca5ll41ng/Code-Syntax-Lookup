---
id: "zh-php-function-weakmap-offsetset"
language: "php"
lang: "zh"
category: "function"
name: "WeakMap::offsetSet"
title: "更新 map 新的键值对"
signature: "public void WeakMap::offsetSet(object $object, mixed $value)"
module: "language"
source_url: "https://www.php.net/manual/zh/weakmap.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更新 map 新的键值对

## 说明

```php
public void WeakMap::offsetSet(object $object, mixed $value)
```

更新 map 新的键值对。如果 key 已经在 map 中存在， 新的值会替换老的值。

## 参数

- **`$object`** — 键值对中作为 key 的对象。
- **`$value`** — 任意数据作为键值对的值。

## 返回值

没有返回值。
