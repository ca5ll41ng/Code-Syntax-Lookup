---
id: "zh-php-function-function-fann-train"
language: "php"
lang: "zh"
category: "function"
name: "fann_train"
title: "使用一个输入集和一个期望的输出集来迭代训练一次。"
signature: "bool fann_train(resource $ann, array $input, array $desired_output)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-train.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用一个输入集和一个期望的输出集来迭代训练一次。

## 说明

```php
bool fann_train(resource $ann, array $input, array $desired_output)
```

使用一个输入集和一个期望的输出集来迭代训练一次。 该训练一直是递增训练，因此只会出现一个模式。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$input`** — 输入数组，这个数组的长度应该恰好和 `fann_get_num_input()` 一样长。
- **`$desired_output`** — 期望输出数组，这个数组的长度应该恰好和`fann_get_num_output()` 一样长。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_train_on_data()` `fann_train_epoch()` `fann_get_num_input()` `fann_get_num_output()`
