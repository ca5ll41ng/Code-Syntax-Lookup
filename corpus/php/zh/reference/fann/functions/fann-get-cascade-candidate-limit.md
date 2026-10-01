---
id: "zh-php-function-function-fann-get-cascade-candidate-limit"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_candidate_limit"
title: "返回候选限度"
signature: "float fann_get_cascade_candidate_limit(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-candidate-limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回候选限度

## 说明

```php
float fann_get_cascade_candidate_limit(resource $ann)
```

候选限度表明将会有多少候选神经元被训练。该限度是 MSE 和候选分数之间的比例限度。

将此值设置为低值以避免过于拟合，如果过度拟合并不是问题，则将其设置为更高的值。

默认的候选限度是 1000.0.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回候选限度，错误则返回 `false` .

## 参见

`fann_set_cascade_candidate_limit()`
