---
id: "zh-php-function-function-fann-get-rprop-delta-max"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_rprop_delta_max"
title: "返回最大步长"
signature: "float fann_get_rprop_delta_max(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-rprop-delta-max.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最大步长

## 说明

```php
float fann_get_rprop_delta_max(resource $ann)
```

最大步长是正数，决定最大步长可能有多大。.

默认的最大值是 50.0.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功,返回最大步长，错误则返回 `false` .

## 参见

`fann_set_rprop_delta_max()` `fann_get_rprop_delta_min()`
