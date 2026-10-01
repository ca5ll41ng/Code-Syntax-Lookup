---
id: "zh-php-function-function-fann-get-sarprop-step-error-shift"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_sarprop_step_error_shift"
title: "返回 sarprop 步值的误差偏移"
signature: "float fann_get_sarprop_step_error_shift(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-sarprop-step-error-shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 sarprop 步值的误差偏移

## 说明

```php
float fann_get_sarprop_step_error_shift(resource $ann)
```

返回 sarprop 步值的误差偏移。

默认的步值误差偏移是 1.385.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回 sarprop 步值误差偏移，错误则返回 `false` .

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_set_sarprop_step_error_shift()`
