---
id: "zh-php-function-function-mcrypt-module-is-block-algorithm-mode"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_is_block_algorithm_mode"
title: "返回指定模块是否是分组加密模式"
signature: "bool mcrypt_module_is_block_algorithm_mode(string $mode, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-is-block-algorithm-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定模块是否是分组加密模式

## 说明

```php
bool mcrypt_module_is_block_algorithm_mode(string $mode, [string $lib_dir = ...])
```

对于分组加密模式，返回 `true`， 反之返回 `false`。 （例如，对于 STREAM 模式返回 `false`，对于 cbc，cfb，ofb 返回 `true`）

## 参数

- **`$mode`** — 模式。
- **`$lib_dir`** — 可选参数， 表示在操作系统上包含算法模块的路径。

## 返回值

对于分组加密模式，返回 `true`， 反之返回 `false`。 （例如，对于 STREAM 模式返回 `false`，对于 cbc，cfb，ofb 返回 `true`）
