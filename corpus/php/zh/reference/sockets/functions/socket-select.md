---
id: "zh-php-function-function-socket-select"
language: "php"
lang: "zh"
category: "function"
name: "socket_select"
title: "从给定套接字数组运行带指定超时时间的 select() 系统调用"
signature: "int|false socket_select(array|null $read, array|null $write, array|null $except, int|null $seconds, int $microseconds = 0)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-select.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从给定套接字数组运行带指定超时时间的 select() 系统调用

## 说明

```php
int|false socket_select(array|null $read, array|null $write, array|null $except, int|null $seconds, int $microseconds = 0)
```

`socket_select()` 接受套接字数组并等待其状态改变。如果拥有 BSD 套接字背景，会认识到这些套接字数组事实上被称为文件描述符集合。观察三个独立套接字数组。

## 参数

- **`$read`** — `$read` 数组中列出要检查是否可读的套接字（更准确地说，查看读取是否会阻塞-特别是套接字在 EOF 时也可以是就绪状态，此时 `socket_read()` 将会返回长度为 0 的字符串。
- **`$write`** — `$write` 数组中列出要检查的写入是否阻塞的套接字。
- **`$except`** — `$except` 数组中列出要检查的是否异常的套接字。
- **`$seconds`** — `$seconds` 和 `$microseconds` 构成 `timeout` 参数。`timeout` 是 `socket_select()` 返回前的运行时间上限。`$seconds` 可以是 0，使 `socket_select()` 立即返回。这在轮询时很有用。如果 `$seconds` 是 `null`（不会超时），`socket_select()` 会无限期阻塞。
- **`$microseconds`**

> 函数退出时，数组中状态发生变更的套接字将会被修改。

你不需要将每个数组都传递到 `socket_select()` 中。可以将它忽略或者使用空数组和 `null` 代替。不要忘记这些数组是*引用*传递的，在 `socket_select()` 返回时会被修改。

> 由于当前 Zend 引擎的限制，无法使用像 `null` 这样的常数修饰符直接作为参数传递给期望获取引用参数的方法。而是使用临时变量或表达式：
>
> **`socket_select()` 使用 `null`**
>
> ```php
>
>
> <?php
> $e = NULL;
> socket_select($r, $w, $e, 0);
> ?>
>
>      
> ```

## 返回值

成功时 `socket_select()` 返回数组中被修改的套接字个数，如果超时则可能返回 0。失败时时返回 `false`。可以使用 `socket_last_error()` 检索错误码。

> 确保使用 `===` 运算符来检查错误。因为 `socket_select()` 可能返回 0，使用 `==` 将被计算为 `true`：
>
> **理解 `socket_select()` 的返回值**
>
> ```php
>
>
> <?php
> $e = NULL;
> if (false === socket_select($r, $w, $e, 0)) {
>     echo "socket_select() failed, reason: " .
>         socket_strerror(socket_last_error()) . "\n";
> }
> ?>
>
>      
> ```

## 示例

**`socket_select()` 示例**

```php


<?php
/* Prepare the read array */
$read   = array($socket1, $socket2);
$write  = NULL;
$except = NULL;
$num_changed_sockets = socket_select($read, $write, $except, 0);

if ($num_changed_sockets === false) {
    /* Error handling */
} else if ($num_changed_sockets > 0) {
    /* At least at one of the sockets something interesting happened */
}
?>

    
```

## 注释

> 请注意，处理某些实现的套接字时需要特别小心。一些基本规则：
>
> - 始终使用不带超时时间的 `socket_select()`，如果没有可用数据，程序不会做任何事。依赖超时的代码通常不可移植并且很难调试。
> - 不打算在 `socket_select()` 调用后检查值的套接字不要添加到集合中。`socket_select()` 返回后，必须检查所有数组中的套接字。任何可写套接字需要处理写事件，任何可读套接字需要处理读事件。
> - 在处理数组中返回套接字的读或写操作时，可能并不会读取或写入请求的所有数据。需要做好仅仅读取或写入单个字节的准备。
> - 在大多数套接字实现中，仅在套接字收到带外数据时，`$except` 中的套接字可以捕获异常。

## 参见

`socket_read()` `socket_write()` `socket_last_error()` `socket_strerror()`
