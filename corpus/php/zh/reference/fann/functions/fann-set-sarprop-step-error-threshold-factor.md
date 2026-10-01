---
id: "zh-php-function-function-fann-set-sarprop-step-error-threshold-factor"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_sarprop_step_error_threshold_factor"
title: "设置 sarprop 算法的步误差阈值因子"
signature: "bool fann_set_sarprop_step_error_threshold_factor(resource $ann, float $sarprop_step_error_threshold_factor)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-sarprop-step-error-threshold-factor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 sarprop 算法的步误差阈值因子

## 说明

```php
bool fann_set_sarprop_step_error_threshold_factor(resource $ann, float $sarprop_step_error_threshold_factor)
```

设置 sarprop 算法的步误差阈值因子。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$sarprop_step_error_threshold_factor`** — sarprop 算法的步误差阈值因子。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_get_sarprop_step_error_threshold_factor()`
