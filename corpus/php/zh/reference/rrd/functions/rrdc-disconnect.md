---
id: "zh-php-function-function-rrdc-disconnect"
language: "php"
lang: "zh"
category: "function"
name: "rrdc_disconnect"
title: "关闭所有未完成的 rrd 缓存守护进程连接"
signature: "void rrdc_disconnect()"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrdc-disconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭所有未完成的 rrd 缓存守护进程连接

## 说明

```php
void rrdc_disconnect()
```

关闭所有未完成的 rrd 缓存守护进程的连接。

此函数会在 PHP 进程终止时自动调用。调用时机取决于使用的 SAPI。例如，会在命令行脚本结束时自动调用。

用户可以自己决定是否在每次请求结束时调用此函数。

## 参数

此函数没有参数。

## 返回值

没有返回值。
