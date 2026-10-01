---
id: "zh-php-function-function-fann-get-learning-rate"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_learning_rate"
title: "返回学习速率"
signature: "float fann_get_learning_rate(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-learning-rate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回学习速率

## 说明

```php
float fann_get_learning_rate(resource $ann)
```

学习率用来确定训练算法(`FANN_TRAIN_INCREMENTAL`, `FANN_TRAIN_BATCH`, `FANN_TRAIN_QUICKPROP`)中应该如何进行积极的训练。 不过，请注意这个函数不能用于 `FANN_TRAIN_RPROP`中。

默认的学习速率是 0.7。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回学习速率，错误则返回 `false` .

## 参见

`fann_set_learning_rate()` `fann_set_training_algorithm()`
