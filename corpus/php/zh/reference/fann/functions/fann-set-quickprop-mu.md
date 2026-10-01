---
id: "zh-php-function-function-fann-set-quickprop-mu"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_quickprop_mu"
title: "设置 quickprop 算法放大因子"
signature: "bool fann_set_quickprop_mu(resource $ann, float $quickprop_mu)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-quickprop-mu.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 quickprop 算法放大因子

## 说明

```php
bool fann_set_quickprop_mu(resource $ann, float $quickprop_mu)
```

设置 quickprop 算法放大因子。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$quickprop_mu`** — 放大因子。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_quickprop_mu()`
