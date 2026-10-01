---
id: "zh-php-function-function-sscanf"
language: "php"
lang: "zh"
category: "function"
name: "sscanf"
title: "根据指定格式解析输入的字符"
signature: "array|int|null sscanf(string $string, string $format, mixed $vars)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.sscanf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据指定格式解析输入的字符

## 说明

```php
array|int|null sscanf(string $string, string $format, mixed $vars)
```

`sscanf()` 函数输入类似 `printf()`。`sscanf()` 读取字符串 `$string`，然后根据指定格式 `$format` 解析。

指定的格式字符串中的任意空白匹配输入字符串的任意空白。也就是说即使是格式字符串中的一个制表符（`\t`）也能匹配输入字符串中的单个空白字符。

## 参数

- **`$string`** — 将要被解析的 `string`。
- **`$format`** — `$string` 的格式解释，在 `sprintf()` 的文档中进行了描述，但有以下区别： 函数不支持区域设置。 不支持 `F`、`g`、`G` 和 `b`。 `D` 代表十进制数字。 `i` stands for integer with base detection. `n` 代表到目前为止处理的字符数。 `s` 在任何空白字符处停止阅读。 `*` 代替 `argnum$` 禁止分配此转换规范。
- **`$vars`** — 可选参数将以引用方式传入，它们的值将被设置为解析值。

## 返回值

如果仅传入了两个参数给这个函数，解析后的值作为数组返回。否则，如果传入可选参数，函数将返回赋值数量。可选参数必须通过引用传递。

如果 `$format` 要求的子字符串比 `$string` 内可用的子字符串多，则返回 `null`。

## 示例

**`sscanf()` 示例**

```php


<?php
// 获取序列号
list($serial) = sscanf("SN/2350001", "SN/%d");
// 和生产日期
$mandate = "January 01 2000";
list($month, $day, $year) = sscanf($mandate, "%s %d %d");
echo "Item $serial was manufactured on: $year-" . substr($month, 0, 3) . "-$day\n";
?>

    
```

如果传递可选参数，函数将返回赋值的数量。

**`sscanf()`——使用可选参数**

```php


<?php
// 获取作者信息并生成 DocBook 实体
$auth = "24\tLewis Carroll";
$n = sscanf($auth, "%d\t%s %s", $id, $first, $last);
echo "<author id='$id'>
    <firstname>$first</firstname>
    <surname>$last</surname>
</author>\n";
?>

    
```

## 参见

`printf()` `sprintf()` `fprintf()` `vprintf()` `vsprintf()` `vfprintf()` `fscanf()` `number_format()` `date()`
