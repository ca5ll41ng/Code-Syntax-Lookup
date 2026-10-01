---
id: "zh-php-function-function-fann-get-bit-fail-limit"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_bit_fail_limit"
title: "返回训练期间使用的误差限制"
signature: "float fann_get_bit_fail_limit(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-bit-fail-limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回训练期间使用的误差限制

## 说明

```php
float fann_get_bit_fail_limit(resource $ann)
```

返回训练期间使用的误差限制。

训练期间使用的误差限制，在 停止函数 中设置的 `FANN_STOPFUNC_BIT`.

限度是训练过程中期望输出和实际输出之间的最大可接受差值。每个输出偏离超过这个限度将会被算作误差。不同的是在使用对称激活函数的时候这个值要除以2，因此对称或者不对称可以使用同样的限度。

默认的误差限度是 0.35.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回误差限度，错误则返回 `false` .

## 参见

`fann_set_bit_fail_limit()`
