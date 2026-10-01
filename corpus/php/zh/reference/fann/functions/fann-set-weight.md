---
id: "zh-php-function-function-fann-set-weight"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_weight"
title: "在网络中设置一个连接。"
signature: "bool fann_set_weight(resource $ann, int $from_neuron, int $to_neuron, float $weight)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-weight.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在网络中设置一个连接。

## 说明

```php
bool fann_set_weight(resource $ann, int $from_neuron, int $to_neuron, float $weight)
```

在网络中设置一个连接。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$from_neuron`** — 连接开始处的神经元。
- **`$to_neuron`** — 连接结束处的神经元。
- **`$weight`** — 连接权重。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。
