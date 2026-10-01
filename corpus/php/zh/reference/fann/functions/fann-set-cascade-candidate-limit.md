---
id: "zh-php-function-function-fann-set-cascade-candidate-limit"
language: "php"
lang: "zh"
category: "function"
name: "fann_set_cascade_candidate_limit"
title: "设置候选限度"
signature: "bool fann_set_cascade_candidate_limit(resource $ann, float $cascade_candidate_limit)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-set-cascade-candidate-limit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置候选限度

## 说明

```php
bool fann_set_cascade_candidate_limit(resource $ann, float $cascade_candidate_limit)
```

设置候选限度。

## 参数

- **`$ann`** — 神经网络 `资源`。
- **`$cascade_candidate_limit`** — 候选限度。

## 返回值

成功时返回 `true`，其它情况下返回 `false`。

## 参见

`fann_get_cascade_candidate_limit()`
