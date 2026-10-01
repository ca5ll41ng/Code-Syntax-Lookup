---
id: "zh-php-function-function-fann-set-cascade-num-candidate-groups"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_num_candidate_groups"
title: "设置候选组数量"
signature: "bool fann_set_cascade_num_candidate_groups(resource $ann, int $cascade_num_candidate_groups)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-num-candidate-groups.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置候选组数量

## 说明

```php
bool fann_set_cascade_num_candidate_groups(resource $ann, int $cascade_num_candidate_groups)
```

设置候选组数量。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_num_candidate_groups`** — 候选组数量。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_cascade_num_candidate_groups()`
