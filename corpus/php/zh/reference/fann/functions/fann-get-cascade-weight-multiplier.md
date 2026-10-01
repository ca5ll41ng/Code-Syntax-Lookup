---
id: "zh-php-function-function-fann-get-cascade-weight-multiplier"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_weight_multiplier"
title: "返回权重因子"
signature: "float fann_get_cascade_weight_multiplier(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-weight-multiplier.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回权重因子

## 说明

```php
float fann_get_cascade_weight_multiplier(resource $ann)
```

权重因子是用于在添加神经元到神经网络之前，和候选神经元权重相乘的参数。该参数的值通常介于0到1之间，用来使训练变得不那么积极。

默认权重因子是 0.4.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回权重因子，错误则返回 `false` .

## 参见

`fann_set_cascade_weight_multiplier()`
