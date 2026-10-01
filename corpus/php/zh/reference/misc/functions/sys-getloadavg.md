---
id: "zh-php-function-function-sys-getloadavg"
language: "php"
lang: "zh"
category: "function"
name: "sys_getloadavg"
title: "获取系统的负载（load average）"
signature: "array|false sys_getloadavg()"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.sys-getloadavg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取系统的负载（load average）

## 说明

```php
array|false sys_getloadavg()
```

返回三个系统负载（系统运行队列中的进程数）的样本数据，分别是 1 分钟、5 分钟和 15 分钟之前。失败时返回 `false`。

## 参数

此函数没有参数。

## 返回值

返回一个包含 1 分钟、5 分钟和 15 分钟之前采样数据的 `array`。

## 示例

**`sys_getloadavg()` 示例**

```php


<?php
$load = sys_getloadavg();
if ($load[0] > 80) {
    header('HTTP/1.1 503 Too busy, try again later');
    die('Server too busy. Please try again later.');
}
?>

    
```

## 注释

> 此函数未在 Windows 平台下实现。
