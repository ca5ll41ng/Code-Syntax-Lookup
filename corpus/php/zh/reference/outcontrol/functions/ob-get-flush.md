---
id: "zh-php-function-function-ob-get-flush"
language: "php"
lang: "zh"
category: "function"
name: "ob_get_flush"
title: "冲刷（发送）活动输出处理程序的返回值，返回活动输出缓冲区的内容并将其关闭"
signature: "string|false ob_get_flush()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-get-flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 冲刷（发送）活动输出处理程序的返回值，返回活动输出缓冲区的内容并将其关闭

## 说明

```php
string|false ob_get_flush()
```

该函数调用输出处理程序（使用 `PHP_OUTPUT_HANDLER_FINAL` flag），冲刷（发送）其返回值，返回活动输出缓冲区的内容并关闭活动输出缓冲区。

如果没有以 `PHP_OUTPUT_HANDLER_REMOVABLE` flag 启动的活动输出缓冲区，`ob_get_flush()` 将失败。

`ob_get_flush()` 将冲刷（发送）输出处理程序的返回值，即使活动输出缓冲区是在没有 `PHP_OUTPUT_HANDLER_FLUSHABLE` flag 的情况下启动的。

## 参数

此函数没有参数。

## 返回值

成功时返回活动输出缓冲区的内容，失败时返回 `false`。

## 错误／异常

如果函数失败生成 `E_NOTICE`。

## 示例

**`ob_get_flush()` 示例**

```php


<?php
// 使用 output_buffering=On
print_r(ob_list_handlers());

// 保存缓冲区到文件
$buffer = ob_get_flush();
file_put_contents('buffer.txt', $buffer);

print_r(ob_list_handlers());
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => default output handler
)
Array
(
)

    
```

## 参见

`ob_start()` `ob_get_contents()` `ob_flush()` `ob_end_flush()` `ob_get_clean()`
