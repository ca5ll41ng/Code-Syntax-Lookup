---
id: "zh-php-function-function-fann-set-train-stop-function"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_train_stop_function"
title: "设置训练期间使用的停止函数。"
signature: "bool fann_set_train_stop_function(resource $ann, int $stop_function)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-train-stop-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置训练期间使用的停止函数。

## 说明

```php
bool fann_set_train_stop_function(resource $ann, int $stop_function)
```

设置训练期间使用的停止函数。

停止函数更多详情，参见 stop functions 常量。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$stop_function`** — stop function 常量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_train_stop_function()`
