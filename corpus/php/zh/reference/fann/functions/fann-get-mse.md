---
id: "zh-php-function-function-fann-get-mse"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_MSE"
title: "从网络中读取均方误差。"
signature: "float fann_get_MSE(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-mse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从网络中读取均方误差。

## 说明

```php
float fann_get_MSE(resource $ann)
```

从网络中读取均方误差。

从网络中读取均方误差。该值是在训练或或测试中被计算的，因此如果权重在最后一次计算时已经改变，有时候会有点不太对劲。

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回均方误差, 错误则返回 `false` .

## 参见

`fann_test_data()`
