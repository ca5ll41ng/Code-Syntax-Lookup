---
id: "zh-php-function-function-fann-get-cascade-candidate-change-fraction"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_candidate_change_fraction"
title: "返回级联候选变化分数"
signature: "float fann_get_cascade_candidate_change_fraction(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-candidate-change-fraction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回级联候选变化分数

## 说明

```php
float fann_get_cascade_candidate_change_fraction(resource $ann)
```

返回级联候选变化分数是一个介于0到1之间的数字。该数字决定了在训练候选神经元使用 `fann_get_cascade_candidate_stagnation_epochs()` 函数时 `fann_get_MSE()` 将会改变多大的分数,是为了不让这个训练停止。如果训练停止，候选神经元的训练将会被终止并且会选出最好的候选。

这意味在`fann_get_cascade_candidate_stagnation_epochs()`期间如果 MSE 被`fann_get_cascade_candidate_change_fraction()`的分数更改，候选神经元的训练会因为训练的停滞而被停止。

如果级联候选变化分数很低，这个候选神经元将训练越多，如果这个分数很高则训练的越少。

默认的级联候选变化分数是 0.01, 等于 MSE 中1%的变化值。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回级联候选变化分数，错误则返回 `false` .

## 参见

`fann_set_cascade_candidate_change_fraction()` `fann_get_MSE()` `fann_get_cascade_candidate_stagnation_epochs()`
