---
id: "zh-php-function-function-fann-get-quickprop-decay"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_quickprop_decay"
title: "返回衰退值，用于在 quickprop 训练迭代时衰减权重"
signature: "float fann_get_quickprop_decay(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-quickprop-decay.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回衰退值，用于在 quickprop 训练迭代时衰减权重

## 说明

```php
float fann_get_quickprop_decay(resource $ann)
```

衰退值是一个小的负数，用于在 quickprop 训练迭代时衰减权重。 这是用来确保训练时权重不要太高。

默认衰退值是 -0.0001.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回衰退值，错误则返回 `false` .

## 参见

`fann_set_quickprop_decay()`
