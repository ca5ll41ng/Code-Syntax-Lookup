---
id: "zh-php-function-function-filter-input-array"
language: "php"
lang: "zh"
category: "function"
name: "filter_input_array"
title: "获取一系列外部变量，并且可以通过过滤器处理它们"
signature: "array|false|null filter_input_array(int $type, array|int $options = FILTER_DEFAULT, bool $add_empty = true)"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-input-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一系列外部变量，并且可以通过过滤器处理它们

## 说明

```php
array|false|null filter_input_array(int $type, array|int $options = FILTER_DEFAULT, bool $add_empty = true)
```

这个函数当需要获取很多变量却不想重复调用`filter_input()`时很有用。

## 参数

- **`$type`** — `INPUT_{*}` 常量之一。
  > 在用户对超全局变量进行任何修改之前，正在过滤的超全局变量内容是 SAPI 提供的“原始”内容。要过滤修改后的超全局变量，请使用 `filter_var_array()`。



## 返回值

成功时，返回 `array`，包含所请求变量的值。

失败时返回 `false`。有一个失败的例外情况，就是 `$type` 指定的输入数组没有填充，并且使用了 `FILTER_NULL_ON_FAILURE` flag 时，返回 `null`。

如果 `$add_empty` 为 `true`，则输入数组中缺失的条目会填充到返回数组中，并且缺失的条目将设置为 `null`。

如果过滤失败，则返回 `array` 中的条目将为 `false`，当使用了 `FILTER_NULL_ON_FAILURE` flag 时为 `null`。

## 注释

> 在 `INPUT_SERVER` 数组中并没有 `REQUEST_TIME` ，因为它是被稍后插入到 `$_SERVER` 中的。

## 参见

 `filter_input()` `filter_var()` `filter_var_array()`  验证过滤器 `FILTER_VALIDATE_{*}`   清理过滤器 `FILTER_SANITIZE_{*}`
