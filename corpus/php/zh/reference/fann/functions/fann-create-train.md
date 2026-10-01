---
id: "zh-php-function-function-fann-create-train"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_train"
title: "创建一个空的训练数据结构。"
signature: "resource fann_create_train(int $num_data, int $num_input, int $num_output)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-train.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个空的训练数据结构。

## 说明

```php
resource fann_create_train(int $num_data, int $num_input, int $num_output)
```

创建一个空的训练数据结构。

## 参数

- **`$num_data`** — 训练数据的数量。
- **`$num_input`** — 每个训练数据集输入的数量。
- **`$num_output`** — 每个训练数据集输出的数量。

## 返回值

成功时返回训练数据 `资源`，发生错误返回 `false`。

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_read_train_from_file()` `fann_train_on_data()` `fann_destroy_train()` `fann_save_train()`
