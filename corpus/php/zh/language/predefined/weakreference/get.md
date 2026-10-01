---
id: "zh-php-function-weakreference-get"
language: "php"
lang: "zh"
category: "function"
name: "WeakReference::get"
title: "获取弱引用对象"
signature: "public object|null WeakReference::get()"
module: "language"
source_url: "https://www.php.net/manual/zh/weakreference.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取弱引用对象

## 说明

```php
public object|null WeakReference::get()
```

获取弱引用对象。 如果对象已销毁，则返回 `null`。

## 参数

此函数没有参数。

## 返回值

返回引用的 `object`，如果对象已销毁，则返回 `null`。
