---
id: "zh-php-function-function-stream-get-contents"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"source"}]
name: "stream_get_contents"
title: "读取资源流到一个字符串"
signature: "string|false stream_get_contents(resource $stream, int|null $length = null, int $offset = -1)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-get-contents.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取资源流到一个字符串

## 说明

```php
string|false stream_get_contents(resource $stream, int|null $length = null, int $offset = -1)
```

与 `file_get_contents()` 一样，但是 `stream_get_contents()` 是对一个已经打开的资源流进行操作，并将其内容写入一个字符串返回。 返回的内容取决于 `$length` 字节长度和 `$offset` 指定的起始位置。

## 参数

- **`$stream` (`resource`)** — 一个资源流（例如 `fopen()` 操作之后返回的结果）
- **`$length` (`int`)** — 需要读取的最大的字节数。默认为 `null`（读取全部的缓冲数据）。
- **`$offset` (`int`)** — 在读取数据之前先查找指定的偏移量。如果这个数字是负数，就不进行查找，直接从当前位置开始读取。

## 返回值

返回一个字符串 或者在失败时返回 `false`.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$length` 可以为 null。 |

## 示例

**`stream_get_contents()` 例子**

```php


<?php

if ($stream = fopen('http://www.example.com', 'r')) {
    // 打印从开始的位置偏移 10 个字节后页面的所有内容
    echo stream_get_contents($stream, -1, 10);

    fclose($stream);
}


if ($stream = fopen('http://www.example.net', 'r')) {
    // 打印前 5 个字节
    echo stream_get_contents($stream, 5);

    fclose($stream);
}

?>

    
```

## 注释

> 此函数可安全用于二进制对象。

> 当指定一个非 `null` 的 `$length` 值时，即使实际内容要短得多，该函数也会立即分配一个内部缓冲区，其大小为指定的长度。

## 参见

`fgets()` `fread()` `fpassthru()`
