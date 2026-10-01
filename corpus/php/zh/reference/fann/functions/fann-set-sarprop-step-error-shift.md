---
id: "zh-php-function-function-fann-set-sarprop-step-error-shift"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_sarprop_step_error_shift"
title: "设置 sarprop 算法的步误差偏移量"
signature: "bool fann_set_sarprop_step_error_shift(resource $ann, float $sarprop_step_error_shift)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-sarprop-step-error-shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 sarprop 算法的步误差偏移量

## 说明

```php
bool fann_set_sarprop_step_error_shift(resource $ann, float $sarprop_step_error_shift)
```

设置 sarprop 算法的步误差偏移量。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$sarprop_step_error_shift`** — sarprop 算法的步误差偏移量.

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_get_sarprop_step_error_shift()`
