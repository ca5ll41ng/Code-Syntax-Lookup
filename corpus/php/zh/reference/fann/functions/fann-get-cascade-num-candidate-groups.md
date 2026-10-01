---
id: "zh-php-function-function-fann-get-cascade-num-candidate-groups"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_cascade_num_candidate_groups"
title: "返回候选组的数量"
signature: "int fann_get_cascade_num_candidate_groups(resource $ann)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-cascade-num-candidate-groups.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回候选组的数量

## 说明

```php
int fann_get_cascade_num_candidate_groups(resource $ann)
```

候选组的数目是在训练期间使用的相同候选组的个数。

这个数字可以用来有更多的候选，而不必为候选定义新的参数。

参见 `fann_get_cascade_num_candidates()` 的描述。其中解释了这个参数将会生哪个成候选神经元。

默认的候选组数为2.

## 参数

- **`$ann`** — 神经网络 `资源`。

## 返回值

成功，返回候选组数量，错误则返回 `false` .

## 参见

`fann_set_cascade_num_candidate_groups()`
