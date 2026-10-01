---
id: "zh-php-function-function-fann-get-rprop-increase-factor"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_rprop_increase_factor"
title: "返回 RPROP 训练的递增系数"
signature: "float fann_get_rprop_increase_factor(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-rprop-increase-factor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 RPROP 训练的递增系数

## 说明

```php
float fann_get_rprop_increase_factor(resource $ann)
```

递增系数是一个大于1的值，用于递增 RPROP 训练中的步长。

默认的递进系数是 1.2

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回递进系数，错误则返回 `false` .

## 参见

`fann_set_rprop_increase_factor()`
