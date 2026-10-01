---
id: "zh-php-function-function-password-get-info"
language: "php"
lang: "zh"
category: "function"
name: "password_get_info"
title: "返回指定散列（hash）的相关信息"
signature: "array password_get_info(string $hash)"
module: "password"
source_url: "https://www.php.net/manual/zh/function.password-get-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定散列（hash）的相关信息

## 说明

```php
array password_get_info(string $hash)
```

如果传入的散列值（hash）是由 `password_hash()` 支持的算法生成的， 这个函数就会返回关于此散列的信息数组。

## 参数

- **`$hash`** — 一个由 `password_hash()` 创建的散列值。

## 返回值

返回三个元素的关联数组：

- `algo`， 匹配 密码算法的常量
- `algoName`，人类可读的算法名称
- `options`，调用 `password_hash()` 时提供的选项。
