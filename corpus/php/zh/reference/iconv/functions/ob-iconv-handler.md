---
id: "zh-php-function-function-ob-iconv-handler"
language: "php"
lang: "zh"
category: "function"
name: "ob_iconv_handler"
title: "以输出缓冲处理程序转换字符编码"
signature: "string ob_iconv_handler(string $contents, int $status)"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.ob-iconv-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以输出缓冲处理程序转换字符编码

## 说明

```php
string ob_iconv_handler(string $contents, int $status)
```

将字符编码从 `$internal_encoding` 转换到 `$output_encoding`。

`$internal_encoding` 和 `$output_encoding` 应当在 php.ini 文件或 `iconv_set_encoding()` 中定义。

## 参数

关于处理程序参数的信息，参见 `ob_start()`。

## 返回值

关于处理程序返回值的信息，参见 `ob_start()`。

## 示例

**`ob_iconv_handler()` 例子：**

```php


<?php
iconv_set_encoding("internal_encoding", "UTF-8");
iconv_set_encoding("output_encoding", "ISO-8859-1");
ob_start("ob_iconv_handler"); // 开始输出缓冲
?>

    
```

## 参见

`iconv_get_encoding()` `iconv_set_encoding()` 输出控制函数
