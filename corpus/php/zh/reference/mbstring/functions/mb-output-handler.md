---
id: "zh-php-function-function-mb-output-handler"
language: "php"
lang: "zh"
category: "function"
name: "mb_output_handler"
title: "在输出缓冲中转换字符编码的回调函数"
signature: "string mb_output_handler(string $string, int $status)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-output-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在输出缓冲中转换字符编码的回调函数

## 说明

```php
string mb_output_handler(string $string, int $status)
```

`mb_output_handler()` 是一个 `ob_start()` 回调函数。 `mb_output_handler()` 将输出缓冲中的字符从内部字符编码转换为 HTTP 输出的字符编码。

## 参数

- **`$string`** — 输出缓冲的内容。
- **`$status`** — 输出缓冲的状态。

## 返回值

转换后的 `string`。

## 示例

**`mb_output_handler()` 示例**

```php


<?php
mb_http_output("UTF-8");
ob_start("mb_output_handler");
?>

    
```

## 注释

> 如果你想要输出二进制数据，比如图片，必须在任何二进制数据发送到客户端之前使用 `header()` 来设置 Content-Type: 头。（例如 header("Content-Type: image/png")）。 如果 Content-Type: 头已发送，输出字符编码的转换将不会执行。
>
> 注意，如果发送了 'Content-Type: text/*'，则内容被认为是文本，将发生转换。

## 参见

`ob_start()`
