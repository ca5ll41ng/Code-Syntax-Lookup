---
id: "zh-php-function-function-fann-shuffle-train-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_shuffle_train_data"
title: "打算训练数据，使顺序随机。"
signature: "bool fann_shuffle_train_data(resource $train_data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-shuffle-train-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打算训练数据，使顺序随机。

## 说明

```php
bool fann_shuffle_train_data(resource $train_data)
```

打算训练数据，使顺序随机。 增量训练时推荐使用，但是批训练时并没有什么明显的效果。

## 参数

- **`$train_data`** — 神经网络训练数据 `资源`。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。
