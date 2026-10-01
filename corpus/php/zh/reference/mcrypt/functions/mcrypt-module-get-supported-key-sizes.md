---
id: "zh-php-function-function-mcrypt-module-get-supported-key-sizes"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_get_supported_key_sizes"
title: "以数组形式返回打开的算法所支持的密钥大小"
signature: "array mcrypt_module_get_supported_key_sizes(string $algorithm, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-get-supported-key-sizes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以数组形式返回打开的算法所支持的密钥大小

## 说明

```php
array mcrypt_module_get_supported_key_sizes(string $algorithm, [string $lib_dir = ...])
```

以数组形式返回指定算法所支持的密钥大小。 如果从 1 到 `mcrypt_module_get_algo_key_size()` 的密钥大小都支持，则返回空数组。

## 参数

- **`$algorithm`** — 算法名称。
- **`$lib_dir`** — 可选参数， 表示在操作系统上包含算法模块的路径。

## 返回值

以数组形式返回指定算法所支持的密钥大小。 如果从 1 到 `mcrypt_module_get_algo_key_size()` 的密钥大小都支持，则返回空数组。

## 参见

 `mcrypt_enc_get_supported_key_sizes()`
