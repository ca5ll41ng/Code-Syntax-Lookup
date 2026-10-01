---
id: "zh-php-function-function-fann-set-callback"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_callback"
title: "设置训练期间使用的回调函数。"
signature: "bool fann_set_callback(resource $ann, callable $callback)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置训练期间使用的回调函数。

## 说明

```php
bool fann_set_callback(resource $ann, callable $callback)
```

设置训练期间使用的回调函数。 这意味着它被`fann_train_on_data()` 或 `fann_train_on_file()`调用。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$callback`** — 提供的回调函数接受以下参数： `ann` - 神经网络 `resource` `train` - 训练数据 `resource` 或者 当被 `fann_train_on_file()` 为 `null` `max_epochs` - 训练将进行的最大周期数。 `epochs_between_reports` - 在调用该函数之前训练进行的最大周期数。 `desired_error` - 期望的 `fann_get_MSE()` 或者 `fann_get_bit_fail()`, 取决于`fann_set_train_stop_function()`函数选择的停止函数。 `epochs` - The current epoch — 回调将会返回 `true`. 如果返回 `false`, 表明训练将会终止。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_train_on_data()` `fann_train_on_file()`
