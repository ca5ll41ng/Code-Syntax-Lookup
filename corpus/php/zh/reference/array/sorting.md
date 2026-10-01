---
id: "zh-php-guide-array-sorting"
language: "php"
lang: "zh"
category: "guide"
name: "array.sorting"
title: "对数组进行排序"
module: "array"
source_url: "https://www.php.net/manual/zh/array.sorting.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数组进行排序

PHP 有一些用来排序数组的函数， 这个文档会把它们列出来。

主要区别有：

有些函数基于 `array` 的键来排序， 而其他的基于值来排序的：`$array['key'] = 'value';`。 排序之后键和值之间的关联关系是否能够保持， 是指排序之后数组的键可能 会被重置为数字型的（0,1,2 ...）。 排序的顺序有：字母表顺序， 升序（由低到高）， 降序（由高到低），数字排序，自然排序，随机顺序或者用户自定义排序。 注意：下列的所有排序函数都是直接作用于数组本身， 而不是返回一个新的有序的数组。 以下函数对于数组中相等的元素，会保留原有的排序。 在 PHP 8.0.0 之前，它们排序后的顺序是未定义的（也即相等元素之间的顺序是不稳定的）。

| 函数名称 | 排序依据 | 数组索引键保持 | 排序的顺序 | 相关函数 |
| --- | --- | --- | --- | --- |
| `array_multisort()` | 值 | `string` 键保持不变，`int` 键重新索引 | 第一个数组或者由选项指定 | `array_walk()` |
| `asort()` | 值 | 是 | 升序 | `arsort()` |
| `arsort()` | 值 | 是 | 降序 | `asort()` |
| `krsort()` | 键 | 是 | 降序 | `ksort()` |
| `ksort()` | 键 | 是 | 升序 | `krsort()` |
| `natcasesort()` | 值 | 是 | 自然排序，大小写不敏感 | `natsort()` |
| `natsort()` | 值 | 是 | 自然排序 | `natcasesort()` |
| `rsort()` | 值 | 否 | 降序 | `sort()` |
| `shuffle()` | 值 | 否 | 随机 | `array_rand()` |
| `sort()` | 值 | 否 | 升序 | `rsort()` |
| `uasort()` | 值 | 是 | 由用户定义 | `uksort()` |
| `uksort()` | 键 | 是 | 由用户定义 | `uasort()` |
| `usort()` | 值 | 否 | 由用户定义 | `uasort()` |
