---
id: "zh-php-function-function-fann-reset-mse"
language: "php"
lang: "zh"
category: "function"
name: "fann_reset_MSE"
title: "重置网络中的均方误差。"
signature: "bool fann_reset_MSE(string $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-reset-mse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重置网络中的均方误差。

## 说明

```php
bool fann_reset_MSE(string $ann)
```

重置网络中的均方误差。

该函数也会重置失败时位的数量。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_MSE()` `fann_get_bit_fail()` `fann_get_bit_fail_limit()`
