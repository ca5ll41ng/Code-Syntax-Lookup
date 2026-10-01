---
id: "zh-php-function-function-fann-set-rprop-increase-factor"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_rprop_increase_factor"
title: "使用 RPROP 算法训练时，设置增长因子"
signature: "bool fann_set_rprop_increase_factor(resource $ann, float $rprop_increase_factor)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-rprop-increase-factor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 RPROP 算法训练时，设置增长因子

## 说明

```php
bool fann_set_rprop_increase_factor(resource $ann, float $rprop_increase_factor)
```

使用 RPROP 算法训练时，设置增长因子。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$rprop_increase_factor`** — 增长因子。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_rprop_increase_factor()`
