---
id: "zh-php-function-function-ob-get-level"
language: "php"
lang: "zh"
category: "function"
name: "ob_get_level"
title: "返回输出缓冲机制的嵌套级别"
signature: "int ob_get_level()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-get-level.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回输出缓冲机制的嵌套级别

## 说明

```php
int ob_get_level()
```

返回输出缓冲机制的嵌套级别。

## 参数

此函数没有参数。

## 返回值

返回嵌套的输出缓冲处理程序的级别；或者是，如果输出缓冲区不起作用，返回零。

> `ob_get_level()` 和 `ob_get_status()` 之间相同级别的值相差 1。对于 `ob_get_level()`，第一级为 `1`。而对于 `ob_get_status()`，第一级为 `0`。

## 参见

`ob_start()` `ob_get_status()` `ob_get_contents()`
