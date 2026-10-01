---
id: "zh-php-function-function-fann-test"
language: "php"
lang: "zh"
category: "function"
name: "fann_test"
title: "使用一组输入和一组期望的输出来测试。"
signature: "array fann_test(resource $ann, array $input, array $desired_output)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-test.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用一组输入和一组期望的输出来测试。

## 说明

```php
array fann_test(resource $ann, array $input, array $desired_output)
```

使用一组输入和一组期望的输出来测试。 这个操作将会更新均方误差，但是无论如何都不会改变网络。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$input`** — 输入数组。 这个数组必须和 `fann_get_num_input()` 一样长。
- **`$desired_output`** — 期望的输出数组。 这个数组必须和 `fann_get_num_output()` 一样长.

## 返回值

成功时返回测试输出，错误时返回 `false`。

## 参见

`fann_test_data()` `fann_train()` `fann_get_num_input()` `fann_get_num_output()`
