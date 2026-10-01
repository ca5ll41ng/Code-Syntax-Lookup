---
id: "zh-php-function-function-fann-create-standard"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_standard"
title: "创建标准的全连接反向传播神经网络。"
signature: "resource fann_create_standard(int $num_layers, int $num_neurons1, int $num_neurons2, int $num_neuronsN)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-standard.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建标准的全连接反向传播神经网络。

## 说明

```php
resource fann_create_standard(int $num_layers, int $num_neurons1, int $num_neurons2, int $num_neuronsN)
```

创建一个标准的全连接反向传播神经网络。

每一层都将会有一个偏置神经元 (除了输出层), 该偏置神经元将会连接下一层所有的神经元。当运行网络时，偏置神经节点一直发出1信号。

请使用 `fann_destroy()` 函数来销毁神经网络。

## 参数

- **`$num_layers`** — 神经网络层数，包括输入输出层。
- **`$num_neurons1`** — 第一层神经元的数量。
- **`$num_neurons2`** — 第二层神经元的数量。
- **`$num_neuronsN`** — 其他层的神经数量。

## 返回值

成功，返回神经网络的资源，失败则返回 `false` .

## 参见

`fann_create_standard_array()` `fann_create_sparse()` `fann_create_shortcut()`
