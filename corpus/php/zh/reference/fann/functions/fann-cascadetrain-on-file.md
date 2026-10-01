---
id: "zh-php-function-function-fann-cascadetrain-on-file"
language: "php"
lang: "zh"
category: "function"
name: "fann_cascadetrain_on_file"
title: "读取文件并在整个数据集上训练，使用 Cascade2 训练算法训练一段时间"
signature: "bool fann_cascadetrain_on_file(resource $ann, string $filename, int $max_neurons, int $neurons_between_reports, float $desired_error)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-cascadetrain-on-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取文件并在整个数据集上训练，使用 Cascade2 训练算法训练一段时间

## 说明

```php
bool fann_cascadetrain_on_file(resource $ann, string $filename, int $max_neurons, int $neurons_between_reports, float $desired_error)
```

和 `fann_cascadetrain_on_data()` 函数做一样的工作，但是该函数是直接从文件读取训练数据的。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$filename`** — 包含训练数据的文件。
- **`$max_neurons`** — 添加到神经网络的最大神经元数。
- **`$neurons_between_reports`** — 打印状态报告之间的神经元数量。0值表示没有报告打印。
- **`$desired_error`** — 期望的 `fann_get_MSE()` 值或者 `fann_get_bit_fail()` 值， 取决于 `fann_set_train_stop_function()` 函数选择的停止函数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_train_on_data()` `fann_cascadetrain_on_data()`
