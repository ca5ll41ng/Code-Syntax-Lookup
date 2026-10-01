---
id: "zh-php-function-function-session-gc"
language: "php"
lang: "zh"
category: "function"
name: "session_gc"
title: "执行会话数据垃圾回收"
signature: "int|false session_gc()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-gc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行会话数据垃圾回收

## 说明

```php
int|false session_gc()
```

默认情况下，PHP 使用 session.gc_probability 在每次请求时以概率方式运行会话垃圾回收器。这种方法存在一些局限性：

 低流量站点的会话数据可能无法在预期时间内被删除。 高流量站点的垃圾回收器可能运行过于频繁，执行不必要的额外工作。 垃圾回收在用户请求时执行，用户可能会感受到延迟。 

对于生产系统，建议通过将 session.gc_probability 设置为 `0` 来禁用基于概率的垃圾回收，并定期显式触发垃圾回收器，例如在类 UNIX 系统上使用 "cron" 运行调用 `session_gc()` 的脚本。

> 从命令行 PHP 脚本调用 `session_gc()` 时， session.save_path 必须设置为与 Web 请求相同的值，并且脚本必须对会话文件具有访问和删除权限。这可能受到脚本运行用户的影响， 以及容器或沙箱功能（如 systemd 的 `PrivateTmp=` 选项）的影响。

## 参数

此函数没有参数。

## 返回值

`session_gc()` 成功时返回删除的会话条目数， 或者在失败时返回 `false`。

> 旧的会话保存处理程序不返回删除的会话条目数，而只返回成功/失败标志。在这种情况下， 无论实际删除了多少会话条目，都会返回 `1`。

## 示例

**用于 cron 等任务管理器的 `session_gc()` 示例**

```php


<?php
// Note: This script should be executed by the same user of web server process.

// Need active session to initialize session data storage access.
session_start();

// Executes GC immediately
session_gc();

// Clean up session ID created by session_start()
session_destroy();
?>

   
```

**用于用户可访问脚本的 `session_gc()` 示例**

```php


<?php
// Note: session_gc() is recommended to be used by a task manager script, but
// it may be used as follows.

// Used for last GC time check
$gc_time = '/tmp/php_session_last_gc';
$gc_period = 1800;

session_start();
// Execute GC only when GC period elapsed.
// i.e. Calling session_gc() every request is waste of resources.
if (file_exists($gc_time)) {
    if (filemtime($gc_time) < time() - $gc_period) {
        session_gc();
        touch($gc_time);
    }
} else {
    touch($gc_time);
}
?>

   
```

## 参见

 `session_start()` `session_destroy()` session.gc_probability
