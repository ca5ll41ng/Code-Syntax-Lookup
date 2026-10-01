---
id: "zh-php-function-function-fann-get-sarprop-step-error-threshold-factor"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_sarprop_step_error_threshold_factor"
title: "返回 sarprop 算法步值的误差阈值系数"
signature: "float fann_get_sarprop_step_error_threshold_factor(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-sarprop-step-error-threshold-factor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 sarprop 算法步值的误差阈值系数

## 说明

```php
float fann_get_sarprop_step_error_threshold_factor(resource $ann)
```

sarprop 算法步值的误差阈值系数。

默认的系数是 0.1.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回 sarprop 算法步值的误差阈值系数，错误则返回 `false` .

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_set_sarprop_step_error_threshold_factor()`
