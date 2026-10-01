---
id: "zh-php-function-function-fann-create-shortcut-array"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_shortcut_array"
title: "创建一个含快捷连接而非全连接的标准反向传播神经网络。"
signature: "resource fann_create_shortcut_array(int $num_layers, array $layers)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-shortcut-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个含快捷连接而非全连接的标准反向传播神经网络。

## 说明

```php
resource fann_create_shortcut_array(int $num_layers, array $layers)
```

使用包含各层大小的数组创建一个含快捷连接而非全连接的标准反向传播神经网络。

## 参数

- **`$num_layers`** — 网络层数的总数，包含输入输出层。
- **`$layers`** — 一个包含各层大小的数组。

## 返回值

成功，返回一个神经网络的资源，错误则返回 `false`

## 参见

`fann_create_shortcut()` `fann_create_sparse()` `fann_create_standard()`
