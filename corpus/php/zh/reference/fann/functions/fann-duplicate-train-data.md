---
id: "zh-php-function-function-fann-duplicate-train-data"
language: "php"
lang: "zh"
category: "function"
name: "fann_duplicate_train_data"
title: "返回 fann 训练数据精确的副本。"
signature: "resource fann_duplicate_train_data(resource $data)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-duplicate-train-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 fann 训练数据精确的副本。

## 说明

```php
resource fann_duplicate_train_data(resource $data)
```

返回 fann 训练数据精确的副本 `resource`。

## 参数

- **`$data`** — 神经网络训练数据 `资源`。

## 返回值

成功时返回训练数据 `资源`，发生错误返回 `false`。
