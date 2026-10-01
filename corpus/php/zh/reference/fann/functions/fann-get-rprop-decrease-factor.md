---
id: "zh-php-function-function-fann-get-rprop-decrease-factor"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_rprop_decrease_factor"
title: "返回 RPROP 训练期间的衰减系数"
signature: "float fann_get_rprop_decrease_factor(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-rprop-decrease-factor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 RPROP 训练期间的衰减系数

## 说明

```php
float fann_get_rprop_decrease_factor(resource $ann)
```

衰减系数的值小于1，用于在 RPROP 训练期间减少的步长。

The default decrease factor is 0.5.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回衰减系数，错误则返回 `false` .

## 参见

`fann_set_rprop_decrease_factor()`
