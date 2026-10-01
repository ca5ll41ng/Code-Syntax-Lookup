---
id: "zh-php-function-function-fann-get-cascade-num-candidates"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_num_candidates"
title: "返回训练期间使用的候选数量"
signature: "int fann_get_cascade_num_candidates(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-num-candidates.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回训练期间使用的候选数量

## 说明

```php
int fann_get_cascade_num_candidates(resource $ann)
```

返回训练期间使用的候选数量 ( `fann_get_cascade_activation_functions_count()`, `fann_get_cascade_activation_steepnesses_count()` 和 `fann_get_cascade_num_candidate_groups()`)的和。

实际的候选数是由 `fann_get_cascade_activation_functions()` 和 `fann_get_cascade_activation_steepnesses()` 数组定义的。 这些数组定义的激活功能和激活的陡度用于候选神经元。如果在激活函数数组中有两个激活函数并且陡度数组中有三个陡度，则将会有2x3=6个不同的候选神经元被训练。 这6个不同的候选神经元将会被复制到几个候选组中，这些候选组不同之处在于他们的初始权重。如果组的数量设为2，则候选神经元的数量为2x3x2=12.候选组的数量是有 `fann_set_cascade_num_candidate_groups()` 函数定义的。

默认的候选神经元数量为 6x4x2 = 48

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回训练期间候选神经元的数量，错误则返回 `false` .

## 参见

`fann_get_cascade_activation_functions()` `fann_get_cascade_activation_functions_count()` `fann_get_cascade_activation_steepnesses()` `fann_get_cascade_activation_steepnesses_count()` `fann_get_cascade_num_candidate_groups()`
