---
id: "zh-php-function-function-ob-flush"
language: "php"
lang: "zh"
category: "function"
name: "ob_flush"
title: "冲刷（发送）活动输出处理程序的返回值"
signature: "bool ob_flush()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 冲刷（发送）活动输出处理程序的返回值

## 说明

```php
bool ob_flush()
```

该函数调用输出处理程序（使用 `PHP_OUTPUT_HANDLER_FLUSH` flag），冲刷（发送）其返回值并丢弃活动输出缓冲区的内容。

该函数不会像 `ob_end_flush()` 或 `ob_get_flush()` 那样关闭活动输出缓冲区。

如果没有以 `PHP_OUTPUT_HANDLER_FLUSHABLE` flag 启动的活动输出缓冲区，`ob_flush()` 将失败。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果函数失败会生成 `E_NOTICE`。

## 参见

`ob_start()` `ob_get_contents()` `ob_end_flush()` `ob_get_flush()` `ob_clean()`
