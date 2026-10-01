---
id: "zh-php-function-function-fann-set-cascade-candidate-change-fraction"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_candidate_change_fraction"
title: "设置级联候选更改分数"
signature: "bool fann_set_cascade_candidate_change_fraction(resource $ann, float $cascade_candidate_change_fraction)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-candidate-change-fraction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置级联候选更改分数

## 说明

```php
bool fann_set_cascade_candidate_change_fraction(resource $ann, float $cascade_candidate_change_fraction)
```

设置级联候选更改分数。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_candidate_change_fraction`** — 级联候选更改分数。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_cascade_candidate_change_fraction()`
