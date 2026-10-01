---
id: "zh-php-function-function-ob-get-length"
language: "php"
lang: "zh"
category: "function"
name: "ob_get_length"
title: "返回输出缓冲区内容的长度"
signature: "int|false ob_get_length()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-get-length.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回输出缓冲区内容的长度

## 说明

```php
int|false ob_get_length()
```

将返回输出缓冲区内容的长度，单位为字节。

## 参数

此函数没有参数。

## 返回值

返回输出缓冲区内容的长度，单位为字节；如果缓冲区无效，则返回 `false`。

## 示例

**`ob_get_length()` 的简单示例**

```php


<?php

ob_start();

echo "Hello ";

$len1 = ob_get_length();

echo "World";

$len2 = ob_get_length();

ob_end_clean();

echo $len1 . ", " . $len2;
?>

    
```

以上示例会输出：

```text


6, 11

    
```

## 参见

`ob_start()` `ob_get_contents()`
