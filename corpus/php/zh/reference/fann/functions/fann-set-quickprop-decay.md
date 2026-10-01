---
id: "zh-php-function-function-fann-set-quickprop-decay"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_quickprop_decay"
title: "设置quickprop算法衰减因子"
signature: "bool fann_set_quickprop_decay(resource $ann, float $quickprop_decay)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-quickprop-decay.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置quickprop算法衰减因子

## 说明

```php
bool fann_set_quickprop_decay(resource $ann, float $quickprop_decay)
```

设置quickprop算法衰减因子。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$quickprop_decay`** — quickprop算法衰减因子。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_quickprop_decay()`
