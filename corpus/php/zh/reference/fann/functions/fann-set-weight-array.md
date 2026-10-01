---
id: "zh-php-function-function-fann-set-weight-array"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_weight_array"
title: "在网络中设置一个连接。"
signature: "bool fann_set_weight_array(resource $ann, array $connections)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-weight-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在网络中设置一个连接。

## 说明

```php
bool fann_set_weight_array(resource $ann, array $connections)
```

在网络中设置一个连接。

只有权重将会被改变，连接和权重将被忽略如果它们不存在于网络中。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$connections`** — 一个包含 `FANNConnection` 对象的数组。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。
