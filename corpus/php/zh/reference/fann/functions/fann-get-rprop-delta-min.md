---
id: "zh-php-function-function-fann-get-rprop-delta-min"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_rprop_delta_min"
title: "返回最小步长"
signature: "float fann_get_rprop_delta_min(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-rprop-delta-min.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最小步长

## 说明

```php
float fann_get_rprop_delta_min(resource $ann)
```

最小步长是一个小的正数，决定最小步长可能有多小。.

默认的最小步长是 0.0.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回最小步长，错误则返回 `false` .

## 参见

`fann_set_rprop_delta_min()`
