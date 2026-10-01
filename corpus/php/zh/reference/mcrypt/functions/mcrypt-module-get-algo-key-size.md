---
id: "zh-php-function-function-mcrypt-module-get-algo-key-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_get_algo_key_size"
title: "获取打开模式所支持的最大密钥大小"
signature: "int mcrypt_module_get_algo_key_size(string $algorithm, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-get-algo-key-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取打开模式所支持的最大密钥大小

## 说明

```php
int mcrypt_module_get_algo_key_size(string $algorithm, [string $lib_dir = ...])
```

获取打开模式所支持的最大密钥大小。

## 参数

- **`$algorithm`** — 算法名称。
- **`$lib_dir`** — 可选参数， 表示在操作系统上包含模式模块的路径。

## 返回值

本函数返回算法所支持的最大密钥大小， 以字节为单位。
