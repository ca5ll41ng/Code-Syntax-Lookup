---
id: "zh-php-function-function-parse-str"
language: "php"
lang: "zh"
category: "function"
name: "parse_str"
title: "解析 URL 查询字符串"
signature: "void parse_str(string $string, array $result)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.parse-str.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 URL 查询字符串

## 说明

```php
void parse_str(string $string, array $result)
```

如果 `$string` 是通过 URL 传入的查询字符串，则将其解析，并将 key 设置到指定 `$result` 数组中。如果未提供 `$result` 数组，则会将值设置为当前作用域中的变量。

## 参数

- **`$string`** — 输入的字符串。
- **`$result`** — 以引用方式传递的变量，该变量将设置为数组，包含从 `$string` 中提取的 key-value 对。如果未传入 `$result` 参数，则每个 key 都会在局部作用域中设置为单独的变量。
  > 极度*不建议*在没有 `$result` 参数的情况下使用此函数， 并且在 PHP 7.2 中将*废弃*不设置参数的行为。PHP 8.0.0 起，`$result` 参数是*强制的*。



## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$result` 是必须项。 |
| 7.2.0 | 不带第二个参数的情况下使用 `parse_str()` 会产生 `E_DEPRECATED` 警告。 |

## 示例

**`parse_str()` 的使用**

```php


<?php
$str = "first=value&arr[]=foo+bar&arr[]=baz";

// 推荐用法
parse_str($str, $output);
echo $output['first'], PHP_EOL;  // value
echo $output['arr'][0], PHP_EOL; // foo bar
echo $output['arr'][1], PHP_EOL; // baz
?>

    
```

在创建数组 key 或局部变量时，参数名中的「空格」和「点」均会转换为下划线。这是因为 PHP 变量名不允许包含空格或点号，即使按推荐方式使用 `$result` 参数传递数组，此规则依然适用。

**`parse_str()` 名称改写**

```php


<?php
parse_str("My Value=Something", $output);
echo $output['My_Value']; // Something
?>

    
```

## 注释

> `parse_str()` 是受 max_input_vars 指令影响的。超过这个限制会触发一个 `E_WARNING`， 超过限制的变量不会被添加到结果数组中。 默认值是 1000；根据需要调整 max_input_vars。

> 填充到 `$result` 数组中的所有值（如果未设置第二个参数，则为创建变量）均已按照与 `urldecode()` 相同的规则进行了 URL 解码。

> 要获取当前请求的查询字符串，可以使用 `$_SERVER['QUERY_STRING']` 变量。此外建议阅读来自 PHP 之外的变量的相关章节。

## 参见

`parse_url()` `pathinfo()` `http_build_query()` `urldecode()`
