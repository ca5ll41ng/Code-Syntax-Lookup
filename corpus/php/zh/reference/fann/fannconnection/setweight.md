---
id: "zh-php-function-fannconnection-setweight"
language: "php"
lang: "zh"
category: "function"
name: "FANNConnection::setWeight"
title: "设置连接权重。"
signature: "public void FANNConnection::setWeight(float $weight)"
module: "fann"
source_url: "https://www.php.net/manual/zh/fannconnection.setweight.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置连接权重。

## 说明

```php
public void FANNConnection::setWeight(float $weight)
```

设置连接权重。

该方法不同于 `fann_set_weight()` 方法. 该方法不会网络中的权重值。只有当调用了 `fann_set_weight_array()` 方法后网络中的权重值才会更改。

## 参数

- **`$weight`** — 连接权重。

## 返回值

无返回值。
