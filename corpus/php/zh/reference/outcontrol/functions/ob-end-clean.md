---
id: "zh-php-function-function-ob-end-clean"
language: "php"
lang: "zh"
category: "function"
name: "ob_end_clean"
title: "清空（擦除）活动缓冲区的内容并关闭它"
signature: "bool ob_end_clean()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-end-clean.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清空（擦除）活动缓冲区的内容并关闭它

## 说明

```php
bool ob_end_clean()
```

该函数调用输出处理程序（使用 `PHP_OUTPUT_HANDLER_CLEAN` 和 `PHP_OUTPUT_HANDLER_FINAL` flag），丢弃它的返回值，丢弃活动输出缓冲区的内容并关闭活动输出缓冲区。

如果没有以 `PHP_OUTPUT_HANDLER_REMOVABLE` flag 启动的活动输出缓冲区，`ob_end_clean()` 将失败。

`ob_end_clean()` 将丢弃活动输出缓冲区的内容，即使是在没有 `PHP_OUTPUT_HANDLER_CLEANABLE` flag 的情况下启动的。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果函数失败了，将生成 `E_NOTICE` 异常。

## 示例

下面的示例展示了去除活动输出缓冲内容的简单方法：

**`ob_end_clean()` 示例**

```php


<?php
ob_start();
echo 'Text that won\'t get displayed.';
ob_end_clean();
?>

    
```

## 参见

`ob_start()` `ob_get_contents()` `ob_clean()` `ob_get_clean()` `ob_end_flush()`
