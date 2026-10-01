---
id: "zh-php-function-function-fann-get-cascade-max-out-epochs"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_max_out_epochs"
title: "返回输出周期的最大值"
signature: "int fann_get_cascade_max_out_epochs(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-max-out-epochs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回输出周期的最大值

## 说明

```php
int fann_get_cascade_max_out_epochs(resource $ann)
```

输出周期的最大值决定了在添加新的候选神经元之后，输出连接周期的最大值。

默认输出周期的最大值是 150.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，则返回输出周期的最大值，错误则返回 `false` .

## 参见

`fann_set_cascade_max_out_epochs()`
