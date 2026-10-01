---
id: "zh-php-function-function-ob-clean"
language: "php"
lang: "zh"
category: "function"
name: "ob_clean"
title: "清空（擦掉）活动输出缓冲区的内容"
signature: "bool ob_clean()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-clean.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清空（擦掉）活动输出缓冲区的内容

## 说明

```php
bool ob_clean()
```

此函数调用输出处理程序（使用 `PHP_OUTPUT_HANDLER_CLEAN` flag），丢弃返回值并清除（擦除）活动输出区的内容。

此函数不会像 `ob_end_clean()` 或 `ob_get_clean()` 那样关闭输出缓冲区。

如果没有以 `PHP_OUTPUT_HANDLER_CLEANABLE` flag 启动的活动输出缓冲区，`ob_clean()` 将失败。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果函数失败会生成 `E_NOTICE`。

## 参见

`ob_start()` `ob_get_contents()` `ob_end_clean()` `ob_get_clean()` `ob_flush()`
