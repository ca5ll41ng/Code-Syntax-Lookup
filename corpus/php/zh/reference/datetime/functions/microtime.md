---
id: "zh-php-function-function-microtime"
language: "php"
lang: "zh"
category: "function"
name: "microtime"
title: "返回当前 Unix 时间戳和微秒数"
signature: "string|float microtime(bool $as_float = false)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.microtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前 Unix 时间戳和微秒数

## 说明

```php
string|float microtime(bool $as_float = false)
```

`microtime()` 返回当前 Unix 时间戳以及微秒数。本函数仅在支持 gettimeofday() 系统调用的操作系统下可用。

对于性能测量，建议使用 `hrtime()`。

## 参数

- **`$as_float`** — 如果使用并设置为 `true`，`microtime()` 将返回浮点数而不是字符串，具体查看下面的返回值相关描述。

## 返回值

默认情况下，`microtime()` 返回“msec sec”形式的 `string`，其中 `sec` 是自 Unix 纪元（格林威治标准时间 1970 年 1 月 1 日 0:00:00）以来的秒数，`msec` 是自 `sec` 以来经过的微秒，表示为秒数的小数部分。

如果 `$as_float` 设置为 `true`，然后 `microtime()` 返回 `float`，表示自 Unix 纪元以来的当前时间，以秒为单位，精确到最接近的微秒。

## 示例

**计时脚本执行时间**

```php


<?php
$time_start = microtime(true);

// Sleep 一会
usleep(10_000);

$time_end = microtime(true);
$time = $time_end - $time_start;

print "Did nothing in $time seconds\n";
?>

    
```

**`microtime()` 和 `REQUEST_TIME_FLOAT`**

```php


<?php
// 随机 sleep 时间
usleep(random_int(10_000, 1_000_000));

// 在 $_SERVER 超全局数组中 REQUEST_TIME_FLOAT 是有效的。
// 包含请求开始的时间戳，精度为微秒。
$time = microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"];

echo "Did nothing in $time seconds\n";

    
```

## 参见

`time()` `hrtime()`
