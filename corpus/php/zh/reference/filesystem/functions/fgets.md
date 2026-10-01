---
id: "zh-php-function-function-fgets"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "fgets"
title: "从文件指针中读取一行"
signature: "string|false fgets(resource $stream, int|null $length = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fgets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件指针中读取一行

## 说明

```php
string|false fgets(resource $stream, int|null $length = null)
```

从文件指针中读取一行。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。
- **`$length`** — 从 `$handle` 指向的文件中读取一行并返回长度最多为 `$length` - 1 字节的字符串。碰到换行符（包括在返回值中）、EOF 或者已经读取了 length - 1 字节后停止（看先碰到那一种情况）。如果没有指定 `$length`，则默认为 1K，或者说 1024 字节。

## 返回值

从指针 `$stream` 指向的文件中读取了 `$length` - 1 字节后返回字符串。 如果文件指针中没有更多的数据了则返回 `false`。

错误发生时返回 `false`。

## 示例

**逐行读取文件**

```php


<?php

$fp = @fopen("/tmp/inputfile.txt", "r");

if ($fp) {
    while (($buffer = fgets($fp, 4096)) !== false) {
        echo $buffer, PHP_EOL;
    }

    if (!feof($fp)) {
        echo "Error: unexpected fgets() fail\n";
    }

    fclose($fp);
}

?>

    
```

## 注释

> 在 PHP 8.1.0 之前， 可以启用 auto_detect_line_endings 运行时配置选项，帮助 PHP 正确识别读取 Macintosh 系统创建的文件时的行结束符。 此选项自 PHP 8.1.0 起弃用。如有必要，请改为手动处理 `"\r"` 换行符。

> 习惯了 C 语言中 `fgets()` 语法的人应该注意到 `EOF` 是怎样被返回的。

## 参见

`fgetss()` `fread()` `fgetc()` `stream_get_line()` `fopen()` `popen()` `fsockopen()` `stream_set_timeout()`
