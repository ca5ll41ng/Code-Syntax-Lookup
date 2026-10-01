---
id: "zh-php-function-function-fann-get-learning-momentum"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_learning_momentum"
title: "返回学习动量"
signature: "float fann_get_learning_momentum(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-learning-momentum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回学习动量

## 说明

```php
float fann_get_learning_momentum(resource $ann)
```

学习动量可用来加速 `FANN_TRAIN_INCREMENTAL` 训练。 一个过高的学习动量不利于训练。 动量设为0效果和没设一样。该参数的值建议在0.0到1.0之间。

默认动量是 0.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

正确，返回学习动量，错误则返回 `false` .

## 参见

`fann_set_learning_momentum()` `fann_set_training_algorithm()`
