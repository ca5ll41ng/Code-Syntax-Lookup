---
id: "zh-php-function-function-fann-create-train-from-callback"
language: "php"
lang: "zh"
category: "function"
name: "fann_create_train_from_callback"
title: "从用户提供的函数创建训练数据结构。"
signature: "resource fann_create_train_from_callback(int $num_data, int $num_input, int $num_output, callable $user_function)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-create-train-from-callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从用户提供的函数创建训练数据结构。

## 说明

```php
resource fann_create_train_from_callback(int $num_data, int $num_input, int $num_output, callable $user_function)
```

从用户提供的函数创建训练数据结构。当训练数据可数，用户需要构造一个用来接收训练数据集(包括输入，输出)数量和返回值为集合的函数。

## 参数

- **`$num_data`** — 训练数据的数量。
- **`$num_input`** — 每个训练数据的输入数。
- **`$num_output`** — 每个训练数据的输出数。
- **`$user_function`** — 用户提供的函数包含以下参数： `num` - 训练数据集的数量。 `num_input` - 数量数据的输入数。 `num_output` - 数量数据的输出数。 — 函数应该返回一个包含`input` 和 `output` 键的数组，并且这两个键的值分别表示输入输出的值(皆为数组)。

## 返回值

成功时返回训练数据 `资源`，发生错误返回 `false`。

## 示例

**`fann_create_train_from_callback()` 示例**

```php


<?php
function create_train_callback($num_data, $num_input, $num_output) {
    return array(
        "input" => array_fill(0, $num_input, 1),
        "output" => array_fill(0, $num_output, 1),
    );
}

$num_data = 3;
$num_input = 2;
$num_output = 1;
$train_data = fann_create_train_from_callback($num_data, $num_input, $num_output, "create_train_callback");
if ($train_data) {
    // Do something with $train_data
}
?>

    
```

## 注释

> This function is only available if the fann extension has been build against libfann >= 2.2.

## 参见

`fann_read_train_from_file()` `fann_train_on_data()` `fann_destroy_train()` `fann_save_train()`
