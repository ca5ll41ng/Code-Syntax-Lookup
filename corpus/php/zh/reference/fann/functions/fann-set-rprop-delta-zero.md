---
id: "zh-php-function-function-fann-set-rprop-delta-zero"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_rprop_delta_zero"
title: "设置初始步长"
signature: "bool fann_set_rprop_delta_zero(resource $ann, float $rprop_delta_zero)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-rprop-delta-zero.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置初始步长

## 说明

```php
bool fann_set_rprop_delta_zero(resource $ann, float $rprop_delta_zero)
```

初始步长是确定初始步长的正数。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$rprop_delta_zero`** — 初始步长。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_rprop_delta_zero()` `fann_get_rprop_delta_min()` `fann_get_rprop_delta_max()`
