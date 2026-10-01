---
id: "zh-php-function-function-fann-create-from-file"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_from_file"
title: "从配置文件中构建一个反向传播神经网络。"
signature: "resource fann_create_from_file(string $configuration_file)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-from-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从配置文件中构建一个反向传播神经网络。

## 说明

```php
resource fann_create_from_file(string $configuration_file)
```

从一个由 `fann_save()` 函数保存的配置文件中构建一个反向传播神经网络。

## 参数

- **`$configuration_file`** — 配置文件的路径。

## 返回值

成功时返回神经网络 `资源`，发生错误返回 `false`。

## 参见

`fann_save()`
