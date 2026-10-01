---
id: "zh-php-function-function-fann-set-sarprop-weight-decay-shift"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_sarprop_weight_decay_shift"
title: "设置 sarprop 算法的权重衰减偏移值"
signature: "bool fann_set_sarprop_weight_decay_shift(resource $ann, float $sarprop_weight_decay_shift)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-sarprop-weight-decay-shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 sarprop 算法的权重衰减偏移值

## 说明

```php
bool fann_set_sarprop_weight_decay_shift(resource $ann, float $sarprop_weight_decay_shift)
```

设置 sarprop 算法的权重衰减偏移值。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$sarprop_weight_decay_shift`** — sarprop 算法的权重衰减偏移值。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_get_sarprop_weight_decay_shift()`
