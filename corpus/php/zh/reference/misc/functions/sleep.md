---
id: "zh-php-function-function-sleep"
language: "php"
lang: "zh"
category: "function"
name: "sleep"
title: "延缓执行"
signature: "int sleep(int $seconds)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.sleep.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 延缓执行

## 说明

```php
int sleep(int $seconds)
```

程序延迟执行指定的 `$seconds` 的秒数。

> 为了让程序执行延迟几分之一秒，应使用 `usleep()`，因为 `sleep()` 需要 `integer`。例如 sleep(0.25) 会使程序暂停 `0` 秒。

## 参数

- **`$seconds`** — 暂停的秒数（必须大于或等于 `0`）。

## 返回值

成功时返回 0。

如果函数的调用被一个信号中止，`sleep()` 会返回一个非零的值。在 Windows 上，该值总是 `192`（即 Windows API 常量 `WAIT_IO_COMPLETION` 的值）。其他平台上，该返回值是剩余未 sleep 的秒数。

## 错误／异常

如果指定的 `$seconds` 是负数，该函数会抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数在负数 `$seconds` 时抛出 `ValueError`，之前会引发 `E_WARNING` 且函数返回 `false`。 |

## 示例

**`sleep()` 示例**

```php


<?php

// 当前时间
echo date('h:i:s') . "\n";

// 睡眠 10 秒
sleep(10);

// 醒来！
echo date('h:i:s') . "\n";

?>

    
```

该例子会在休眠10秒后输出。

```text


05:31:23
05:31:33

    
```

## 参见

`usleep()` `time_nanosleep()` `time_sleep_until()` `set_time_limit()`
