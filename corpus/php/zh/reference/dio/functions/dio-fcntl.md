---
id: "zh-php-function-function-dio-fcntl"
language: "php"
lang: "zh"
category: "function"
name: "dio_fcntl"
title: "在 fd 上执行 C 标准库的 fcntl"
signature: "mixed dio_fcntl(resource $fd, int $cmd, [mixed $args = ...])"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-fcntl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 fd 上执行 C 标准库的 fcntl

## 说明

```php
mixed dio_fcntl(resource $fd, int $cmd, [mixed $args = ...])
```

`dio_fcntl()` 函数在 `$fd` 文件描述符上执行 `$cmd` 指定的操作。一些命令需要提供额外的 `$args` 参数。

## 参数

- **`$fd`** — `dio_open()` 返回的文件描述符。
- **`$cmd`** — 可以是以下操作： - `F_SETLK` - 设置或清除锁。如果其他人持有锁 `dio_fcntl()` 返回 -1。 - `F_SETLKW` - 和 `F_SETLK` 相似，但如果其他人持有锁，`dio_fcntl()` 等待锁释放。 - `F_GETLK` - 如果其他人阻止锁定，`dio_fcntl()` 返回关联数组（如下所述）。如果没有阻塞，键“type”将设置为 `F_UNLCK`。 - `F_DUPFD` - 查找大于或等于 `$args` 的最小可用文件描述符，并将其返回。 - `F_SETFL` - 设置 `$args` 指定的文件描述符标志。可以是 `O_APPEND`、`O_NONBLOCK` 或 `O_ASYNC`。要使用 `O_ASYNC` 需要依赖 PCNTL 扩展。
- **`$args`** — 当 `$cmd` 是 `F_SETLK` 或 `F_SETLLW` 时，`$args` 是包含以下键的关联数组： - `start` - 开始锁定的偏移 - `length` - 锁定区域大小。0 代表文件结尾 - `whence` - l_start 的相对位置可以是：`SEEK_SET`、`SEEK_END` 和 `SEEK_CUR` - `type` - 锁类型：可以是 `F_RDLCK` （读锁），`F_WRLCK`（写锁）或 `F_UNLCK` （解锁）。

## 返回值

返回 C 调用的结果。

## 示例

**设置并清除锁**

```php


<?php

$fd = dio_open('/dev/ttyS0', O_RDWR);

if (dio_fcntl($fd, F_SETLK, Array("type"=>F_WRLCK)) == -1) {
   // the file descriptor appears locked
   echo "The lock can not be cleared. It is held by someone else.";
} else {
   echo "Lock successfully set/cleared";
}

dio_close($fd);
?>

    
```

## 注释

> 此函数未在 Windows 平台下实现。
