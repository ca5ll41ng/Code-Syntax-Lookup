---
id: "zh-php-function-function-fann-set-cascade-candidate-stagnation-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_candidate_stagnation_epochs"
title: "设置级联候选停止周期数"
signature: "bool fann_set_cascade_candidate_stagnation_epochs(resource $ann, int $cascade_candidate_stagnation_epochs)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-candidate-stagnation-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置级联候选停止周期数

## 说明

```php
bool fann_set_cascade_candidate_stagnation_epochs(resource $ann, int $cascade_candidate_stagnation_epochs)
```

设置级联候选停止周期数。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_candidate_stagnation_epochs`** — 级联候选停止周期数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_cascade_candidate_stagnation_epochs()`
