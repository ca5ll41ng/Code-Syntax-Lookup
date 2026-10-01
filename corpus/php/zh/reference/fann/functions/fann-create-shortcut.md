---
id: "zh-php-function-function-fann-create-shortcut"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_shortcut"
title: "创建一个含快捷连接而非全连接的标准反向传播神经网络。"
signature: "resource fann_create_shortcut(int $num_layers, int $num_neurons1, int $num_neurons2, int $num_neuronsN)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-shortcut.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个含快捷连接而非全连接的标准反向传播神经网络。

## 说明

```php
resource fann_create_shortcut(int $num_layers, int $num_neurons1, int $num_neurons2, int $num_neuronsN)
```

创建一个含快捷连接而非全连接标准反向传播神经网络。

快捷连接是可以跳过网络层次的连接。一个包含快捷连接的全连接网络，表示在之后的网络层里所有的神经元都是互相连接的。包括输出层直接连接到输出层的连接。

## 参数

- **`$num_layers`** — 包括输入输出层在内的网络层的层数。。
- **`$num_neurons1`** — 第一层神经元的数量。
- **`$num_neurons2`** — 第二层神经元的数量。
- **`$num_neuronsN`** — 其它层神经元的数量。

## 返回值

成功，返回神经网络的资源，错误则返回 `false` .

## 参见

`fann_create_shortcut_array()` `fann_create_sparse()` `fann_create_standard()`
