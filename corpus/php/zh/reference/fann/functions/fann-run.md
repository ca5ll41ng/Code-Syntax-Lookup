---
id: "zh-php-function-function-fann-run"
language: "php"
lang: "zh"
category: "function"
name: "fann_run"
title: "将通过神经网络运行输入。"
signature: "array fann_run(resource $ann, array $input)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-run.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将通过神经网络运行输入。

## 说明

```php
array fann_run(resource $ann, array $input)
```

将通过神经网络运行输入，返回输出数组，数组的长度等于输出层神经元的个数。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$input`** — 输入数组的值。

## 返回值

成功，返回输出数组，错误则返回 `false` .
