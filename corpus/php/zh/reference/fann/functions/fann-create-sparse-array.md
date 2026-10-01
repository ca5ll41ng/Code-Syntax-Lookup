---
id: "zh-php-function-function-fann-create-sparse-array"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_sparse_array"
title: "创建一个标准的反向传播神经网络，该网络使用一个表示每层大小的数组来构造，但是并不是全连接的。"
signature: "resource fann_create_sparse_array(float $connection_rate, int $num_layers, array $layers)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-sparse-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个标准的反向传播神经网络，该网络使用一个表示每层大小的数组来构造，但是并不是全连接的。

## 说明

```php
resource fann_create_sparse_array(float $connection_rate, int $num_layers, array $layers)
```

创建一个标准的反向传播神经网络，该网络使用一个表示每层大小的数组来构造，但是并不是全连接的。

## 参数

- **`$connection_rate`** — 连接率控制着在网络中将会有多少连接，如果连接率设置为1，那么这个网络就是全连接网络，但是如果设置为0.5将会设置一半的连接。连接率为1的结果和使用`fann_create_standard()`函数的效果是一样的。
- **`$num_layers`** — 神经网络层数，包括输入输出层。
- **`$layers`** — 表示每层大小的数组。

## 返回值

成功，返回神经网络的资源，错误则返回 `false` .

## 参见

`fann_create_sparse()` `fann_create_standard()` `fann_create_shortcut()`
