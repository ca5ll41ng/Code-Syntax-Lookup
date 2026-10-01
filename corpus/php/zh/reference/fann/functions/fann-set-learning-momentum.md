---
id: "zh-php-function-function-fann-set-learning-momentum"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_learning_momentum"
title: "设置学习动量。"
signature: "bool fann_set_learning_momentum(resource $ann, float $learning_momentum)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-learning-momentum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置学习动量。

## 说明

```php
bool fann_set_learning_momentum(resource $ann, float $learning_momentum)
```

设置学习动量。

更多信息，参见 `fann_get_learning_momentum()`.

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$learning_momentum`** — 学习动量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_learning_momentum()` `fann_set_training_algorithm()`
