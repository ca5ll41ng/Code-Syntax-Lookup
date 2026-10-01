---
id: "zh-php-function-function-fann-get-quickprop-mu"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_quickprop_mu"
title: "返回放大系数"
signature: "float fann_get_quickprop_mu(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-quickprop-mu.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回放大系数

## 说明

```php
float fann_get_quickprop_mu(resource $ann)
```

放大系数被用来增加和降低 quickprop 训练期间的步长。放大系数应该始终大于1，因为当它增加时，它会减少步长。

默认放大系数是 1.75.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回放大系数，错误则返回 `false` .

## 参见

`fann_set_quickprop_mu()`
