---
id: "zh-php-guide-array-constants"
language: "php"
lang: "zh"
category: "guide"
name: "array.constants"
title: "预定义常量"
module: "array"
source_url: "https://www.php.net/manual/zh/array.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量作为 PHP 核心的一部分总是可用的。

- **`CASE_LOWER` (`int`)** — `CASE_LOWER` 用在 `array_change_key_case()` 中将数组的键名转换成小写字母。这也是 `array_change_key_case()` 的默认值。从 PHP 8.2.0 开始，只转换 ASCII 字符。
- **`CASE_UPPER` (`int`)** — `CASE_UPPER` 用在 `array_change_key_case()` 中将数组的键名转换成大写字母。从 PHP 8.2.0 开始，只转换 ASCII 字符。

排序顺序标识：

- **`SORT_ASC` (`int`)** — `SORT_ASC` 用在 `array_multisort()` 函数中，使其升序排列。
- **`SORT_DESC` (`int`)** — `SORT_DESC` 用在 `array_multisort()` 函数中，使其降序排列。

排序类型标识：用于各种排序函数

- **`SORT_REGULAR` (`int`)** — `SORT_REGULAR` 用于对对象进行通常比较。
- **`SORT_NUMERIC` (`int`)** — `SORT_NUMERIC` 用于对对象进行数值比较。
- **`SORT_STRING` (`int`)** — `SORT_STRING` 用于对对象进行字符串比较。
- **`SORT_LOCALE_STRING` (`int`)** — `SORT_LOCALE_STRING` 基于当前区域来对对象进行字符串比较。
- **`SORT_NATURAL` (`int`)** — `SORT_NATURAL` 用于对元素作为字符串使用“自然排序”（像是 `natsort()` ）比较。
- **`SORT_FLAG_CASE` (`int`)** — `SORT_FLAG_CASE` 可以跟 `SORT_STRING` 或者 `SORT_NATURAL` 组合（按位或（OR））对字符串进行大小写不敏感排序。从 PHP 8.2.0 开始，只转换 ASCII 字符。

过滤器 flags:

- **`ARRAY_FILTER_USE_KEY` (`int`)** — `ARRAY_FILTER_USE_KEY` 用于 `array_filter()` 将每个键作为第一个参数传递给指定回调函数。
- **`ARRAY_FILTER_USE_BOTH` (`int`)** — `ARRAY_FILTER_USE_BOTH` 用于 `array_filter()` 将值和键传递给指定回调函数。

- **`COUNT_NORMAL` (`int`)**
- **`COUNT_RECURSIVE` (`int`)**
- **`EXTR_OVERWRITE` (`int`)**
- **`EXTR_SKIP` (`int`)**
- **`EXTR_PREFIX_SAME` (`int`)**
- **`EXTR_PREFIX_ALL` (`int`)**
- **`EXTR_PREFIX_INVALID` (`int`)**
- **`EXTR_PREFIX_IF_EXISTS` (`int`)**
- **`EXTR_IF_EXISTS` (`int`)**
- **`EXTR_REFS` (`int`)**
