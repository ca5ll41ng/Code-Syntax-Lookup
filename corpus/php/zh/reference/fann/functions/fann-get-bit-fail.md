---
id: "zh-php-function-function-fann-get-bit-fail"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_bit_fail"
title: "失败位的数量"
signature: "int fann_get_bit_fail(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-bit-fail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 失败位的数量

## 说明

```php
int fann_get_bit_fail(resource $ann)
```

失败位的数量：意味着输出神经元的数量多于失败位的限度 (参见 `fann_get_bit_fail_limit()`, `fann_set_bit_fail_limit()`). 位数将会在所有的训练数据中被计数，因此这个数字将会比训练数据的数量高一点。

该值可以被 `fann_reset_MSE()` 函数重置，并且可以被能够更新MSE值的函数更新。(比如 `fann_test_data()`, `fann_train_epoch()`)

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功 ，返回失败位的数量，错误则返回 `false` .

## 参见

`fann_get_MSE()` `fann_reset_MSE()` `fann_test_data()` `fann_train_epoch()` `fann_get_bit_fail_limit()` `fann_set_bit_fail_limit()`
