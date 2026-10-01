---
id: "zh-php-function-function-fann-get-rprop-delta-zero"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_rprop_delta_zero"
title: "返回初始步长"
signature: "int fann_get_rprop_delta_zero(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-rprop-delta-zero.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回初始步长

## 说明

```php
int fann_get_rprop_delta_zero(resource $ann)
```

初始步长是确定初始步长的正数。

默认的初始步长是 0.1.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回初始步长，错误则返回 `false` .

## 参见

`fann_set_rprop_delta_zero()` `fann_get_rprop_delta_min()` `fann_get_rprop_delta_max()`
