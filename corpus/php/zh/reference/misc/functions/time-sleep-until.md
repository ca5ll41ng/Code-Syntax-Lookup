---
id: "zh-php-function-function-time-sleep-until"
language: "php"
lang: "zh"
category: "function"
name: "time_sleep_until"
title: "使脚本睡眠到指定的时间为止"
signature: "bool time_sleep_until(float $timestamp)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.time-sleep-until.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使脚本睡眠到指定的时间为止

## 说明

```php
bool time_sleep_until(float $timestamp)
```

使脚本睡眠到指定的 `$timestamp`。

## 参数

- **`$timestamp`** — 将脚本唤醒的时间戳。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果设定的 `$timestamp` 为过去的时间，脚本将会产生 `E_WARNING` 级别的错误。

## 示例

**`time_sleep_until()` 示例**

```php


<?php

// 返回 false 并生成警告
var_dump(time_sleep_until(time()-1));

// 只能在速度很快的电脑上运行，最多休眠 0.2 秒
var_dump(time_sleep_until(microtime(true)+0.2));

?>

    
```

## 注释

> 所有的信号会被延迟至脚本唤醒以后。

## 参见

`sleep()` `usleep()` `time_nanosleep()` `set_time_limit()`
