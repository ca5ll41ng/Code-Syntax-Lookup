---
id: "zh-php-function-function-stream-get-line"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "stream_get_line"
title: "从资源流里读取一行直到给定的定界符"
signature: "string|false stream_get_line(resource $stream, int $length, string $ending = \"\")"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-get-line.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从资源流里读取一行直到给定的定界符

## 说明

```php
string|false stream_get_line(resource $stream, int $length, string $ending = "")
```

从给定的资源流里读取一行。

当读取到 `$length` 个字节数就结束，或者当在读取的非空字符串中发现 `$ending` （*不*包含到返回值里）也结束，又或者遇到了 EOF 也结束（总之以上条件中哪个先出现就以哪个为准）。

这个函数与 `fgets()` 几乎是相同的，唯一的区别是在这个函数里面允许指定行尾的定界符，而不是使用标准的 \n， \r 还有 \r\n ，并且返回值中*不*包含定界符。（翻译注：也可以把 \n 等作为定界符传入 `$ending` ）

## 参数

- **`$stream`** — 一个有效的文件句柄。
- **`$length`** — 需要从句柄中读取的最大字节数。不支持负值。 `0` 表示默认的套接字块大小（socket chunk size），即 `8192` 字节。
- **`$ending`** — 可选参数，字符串定界符。

## 返回值

返回一个字符串，该字符串的内容根据 `$length` 字节数从 `$stream` 里读取， 或者在失败时返回 `false`。

## 参见

 `fread()` `fgets()` `fgetc()`
