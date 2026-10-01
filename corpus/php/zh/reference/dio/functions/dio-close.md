---
id: "zh-php-function-function-dio-close"
language: "php"
lang: "zh"
category: "function"
name: "dio_close"
title: "通过 fd 关闭文件描述符"
signature: "void dio_close(resource $fd)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过 fd 关闭文件描述符

## 说明

```php
void dio_close(resource $fd)
```

`dio_close()` 函数关闭 `$fd` 文件描述符。

## 参数

- **`$fd`** — `dio_open()` 返回的文件描述符。

## 返回值

没有返回值。

## 示例

**关闭文件描述符**

```php


<?php
$fd = dio_open('/dev/ttyS0', O_RDWR);

dio_close($fd);
?>

    
```

## 参见

`dio_open()`
