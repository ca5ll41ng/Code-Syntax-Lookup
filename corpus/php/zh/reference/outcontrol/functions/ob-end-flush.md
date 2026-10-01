---
id: "zh-php-function-function-ob-end-flush"
language: "php"
lang: "zh"
category: "function"
name: "ob_end_flush"
title: "冲刷（发送）活动输出处理程序的返回值，并关闭活动输出缓冲区"
signature: "bool ob_end_flush()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-end-flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 冲刷（发送）活动输出处理程序的返回值，并关闭活动输出缓冲区

## 说明

```php
bool ob_end_flush()
```

该函数调用输出处理程序（使用 `PHP_OUTPUT_HANDLER_FINAL` flag），冲刷（发送）其返回值，丢弃活动输出缓冲区的内容并关闭活动输出缓冲区。

如果没有以 `PHP_OUTPUT_HANDLER_REMOVABLE` flag 启动活动输出缓冲区，`ob_end_flush()` 将失败。

`ob_end_flush()` 将冲刷（发送）输出处理程序的返回值，即使活动输出缓冲区是在没有 `PHP_OUTPUT_HANDLER_FLUSHABLE` flag 的情况下启动的。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果函数失败将生成 `E_NOTICE` 异常。

## 示例

**`ob_end_flush()` 示例**

下面的例子给出了一种送出缓冲区内容并关闭所有输出缓冲区的容易的方法：

```php


<?php
  while (@ob_end_flush());
?>

    
```

## 参见

`ob_start()` `ob_get_contents()` `ob_flush()` `ob_get_flush()` `ob_end_clean()`
