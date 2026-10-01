---
id: "zh-php-function-function-fann-set-rprop-delta-min"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_rprop_delta_min"
title: "设置最小步长"
signature: "bool fann_set_rprop_delta_min(resource $ann, float $rprop_delta_min)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-rprop-delta-min.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置最小步长

## 说明

```php
bool fann_set_rprop_delta_min(resource $ann, float $rprop_delta_min)
```

最小步长是一个小的正数，决定最小步长可能有多小。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$rprop_delta_min`** — 最小步长。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_rprop_delta_min()`
