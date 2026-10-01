---
id: "zh-php-function-function-fann-set-rprop-delta-max"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_rprop_delta_max"
title: "设置最大步长"
signature: "bool fann_set_rprop_delta_max(resource $ann, float $rprop_delta_max)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-rprop-delta-max.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置最大步长

## 说明

```php
bool fann_set_rprop_delta_max(resource $ann, float $rprop_delta_max)
```

最大步长是一个正数，决定最大步长可能有多大。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$rprop_delta_max`** — 最大步长。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_rprop_delta_max()` `fann_get_rprop_delta_min()`
