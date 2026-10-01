---
id: "zh-php-function-function-time-nanosleep"
language: "php"
lang: "zh"
category: "function"
name: "time_nanosleep"
title: "延缓执行若干秒和纳秒"
signature: "array|bool time_nanosleep(int $seconds, int $nanoseconds)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.time-nanosleep.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 延缓执行若干秒和纳秒

## 说明

```php
array|bool time_nanosleep(int $seconds, int $nanoseconds)
```

程序延缓执行指定数量的 `$seconds` 和 `$nanoseconds`。

## 参数

- **`$seconds`** — 必须是一个非负整数。
- **`$nanoseconds`** — 必须是一个小于1亿的非负整数。
  > 在 Windows 上，系统的睡眠时间可能会超过指定的纳秒数，具体取决于硬件。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

如果延迟被中断，一个关联数组会返回，内容为：

- `seconds`——延迟剩余未执行的秒数
- `nanoseconds`——延迟剩余未执行的纳秒数

## 示例

**`time_nanosleep()` 示例**

```php


<?php
// 小心！如果返回数组，将无法按照预期工作
if (time_nanosleep(0, 500000000)) {
    echo "Slept for half a second.\n";
}

// 这个更好：
if (time_nanosleep(0, 500000000) === true) {
    echo "Slept for half a second.\n";
}

// 这个最好：
$nano = time_nanosleep(2, 100000);

if ($nano === true) {
    echo "Slept for 2 seconds, 100 microseconds.\n";
} elseif ($nano === false) {
    echo "Sleeping failed.\n";
} elseif (is_array($nano)) {
    $seconds = $nano['seconds'];
    $nanoseconds = $nano['nanoseconds'];
    echo "Interrupted by a signal.\n";
    echo "Time remaining: $seconds seconds, $nanoseconds nanoseconds.";
}
?>

    
```

## 参见

`sleep()` `usleep()` `time_sleep_until()` `set_time_limit()`
