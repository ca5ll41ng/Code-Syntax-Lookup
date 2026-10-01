---
id: "zh-php-guide-mbstring-http"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.http"
title: "HTTP 输入和输出"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.http.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# HTTP 输入和输出

HTTP 输入/输出字符编码转换同样也适用于二进制数据。 如果 HTTP 输入/输出用到了二进制数据，用户应当控制字符的编码转换。

> 如果 HTML 表单的 `enctype` 属性设置为 `multipart/form-data`，并且 php.ini 里的 `mbstring.encoding_translation` 设置为 On， POST 的变量以及上传文件的名称也将会被转换到内部字符编码。 不过，转换不会应用于查询（query）的键。

- HTTP 输入 在 PHP 脚本里无法控制 HTTP 输入字符的转换。 要禁用 HTTP 输入字符的转换，必须要在 php.ini 里设置。 **在 php.ini 中禁用 HTTP 输入转换** ```php.ini ;; 禁用 HTTP 输入转换 mbstring.http_input = pass ;;禁用 HTTP 输入转换 mbstring.encoding_translation = Off ``` 当 PHP 以 Apache 模块运行。这些设置还可以通过  内每个虚拟主机（Virtual Host）指令或每个目录下的  来覆盖（override）。 详情参见配置这一节，以及 Apache 手册。
- HTTP 输出 输出字符编码转换的使用有几种方式。 一种是使用 php.ini，另一种是使用 `ob_start()`，以 `mb_output_handler()` 作为 `ob_start` 的回调函数。

**php.ini 设置例子**

```text


;; 为所有 PHP 页面启用输出字符编码的转换

;; 启用输出缓冲
output_buffering    = On

;; 设置 mb_output_handler 来进行输出的转换
output_handler      = mb_output_handler

   
```

**脚本例子**

```php


<?php

// 仅为此页面启用输出字符编码的转换

// 设置 HTTP 输出字符编码为 SJIS
mb_http_output('SJIS');

// 开始缓冲并指定 "mb_output_handler" 为回调函数
ob_start('mb_output_handler');

?>

   
```
