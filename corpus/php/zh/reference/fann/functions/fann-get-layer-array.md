---
id: "zh-php-function-function-fann-get-layer-array"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_layer_array"
title: "获取网络中每层的神经元数量。"
signature: "array fann_get_layer_array(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-layer-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取网络中每层的神经元数量。

## 说明

```php
array fann_get_layer_array(resource $ann)
```

获取网络中每层的神经元数量。

偏差神经元不包括在内，所以层数是和 fann_create 函数组想匹配的。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

包含每层神经元数量的数组。
