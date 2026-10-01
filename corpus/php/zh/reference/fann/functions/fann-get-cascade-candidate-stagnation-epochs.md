---
id: "zh-php-function-function-fann-get-cascade-candidate-stagnation-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_candidate_stagnation_epochs"
title: "返回层叠候选停滞周期的数量"
signature: "int fann_get_cascade_candidate_stagnation_epochs(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-candidate-stagnation-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回层叠候选停滞周期的数量

## 说明

```php
int fann_get_cascade_candidate_stagnation_epochs(resource $ann)
```

层叠候选停滞周期的数量决定了在 `fann_get_cascade_candidate_change_fraction()` 不改变MSE分数的情况下继续进行的epochs训练的数量。

更多信息参见 `fann_get_cascade_candidate_change_fraction()`.

层叠候选停滞周期的数量是 12.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回层叠候选停滞周期的数量，错误则返回 `false`.

## 参见

`fann_set_cascade_candidate_stagnation_epochs()` `fann_get_cascade_candidate_change_fraction()`
