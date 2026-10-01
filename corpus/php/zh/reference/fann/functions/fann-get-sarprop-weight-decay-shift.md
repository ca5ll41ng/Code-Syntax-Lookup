---
id: "zh-php-function-function-fann-get-sarprop-weight-decay-shift"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_sarprop_weight_decay_shift"
title: "返回 sarprop 算法权重衰减变化值"
signature: "float fann_get_sarprop_weight_decay_shift(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-sarprop-weight-decay-shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 sarprop 算法权重衰减变化值

## 说明

```php
float fann_get_sarprop_weight_decay_shift(resource $ann)
```

sarprop 算法权重衰减变化值。

默认的最大值是 -6.644.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回 sarprop 算法权重衰减变化值，错误则返回 `false` .

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_set_sarprop_weight_decay_shift()`
