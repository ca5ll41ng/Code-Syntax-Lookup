---
id: "zh-php-function-function-fann-set-training-algorithm"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_training_algorithm"
title: "设置训练算法。"
signature: "bool fann_set_training_algorithm(resource $ann, int $training_algorithm)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-training-algorithm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置训练算法。

## 说明

```php
bool fann_set_training_algorithm(resource $ann, int $training_algorithm)
```

设置训练算法。

更多信息参见 `fann_get_training_algorithm()`.

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$training_algorithm`** — Training algorithm 常量

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_training_algorithm()`
