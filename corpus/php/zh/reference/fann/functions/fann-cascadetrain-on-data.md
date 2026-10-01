---
id: "zh-php-function-function-fann-cascadetrain-on-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_cascadetrain_on_data"
title: "在整个数据集上训练，使用一段时间的 Cascade2 训练算法。"
signature: "bool fann_cascadetrain_on_data(resource $ann, resource $data, int $max_neurons, int $neurons_between_reports, float $desired_error)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-cascadetrain-on-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在整个数据集上训练，使用一段时间的 Cascade2 训练算法。

## 说明

```php
bool fann_cascadetrain_on_data(resource $ann, resource $data, int $max_neurons, int $neurons_between_reports, float $desired_error)
```

级联输出改变小数是一个0到1之间的数字，表示在输出连接的训练中，为了使训练不停滞的情况下，经过 `fann_get_cascade_output_stagnation_epochs()` 次迭代的后，`fann_get_MSE()` 将会改变多大。如果训练停滞了，训练的输出连接将会结束，新的候选神经元将会准备好。

该训练使用由 fann_set_cascade_ 前缀设置的参数，但它也采用了另一种训练算法，即内部训练算法。该训练算法要么是 `fann_set_training_algorithm()` 设置的 `FANN_TRAIN_RPROP` 算法，要么是 `FANN_TRAIN_QUICKPROP`，这些算法设置的参数同样也会影响到级联训练。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$data`** — 神经网络训练数据 `资源`。
- **`$max_neurons`** — 被添加入神经网络中最大的神经元数。
- **`$neurons_between_reports`** — 打印状态报告之间的神经元数。0表示没有报告会被打印。
- **`$desired_error`** — 预期的 `fann_get_MSE()` 或 `fann_get_bit_fail()`, 取决于 `fann_set_train_stop_function()` 选择的停止函数

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_train_on_data()` `fann_cascadetrain_on_file()`
