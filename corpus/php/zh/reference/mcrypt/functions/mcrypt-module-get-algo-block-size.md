---
id: "zh-php-function-function-mcrypt-module-get-algo-block-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_get_algo_block_size"
title: "返回指定算法的分组大小"
signature: "int mcrypt_module_get_algo_block_size(string $algorithm, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-get-algo-block-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定算法的分组大小

## 说明

```php
int mcrypt_module_get_algo_block_size(string $algorithm, [string $lib_dir = ...])
```

返回指定算法的分组大小。

## 参数

- **`$algorithm`** — 算法名称。
- **`$lib_dir`** — 可选参数 `$lib_dir` ， 表示在操作系统上包含模式模块的路径。

## 返回值

返回指定算法的分组大小，以字节为单位。
