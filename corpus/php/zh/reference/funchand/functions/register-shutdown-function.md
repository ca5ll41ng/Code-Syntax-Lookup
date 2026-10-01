---
id: "zh-php-function-function-register-shutdown-function"
language: "php"
lang: "zh"
category: "function"
name: "register_shutdown_function"
title: "注册在关闭时执行的函数"
signature: "void register_shutdown_function(callable $callback, mixed $args)"
module: "funchand"
source_url: "https://www.php.net/manual/zh/function.register-shutdown-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册在关闭时执行的函数

## 说明

```php
void register_shutdown_function(callable $callback, mixed $args)
```

注册一个 `$callback` ，它会在脚本执行完成或者 `exit()` 后被调用。

可以多次调用 `register_shutdown_function()`，这些被注册的回调会按照他们注册时的顺序被依次调用。如果你在注册的方法内部调用 `exit()`，那么所有处理会被中止，并且其他注册的中止回调也不会再被调用。

关闭函数也可以调用 `register_shutdown_function()` 来将关闭函数添加到队列的末尾。

## 参数

- **`$callback`** — 待注册的中止回调。 — 中止回调是作为请求的一部分被执行的，因此可以在它们中进行输出或者读取输出缓冲区。
- **`$args`** — 可以通过传入额外的参数来将参数传给中止函数。

## 返回值

没有返回值。

## 示例

**`register_shutdown_function()` 例子**

```php


<?php
function shutdown()
{
    // 这是关闭函数，在脚本完成前可以进行任何最后的操作。

    echo 'Script executed with success', PHP_EOL;
}

register_shutdown_function('shutdown');
?>

    
```

## 注释

> 在某些 web 服务器（如 Apache）上，可以在中止函数内对脚本的工作目录进行修改。

> 如果进程被信号 SIGTERM 或 SIGKILL 杀死，那么中止函数将不会被调用。尽管你无法中断 SIGKILL，但你可以通过 `pcntl_signal()` 来捕获 SIGTERM，通过在其中调用 `exit()` 来进行一个正常的中止。

> 关闭函数与 max_execution_time 追踪的时间分开运行。这意味着即使进程因为运行时间过长而终止，仍会调用关闭函数。此外，如果关闭函数运行时正好 `max_execution_time` 用完，也会被终止。

## 参见

auto_append_file `exit()` `fastcgi_finish_request()` 连接处理节
