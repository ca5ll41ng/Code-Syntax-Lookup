---
id: "zh-php-function-weakreference-create"
language: "php"
lang: "zh"
category: "function"
name: "WeakReference::create"
title: "创建新的弱引用"
signature: "public static WeakReference WeakReference::create(object $object)"
module: "language"
source_url: "https://www.php.net/manual/zh/weakreference.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的弱引用

## 说明

```php
public static WeakReference WeakReference::create(object $object)
```

创建新的 `WeakReference`。

## 参数

- **`$object`** — 要弱引用的对象。

## 返回值

返回一个新的 `WeakReference`， 如果已经有一个指向相同对象的 `WeakReference`，则返回现有实例。
