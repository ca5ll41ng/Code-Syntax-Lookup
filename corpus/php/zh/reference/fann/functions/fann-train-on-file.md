---
id: "zh-php-function-function-fann-train-on-file"
language: "php"
lang: "zh"
category: "function"
name: "fann_train_on_file"
title: "在从某个文件读取的整个数据集上训练一段时间。"
signature: "bool fann_train_on_file(resource $ann, string $filename, int $max_epochs, int $epochs_between_reports, float $desired_error)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-train-on-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在从某个文件读取的整个数据集上训练一段时间。

## 说明

```php
bool fann_train_on_file(resource $ann, string $filename, int $max_epochs, int $epochs_between_reports, float $desired_error)
```

在从某个文件读取的整个数据集上训练一段时间。

该训练使用 `fann_set_training_algorithm()` 函数选择的算法和这些训练算法设置的参数。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$filename`** — 包含训练数据的文件。
- **`$max_epochs`** — 训练应该继续的最大周期数。
- **`$epochs_between_reports`** — 用户函数之间的周期数。当为0时表示没有用户函数被调用。
- **`$desired_error`** — 期望的是 `fann_get_MSE()` 或 `fann_get_bit_fail()`的返回值, 取决于 `fann_set_train_stop_function()` 选择的停止函数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_train_on_data()` `fann_train_epoch()` `fann_get_bit_fail()` `fann_get_MSE()` `fann_set_train_stop_function()` `fann_set_training_algorithm()` `fann_set_callback()`
