---
id: "zh-php-function-function-fann-save-train"
language: "php"
lang: "zh"
category: "function"
name: "fann_save_train"
title: "将训练结构体保存至文件。"
signature: "bool fann_save_train(resource $data, string $file_name)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-save-train.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将训练结构体保存至文件。

## 说明

```php
bool fann_save_train(resource $data, string $file_name)
```

将训练结构体保存至文件， 格式和 `fann_read_train_from_file()` 函数中指定的一样。

## 参数

- **`$data`** — 神经网络训练数据 `资源`。
- **`$file_name`** — 保存训练数据的文件名。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_read_train_from_file()`
