---
id: "zh-php-function-function-fann-get-num-layers"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_num_layers"
title: "获取神经网络的层数。"
signature: "int fann_get_num_layers(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-num-layers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取神经网络的层数。

## 说明

```php
int fann_get_num_layers(resource $ann)
```

获取神经网络的层数。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回神经网络的层数，错误则返回 `false` .
