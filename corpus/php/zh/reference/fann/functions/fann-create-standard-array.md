---
id: "zh-php-function-function-fann-create-standard-array"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_standard_array"
title: "创建一个全连接的反向传播神经网络，该网络使用一个表示每层大小的数组来构造。"
signature: "resource fann_create_standard_array(int $num_layers, array $layers)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-standard-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个全连接的反向传播神经网络，该网络使用一个表示每层大小的数组来构造。

## 说明

```php
resource fann_create_standard_array(int $num_layers, array $layers)
```

创建一个标准的全连接反向传播神经网络。

每一层都将会有一个偏置神经元 (除了输出层),该偏置神经元将会连接下一层所有的神经元。当运行网络时，偏置神经节点一直发出1信号。

请使用 `fann_destroy()` 函数来销毁神经网络。

## 参数

- **`$num_layers`** — 神经网络层数，包括输入输出层。
- **`$layers`** — 表示每层大小的数组。

## 返回值

成功则返回神经网络，错误则返回 `false` .

## 参见

`fann_create_standard()` `fann_create_sparse()` `fann_create_shortcut()`
