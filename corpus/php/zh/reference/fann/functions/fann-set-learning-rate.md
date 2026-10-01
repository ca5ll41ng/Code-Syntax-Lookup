---
id: "zh-php-function-function-fann-set-learning-rate"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_learning_rate"
title: "设置学习速率。"
signature: "bool fann_set_learning_rate(resource $ann, float $learning_rate)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-learning-rate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置学习速率。

## 说明

```php
bool fann_set_learning_rate(resource $ann, float $learning_rate)
```

设置学习速率。

更新信息，参见 `fann_get_learning_rate()`.

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$learning_rate`** — 学习速率。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_learning_rate()` `fann_set_training_algorithm()`
