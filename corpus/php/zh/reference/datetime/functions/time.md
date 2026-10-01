---
id: "zh-php-function-function-time"
language: "php"
lang: "zh"
category: "function"
name: "time"
title: "返回当前的 Unix 时间戳"
signature: "int time()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.time.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前的 Unix 时间戳

## 说明

```php
int time()
```

返回自从 Unix 纪元（格林威治时间 1970 年 1 月 1 日 00:00:00）到当前时间的秒数。

> Unix 时间戳不包含任何有关本地时区的信息。建议使用 `DateTimeImmutable` 类来处理日期和时间信息， 以避免 Unix 时间戳带来的陷阱。

## 参数

此函数没有参数。

## 返回值

返回当前时间戳。

## 示例

**`time()` 示例**

```php


<?php
echo 'Now: '. time();

    
```

以上示例的输出类似于：

```text


Now: 1660338149

    
```

## 注释

> 在 `$_SERVER['REQUEST_TIME']` 中保存了发起该请求时刻的时间戳。

## 参见

`DateTimeImmutable` `date()` `microtime()`
