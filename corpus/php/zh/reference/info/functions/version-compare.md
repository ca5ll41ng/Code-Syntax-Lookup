---
id: "zh-php-function-function-version-compare"
language: "php"
lang: "zh"
category: "function"
name: "version_compare"
title: "对比两个「PHP 规范化」的版本数字字符串"
signature: "int|bool version_compare(string $version1, string $version2, string|null $operator = null)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.version-compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对比两个「PHP 规范化」的版本数字字符串

## 说明

```php
int|bool version_compare(string $version1, string $version2, string|null $operator = null)
```

`version_compare()` 用于对比两个「PHP 规范化」的版本数字字符串。

此函数首先在版本字符串里用一个点 `.` 替换 `_`、`-` 和 `+`，也会在任意非数字前后插入一个点 `.`，这样，类似 '4.3.2RC1' 将会变成 '4.3.2.RC.1'。 接下来它会分割结果， 然后它会从左往右对比各个部分。 如果某部分包含了特定的版本字符串，将会用以下顺序处理： `列表中未找到的任意字符串` < `dev` < `alpha` = `a` < `beta` = `b` < `RC` = `rc` < `#` < `pl` = `p`。 这种方式不仅能够对比类似 '4.1' 和 '4.1.2' 那种不同的版本级别，同时也可以指定对比任何包含 PHP 开发状态的版本。

## 参数

- **`$version1`** — 第一个版本数。
- **`$version2`** — 第二个版本数。
- **`$operator`** — 可选运算符。可能运算符有：`<`、`lt`、`<=`、`le`、 `>`、`gt`、`>=`、`ge`、`==`、 `=`、`eq`、`!=`、`<>`、`ne`。 — 此参数区分大小写，它的值应该是小写的。

## 返回值

默认情况下，在第一个版本低于第二个时，`version_compare()` 返回 `-1`；如果两者相等，返回 `0`；第二个版本更低时则返回 `1`。

当使用了可选参数 `$operator` 时，如果关系是操作符所指定的那个，函数将返回 `true`，否则返回 `false`。

## 示例

下例使用了 `PHP_VERSION` 常量，因为它执行的代码包含了 PHP 版本的值。

**`version_compare()` examples**

```php


<?php
if (version_compare(PHP_VERSION, '7.0.0') >= 0) {
    echo 'I am at least PHP version 7.0.0, my version: ' . PHP_VERSION . "\n";
}

if (version_compare(PHP_VERSION, '5.3.0') >= 0) {
    echo 'I am at least PHP version 5.3.0, my version: ' . PHP_VERSION . "\n";
}

if (version_compare(PHP_VERSION, '5.0.0', '>=')) {
    echo 'I am at least PHP version 5.0.0, my version: ' . PHP_VERSION . "\n";
}

if (version_compare(PHP_VERSION, '5.0.0', '<')) {
    echo 'I am still PHP 4, my version: ' . PHP_VERSION . "\n";
}
?>

    
```

## 注释

> `PHP_VERSION` 常量包含了当前 PHP 的版本。

> 注意，类似 5.3.0-dev 的预发行版本，被认为是低于它们的最终发行版本（就像 5.3.0）。

> 指定类似 `alpha`、`beta` 的版本字符串是大小写敏感的。 版本字符串的来源若不遵循 PHP 标准，可能需要在调用 `version_compare()` 之前先用 `strtolower()` 转成小写。

## 参见

`phpversion()` `php_uname()` `function_exists()`
