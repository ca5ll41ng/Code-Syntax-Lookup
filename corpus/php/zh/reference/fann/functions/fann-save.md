---
id: "zh-php-function-function-fann-save"
language: "php"
lang: "zh"
category: "function"
name: "fann_save"
title: "将整个网络保存至配置文件。"
signature: "bool fann_save(resource $ann, string $configuration_file)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将整个网络保存至配置文件。

## 说明

```php
bool fann_save(resource $ann, string $configuration_file)
```

将整个网络保存至配置文件。

配置文件包含了神经网络的所有信息，并且能够通过 `fann_create_from_file()` 函数来创建一个原神经网络的精确副本以及与神经网络关联的所有参数。

这三个参数 (`fann_set_callback()`, `fann_set_error_log()`, `fann_set_user_data()`) 不保存在文件中，因为他们不能被安全地移植到不同的位置。当使用类似 `fann_get_MSE()` 函数训练时，生成的临时参数也不会被保存起来。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$configuration_file`** — 配置文件的路径。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_create_from_file()`
