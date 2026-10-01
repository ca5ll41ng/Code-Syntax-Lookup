---
id: "zh-php-function-function-flock"
language: "php"
lang: "zh"
category: "function"
name: "flock"
title: "可移植的协同文件锁定"
signature: "bool flock(resource $stream, int $operation, int $would_block = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.flock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 可移植的协同文件锁定

## 说明

```php
bool flock(resource $stream, int $operation, int $would_block = null)
```

`flock()` 允许执行简单的读取/写入模型,该模型可以在任何平台（包括大部分 Unix 衍生产品，甚至是 Windows）上使用。

当调用 `fclose()` 或者对 `$stream` 垃圾收集时，锁会释放。

PHP 支持以协同且可移植的方式锁定完整文件（也就是说所有访问程序必须使用相同锁定方式, 否则将无法工作）。默认情况下，该函数将堵塞直到获得锁；这可以通过下面文档中 `LOCK_NB` 选项来控制。

## 参数

- **`$stream`** — 文件系统指针，是典型地由 `fopen()` 创建的 `resource`(资源)。
- **`$operation`** — `$operation` 可以是以下值之一： - `LOCK_SH`取得共享锁定（读取的程序）。 - `LOCK_EX` 取得独占锁定（写入的程序。 - `LOCK_UN` 释放锁定（无论共享或独占）。 — It is also possible to add `LOCK_NB` as a bitmask to one of the above operations, if `flock()` should not block during the locking attempt.
- **`$would_block`** — 如果锁将堵塞（EWOULDBLOCK 错误码情况下），第三个可选参数会设置为 1。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`flock()` 例子**

```php


<?php

$fp = fopen("/tmp/lock.txt", "r+");

if (flock($fp, LOCK_EX)) {  // 进行排它型锁定
    ftruncate($fp, 0);      // truncate file
    fwrite($fp, "Write something here\n");
    fflush($fp);            // flush output before releasing the lock
    flock($fp, LOCK_UN);    // 释放锁定
} else {
    echo "Couldn't get the lock!";
}

fclose($fp);

?>

    
```

**`flock()` 使用 `LOCK_NB` 选项**

```php


<?php
$fp = fopen('/tmp/lock.txt', 'r+');

/* Activate the LOCK_NB option on an LOCK_EX operation */
if(!flock($fp, LOCK_EX | LOCK_NB)) {
    echo 'Unable to obtain lock';
    exit(-1);
}

/* ... */

fclose($fp);
?>

    
```

## 注释

> 在 Windows 上，`flock()` 使用的是强制锁而不是协同锁。 Mandatory locking is also supported on Linux and System V based operating systems via the usual mechanism supported by the fcntl() system call: that is, if the file in question has the setgid permission bit set and the group execution bit cleared. On Linux, the file system will also need to be mounted with the mand option for this to work.

> 由于 `flock()` 需要一个文件指针， 因此可能不得不用一个特殊的锁定文件来保护打算通过写模式打开的文件的访问（在 `fopen()` 函数中加入 "w" 或 "w+"）。

> 只能用于 `fopen()` 返回本地文件的文件指针，或指向实现 `streamWrapper::stream_lock()` 方法的用户空间流的文件指针。

> 在后续代码中为 `$stream` 分配另一个值将释放锁。

> 在部分操作系统中 `flock()` 以进程级实现。当用多线程服务器 API 时，可能无法依靠 `flock()` 来保护文件，因为运行于同一服务器实例中其它并行线程的 PHP 脚本可以对该文件进行处理！
>
> 旧的文件系统（如 `FAT` 及其衍生）不支持 `flock()`，也因此在这些环境下总是返回 `false`。

> 在 Windows 上，如果锁进程再次打开文件，那么在解锁文件之前，无法通过第二个句柄访问文件。
