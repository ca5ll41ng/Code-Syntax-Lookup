---
id: "zh-php-function-function-fann-subset-train-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_subset_train_data"
title: "返回一个训练数据子集的副本。"
signature: "resource fann_subset_train_data(resource $data, int $pos, int $length)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-subset-train-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个训练数据子集的副本。

## 说明

```php
resource fann_subset_train_data(resource $data, int $pos, int $length)
```

返回一个训练数据子集的副本 `resource`, 从 `pos` 位置开始向前步进 `length` 个元素。

`fann_subset_train_data(train_data, 0, fann_length_train_data(train_data))` 和 `fann_duplicate_train_data()`函数的效果是一样的。

## 参数

- **`$data`** — 神经网络训练数据 `资源`。
- **`$pos`** — 起始位置。
- **`$length`** — 复制元素的数量。

## 返回值

成功时返回训练数据 `资源`，发生错误返回 `false`。

## 参见

`fann_duplicate_train_data()`
