---
id: "zh-php-function-function-mcrypt-module-is-block-algorithm"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_is_block_algorithm"
title: "检测指定算法是否为分组加密算法"
signature: "bool mcrypt_module_is_block_algorithm(string $algorithm, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-is-block-algorithm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测指定算法是否为分组加密算法

## 说明

```php
bool mcrypt_module_is_block_algorithm(string $algorithm, [string $lib_dir = ...])
```

如果指定算法是分组加密算法，返回 `true`， 反之返回 `false`。

## 参数

- **`$algorithm`** — 要检测的算法。
- **`$lib_dir`** — 可选参数 `$lib_dir`， 表示在操作系统上包含算法模块的路径。

## 返回值

如果指定算法是分组加密算法，返回 `true`， 反之返回 `false`。
