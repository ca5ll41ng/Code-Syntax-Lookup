---
id: "zh-php-function-function-fann-length-train-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_length_train_data"
title: "返回训练数据中训练模式的数量。"
signature: "int fann_length_train_data(resource $data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-length-train-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回训练数据中训练模式的数量。

## 说明

```php
int fann_length_train_data(resource $data)
```

返回训练数据中训练模式的数量。 `resource`.

## 参数

- **`$data`** — 神经网络训练数据 `资源`。

## 返回值

成功，则返回训练数据`resource`中的元素数，错误则返回 `false` .
