---
id: "zh-php-function-mysqli-poll"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::poll"
aliases: ["mysqli_poll"]
title: "轮询连接"
signature: "public static int|false mysqli::poll(array|null $read, array|null $error, array $reject, int $seconds, int $microseconds = 0)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 轮询连接

## 说明

面向对象风格

```php
public static int|false mysqli::poll(array|null $read, array|null $error, array $reject, int $seconds, int $microseconds = 0)
```

过程化风格

```php
int|false mysqli_poll(array|null $read, array|null $error, array $reject, int $seconds, int $microseconds = 0)
```

轮询连接。此方法是 static 的。

> 仅可用于 mysqlnd。

## 参数

- **`$read`** — 要检测是否存在可以读取的结果集的连接的数组。
- **`$error`** — 发生错误的，例如：SQL 语句执行失败或者已经断开的 连接的数组。
- **`$reject`** — 没有可以读取的结果集的连接 的数组。
- **`$seconds`** — 秒为单位的最大等待时间，不可以为负数。
- **`$microseconds`** — 微秒为单位的最大等待时间，不可以为负数。

## 返回值

成功执行则返回存在可以读取结果集的连接数量， 否则 `false`。

## 错误／异常

当没有传递 `$read` 和 `$error` 参数时抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 现在，当没有传递 `$read` 和 `$error` 参数时抛出 `ValueError` 异常。 |

## 示例

**`mysqli_poll()` 示例**

```php


<?php
$link1 = mysqli_connect();
$link1->query("SELECT 'test'", MYSQLI_ASYNC);
$all_links = array($link1);
$processed = 0;
do {
    $links = $errors = $reject = array();
    foreach ($all_links as $link) {
        $links[] = $errors[] = $reject[] = $link;
    }
    if (!mysqli_poll($links, $errors, $reject, 1)) {
        continue;
    }
    foreach ($links as $link) {
        if ($result = $link->reap_async_query()) {
            print_r($result->fetch_row());
            if (is_object($result))
                mysqli_free_result($result);
        } else die(sprintf("MySQLi Error: %s", mysqli_error($link)));
        $processed++;
    }
} while ($processed < count($all_links));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => test
)

    
```

## 参见

`mysqli_query()` `mysqli_reap_async_query()`
