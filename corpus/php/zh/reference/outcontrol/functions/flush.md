---
id: "zh-php-function-function-flush"
language: "php"
lang: "zh"
category: "function"
name: "flush"
title: "冲刷系统输出缓冲区"
signature: "void flush()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 冲刷系统输出缓冲区

## 说明

```php
void flush()
```

冲刷 PHP 的系统写入缓冲区以及 PHP 使用的后端（CGI、Web 服务器）。在命令行环境中，`flush()` 将仅尝试冲刷缓冲区的内容，而在 Web 上下文中，将冲刷 header 和缓冲区的内容。

> `flush()` 可能无法重写 Web 服务器的缓冲方案，并且它对浏览器中的任何客户端缓冲没有影响。

> 此函数对用户级输出处理程序（例如由 `ob_start()` 或 `output_add_rewrite_var()` 启动的处理程序）没有任何影响。

> `flush()` 会干扰在 Web 上下文中设置和发送 header 的输出处理程序（例如 `ob_gzhandler()`），因为它会在这些处理程序之前发送 header。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在在 FastCGI 中，可以成功冲刷没有主体的 header。 |

## 参见

`ob_flush()` `ob_clean()` `ob_end_flush()` `ob_end_clean()`
