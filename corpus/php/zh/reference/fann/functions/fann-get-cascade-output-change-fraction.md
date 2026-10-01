---
id: "zh-php-function-function-fann-get-cascade-output-change-fraction"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_output_change_fraction"
title: "返回级联输出变化分数"
signature: "float fann_get_cascade_output_change_fraction(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-output-change-fraction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回级联输出变化分数

## 说明

```php
float fann_get_cascade_output_change_fraction(resource $ann)
```

级联输出变化分数是一个介于0到1之间的数字，决定了在`fann_get_cascade_output_stagnation_epochs()`的输出连接训练中，`fann_get_MSE()`的值将改变多大才能保持训练不至于停滞。如果训练停滞了， If the training stagnates, 输出连接的训练将结束，新的候选神经元将准备。

这就意味着如果在`fann_get_cascade_output_stagnation_epochs()`期间， MSE没有被 `fann_get_cascade_output_change_fraction()` 改变, 因为训练的停滞将导致输出连接将被停止。

如果级联输出改变分数很小，输出连接将会训练的更多，如果分数很大则会训练的更少。

默认的级联输出改变分数是0.01，和MSE中的1%相等。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回级联输出更改分数，错误则返回 `false` .

## 参见

`fann_set_cascade_output_change_fraction()` `fann_get_MSE()` `fann_get_cascade_output_stagnation_epochs()`
