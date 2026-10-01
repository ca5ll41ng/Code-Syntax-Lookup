---
id: "zh-php-function-function-ob-get-clean"
language: "php"
lang: "zh"
category: "function"
name: "ob_get_clean"
title: "获取活动缓冲区的内容并将其关闭"
signature: "string|false ob_get_clean()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-get-clean.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取活动缓冲区的内容并将其关闭

## 说明

```php
string|false ob_get_clean()
```

该函数调用输出处理程序（使用 `PHP_OUTPUT_HANDLER_CLEAN` 和 `PHP_OUTPUT_HANDLER_FINAL` flag），丢弃其返回值，返回活动输出缓冲区的内容并关闭活动输出缓冲区。

如果没有以 `PHP_OUTPUT_HANDLER_REMOVABLE` flag 启动的活动输出缓冲区，`ob_get_clean()` 将失败。

`ob_get_clean()` 将丢弃活动输出缓冲区的内容，即使是在没有 `PHP_OUTPUT_HANDLER_CLEANABLE` flag 的情况下启动的。

## 返回值

成功时返回活动输出缓冲区的内容，失败时返回 `false`。

> 如果没有活动输出缓冲区，`ob_get_clean()` 将返回 false，但不会生成 `E_NOTICE`。

## 错误／异常

如果函数失败生成 `E_NOTICE`。

## 示例

**`ob_get_clean()` 的简单示例**

```php


<?php

ob_start();

echo "Hello World";

$out = ob_get_clean();
$out = strtolower($out);

var_dump($out);
?>

    
```

以上示例会输出：

```text



string(11) "hello world"


    
```

## 参见

`ob_start()` `ob_get_contents()` `ob_clean()` `ob_end_clean()` `ob_get_flush()`
