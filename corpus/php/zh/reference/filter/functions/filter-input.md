---
id: "zh-php-function-function-filter-input"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "filter_input"
title: "通过名称获取特定的外部变量，并且可以通过过滤器处理它"
signature: "mixed filter_input(int $type, string $var_name, int $filter = FILTER_DEFAULT, array|int $options = 0)"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-input.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过名称获取特定的外部变量，并且可以通过过滤器处理它

## 说明

```php
mixed filter_input(int $type, string $var_name, int $filter = FILTER_DEFAULT, array|int $options = 0)
```

## 参数

- **`$type`** — `INPUT_{*}` 常量之一。
  > 在用户对超全局变量进行任何修改之前，正在过滤的超全局变量内容是 SAPI 提供的原始“原始”内容。要过滤修改后的超全局变量，请使用 `filter_var()`。


- **`$var_name`** — 在相应 `$type` 的超全局变量中要过滤的变量名称。

## 返回值

成功时返回过滤后的变量。如果变量未设置，则返回 `false`。失败时也返回 `false`，当使用 `FILTER_NULL_ON_FAILURE` flag 时返回 `null`。

## 示例

**`filter_input()` 示例**

```php


<?php
$search_html = filter_input(INPUT_GET, 'search', FILTER_SANITIZE_SPECIAL_CHARS);
$search_url = filter_input(INPUT_GET, 'search', FILTER_SANITIZE_ENCODED);
echo "You have searched for $search_html.\n";
echo "<a href='?search=$search_url'>Search again.</a>";
?>

   
```

以上示例的输出类似于：

```text


You have searched for Me &#38; son.
<a href='?search=Me%20%26%20son'>Search again.</a>

   
```

## 参见

 `filter_input_array()` `filter_var()` `filter_var_array()`  验证过滤器 `FILTER_VALIDATE_{*}`   清理过滤器 `FILTER_SANITIZE_{*}`
