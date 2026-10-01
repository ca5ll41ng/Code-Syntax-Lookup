---
id: "zh-php-function-fannconnection-construct"
language: "php"
lang: "zh"
category: "function"
name: "FANNConnection::__construct"
title: "连接构造器"
signature: "public FANNConnection::__construct(int $from_neuron, int $to_neuron, float $weight)"
module: "fann"
source_url: "https://www.php.net/manual/zh/fannconnection.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 连接构造器

## 说明

```php
public FANNConnection::__construct(int $from_neuron, int $to_neuron, float $weight)
```

创建一个新的连接并且初始化它的参数。一旦连接被初始化，只有其权重能被修改。

## 参数

- **`$from_neuron`** — 起始神经元的位置编号。
- **`$to_neuron`** — 终止神经元的位置编号。
- **`$weight`** — 连接的权重。
