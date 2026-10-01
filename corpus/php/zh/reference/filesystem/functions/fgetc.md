---
id: "zh-php-function-function-fgetc"
language: "php"
lang: "zh"
category: "function"
name: "fgetc"
title: "从文件指针中读取字符"
signature: "string|false fgetc(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fgetc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件指针中读取字符

## 说明

```php
string|false fgetc(resource $stream)
```

从文件句柄中获取一个字符。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 返回值

返回一个包含有一个字符的字符串，该字符从 `$stream` 指向的文件中得到。 碰到 EOF 则返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 示例

**一个 `fgetc()` 例子**

```php


<?php
$fp = fopen('somefile.txt', 'r');
if (!$fp) {
    echo 'Could not open file somefile.txt';
}
while (false !== ($char = fgetc($fp))) {
    echo "$char\n";
}
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`fread()` `fopen()` `popen()` `fsockopen()` `fgets()`
