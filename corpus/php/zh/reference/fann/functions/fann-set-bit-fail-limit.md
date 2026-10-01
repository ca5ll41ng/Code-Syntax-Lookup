---
id: "zh-php-function-function-fann-set-bit-fail-limit"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_bit_fail_limit"
title: "设置训练期间使用的误差"
signature: "bool fann_set_bit_fail_limit(resource $ann, float $bit_fail_limit)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-bit-fail-limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置训练期间使用的误差

## 说明

```php
bool fann_set_bit_fail_limit(resource $ann, float $bit_fail_limit)
```

设置训练期间使用的误差。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$bit_fail_limit`** — 误差。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_bit_fail_limit()`
