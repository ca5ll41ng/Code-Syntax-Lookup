---
id: "zh-php-function-function-fann-get-training-algorithm"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_training_algorithm"
title: "返回训练算法。"
signature: "int fann_get_training_algorithm(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-training-algorithm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回训练算法。

## 说明

```php
int fann_get_training_algorithm(resource $ann)
```

返回训练算法。该训练算法是被 `fann_train_on_data()` 和相关函数使用的。

要注意的是这个算法在`fann_cascadetrain_on_data()`函数中也是可以使用的, 尽管在层叠训练中只有`FANN_TRAIN_RPROP` 和 `FANN_TRAIN_QUICKPROP` 算法被允许使用。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回训练算法 常量, 错误则返回 `false` .

## 参见

`fann_set_training_algorithm()`
