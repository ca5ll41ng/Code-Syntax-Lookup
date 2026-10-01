---
id: "zh-php-function-function-filter-has-var"
language: "php"
lang: "zh"
category: "function"
name: "filter_has_var"
title: "检测是否存在指定类型的变量"
signature: "bool filter_has_var(int $input_type, string $var_name)"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-has-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测是否存在指定类型的变量

## 说明

```php
bool filter_has_var(int $input_type, string $var_name)
```

## 参数

- **`$input_type`** — `INPUT_GET`、`INPUT_POST`、`INPUT_COOKIE`、`INPUT_SERVER`、`INPUT_ENV` 里的其中一个。
- **`$var_name`** — 要检查的变量名。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
