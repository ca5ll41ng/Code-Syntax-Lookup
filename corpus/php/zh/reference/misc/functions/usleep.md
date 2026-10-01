---
id: "zh-php-function-function-usleep"
language: "php"
lang: "zh"
category: "function"
name: "usleep"
title: "以指定的微秒数延迟执行"
signature: "void usleep(int $microseconds)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.usleep.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以指定的微秒数延迟执行

## 说明

```php
void usleep(int $microseconds)
```

以指定的微秒数延缓程序的执行。

## 参数

- **`$microseconds`** — 暂停的时间以微秒计。1微秒（micro second）是百万分之一秒。
  > 操作系统不支持大于 `1000000` 的值（即休眠不能超过 1 秒）。使用 `sleep()` 代替。


  > 任何系统活动或处理调用所花费的时间或系统计时器的粒度都可能会稍微延长睡眠时间（即可能会长于 `$microseconds`）。



## 返回值

没有返回值。

## 示例

**`usleep()`例子**

```php


<?php

// Current time
echo (new DateTime('now'))->format('H:i:s.v'), "\n";

// wait for 2 milliseconds
usleep(2000);

// back!
echo (new DateTime('now'))->format('H:i:s.v'), "\n";

// wait for 30 milliseconds
usleep(30000);

// back again!
echo (new DateTime('now'))->format('H:i:s.v'), "\n";

?>

    
```

以上示例会输出：

```text


11:13:28.005
11:13:28.007
11:13:28.037

    
```

## 参见

`sleep()` `time_nanosleep()` `time_sleep_until()` `set_time_limit()`
