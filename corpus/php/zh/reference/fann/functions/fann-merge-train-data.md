---
id: "zh-php-function-function-fann-merge-train-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_merge_train_data"
title: "合并训练数据。"
signature: "resource fann_merge_train_data(resource $data1, resource $data2)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-merge-train-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 合并训练数据。

## 说明

```php
resource fann_merge_train_data(resource $data1, resource $data2)
```

将 data1 和 data2 数据集合并为新的训练数据 `resource`.

## 参数

- **`$data1`** — 神经网络训练数据 `资源`。
- **`$data2`** — 神经网络训练数据 `资源`。

## 返回值

成功，则返回合并的训练数据 `resource`, 错误则返回 `false` .
