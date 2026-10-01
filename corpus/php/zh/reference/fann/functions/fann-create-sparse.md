---
id: "zh-php-function-function-fann-create-sparse"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_sparse"
title: "创建一个标准的反向传播神经网络，该网络不是全连接。"
signature: "resource fann_create_sparse(float $connection_rate, int $num_layers, int $num_neurons1, int $num_neurons2, int $num_neuronsN)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-sparse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个标准的反向传播神经网络，该网络不是全连接。

## 说明

```php
resource fann_create_sparse(float $connection_rate, int $num_layers, int $num_neurons1, int $num_neurons2, int $num_neuronsN)
```

创建一个标准的反向传播神经网络，该网络不是全连接。

## 参数

- **`$connection_rate`** — 连接率控制着在网络中将会有多少连接，如果连接率设置为1，那么这个网络就是全连接网络，但是如果设置为 0.5 将会设置一半的连接。连接率为1的结果和使用 `fann_create_standard()`函数的效果是一样的。
- **`$num_layers`** — 神经网络层数，包括输入输出层。
- **`$num_neurons1`** — 第一层网络的神经数。
- **`$num_neurons2`** — 第二层网络的神经数。
- **`$num_neuronsN`** — 其它层网络的神经数。

## 返回值

返回一个神经网络资源，错误则返回 `false` .

## 参见

`fann_create_sparse_array()` `fann_create_standard()` `fann_create_shortcut()`
