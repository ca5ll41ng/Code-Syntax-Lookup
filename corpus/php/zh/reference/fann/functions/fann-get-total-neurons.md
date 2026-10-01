---
id: "zh-php-function-function-fann-get-total-neurons"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_total_neurons"
title: "获取整个网络中神经元的数量。"
signature: "int fann_get_total_neurons(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-total-neurons.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取整个网络中神经元的数量。

## 说明

```php
int fann_get_total_neurons(resource $ann)
```

获取整个网络中神经元的数量。 这个数量也包括偏置神经元，因此一个2-4-2的网络有2+4+2+2（偏置神经元）=10个神经元。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回整个网络神经元的数量, 错误则返回 `false` .
