---
id: "zh-php-function-datetimezone-listabbreviations"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeZone::listAbbreviations"
aliases: ["timezone_abbreviations_list"]
title: "返回一个包含 dst (夏令时)，时差和时区信息的关联数组。"
signature: "public static array DateTimeZone::listAbbreviations()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetimezone.listabbreviations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个包含 dst (夏令时)，时差和时区信息的关联数组。

## 说明

面向对象风格

```php
public static array DateTimeZone::listAbbreviations()
```

过程化风格

```php
array timezone_abbreviations_list()
```

返回简写列表，包含历史上所有使用过的简写，这可能会导致既正确又混乱的条目。也会存在冲突，比如 `PST` 在美国和菲律宾都在有使用。

因此函数返回的列表不适合构建为带选项的数组，以便向用户提供时区选择。

> 出于性能考虑，会预先编译此函数的数据。在使用较新的 [timezonedb](timezonedb) 时不会更新。

## 参数

此函数没有参数。

## 返回值

返回时区简写数组。

## 示例

**`timezone_abbreviations_list()` 示例**

```php


<?php
$timezone_abbreviations = DateTimeZone::listAbbreviations();
print_r($timezone_abbreviations["acst"]);

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Adelaide
        )

    [1] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Broken_Hill
        )

    [2] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Darwin
        )

    [3] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/North
        )

    [4] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/South
        )

    [5] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Yancowinna
        )

)

    
```

## 参见

`timezone_identifiers_list()`
