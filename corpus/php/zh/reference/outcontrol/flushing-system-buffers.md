---
id: "zh-php-guide-outcontrol-flushing-system-buffers"
language: "php"
lang: "zh"
category: "guide"
name: "outcontrol.flushing-system-buffers"
title: "冲刷系统缓冲区"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/outcontrol.flushing-system-buffers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 冲刷系统缓冲区

PHP 提供了两种相关的方式来冲刷系统缓冲区（发送并丢弃内容）：通过调用 `flush()` 以及通过 `ob_implicit_flush()` 或 php.ini 文件中的 implicit_flush 设置来启用自动冲刷。

## 输出冲刷行为

如果禁用了自动冲刷，PHP 仅在调用 `flush()` 或脚本结束时才会冲刷输出。

如果启用了自动冲刷，PHP 将尝试在每段代码块产生输出之后进行冲刷。在此上下文中，输出是指非零长度的数据，即：

- `&#60;?php ?&#62;` 标签之外的内容
- 由语言结构和函数打印，其明确目的是打印用户提供的变量或字符串，例如 `echo()`、`print()`、`printf()`、`var_dump()`、`var_export()`、`vprintf()`
- 由函数打印，其明确目的是收集和输出有关正在运行的脚本或者 PHP 的数据/信息，例如 `debug_print_backtrace()`、`phpcredits()`、`phpinfo()`
- 当 PHP 出现未捕获的异常或未处理的错误时（取决于 display_errors 和 error_reporting 的设置），会打印出相关信息。
- 任何写入到 `php://output` 的内容

> 打印空字符串或发送头部信息不会视为输出，因此不会导致冲刷操作。

> 如果启用了自动冲刷，控制字符（如 `"\n"`、`"\r"`、`"\0"`）也将触发冲刷操作。

## 限制

此功能无法冲刷用户级输出缓冲区。要一起使用的话，必须在冲刷系统缓冲区之前冲刷用户级输出缓冲区，以便 PHP 生成任何输出。

> 调用 `flush()` 或启用绝对刷新可能会干扰用户级输出缓冲区的输出处理程序，这些输出处理程序在 Web 上下文中设置和发送 header（例如 `ob_gzhandler()`），因为在这些处理程序能够发送 header 之前，`flush()` 或绝对刷新就已经发送了 header 信息。

PHP 不能完整覆盖由底层软件/硬件实现的缓冲，在使用 PHP 的缓冲控制函数时应考虑到这一点。检查 Web 服务器/浏览器/控制台缓冲设置并进行相应的处理可以缓解可能的问题。在 Web 环境中工作时，可以调整 Web 服务器的缓冲设置或脚本的缓冲以协同工作，而调整 PHP 脚本中的缓冲设置可以解决各种浏览器的缓冲策略。在实现行缓冲的控制台上，可以在刷新输出之前将换行符插入到适当的位置。

## SAPI 在冲刷方面的不同

尽管每个 SAPI 实现冲刷的方式略有不同，但这些实现都属于以下两类中的一个：

- Web 上下文中使用的 SAPI 将首先冲刷 header，然后冲刷输出。`Apache2Handler`、`CGI`、`FastCGI` 和 `FPM` 都是此类 SAPI
- 其它 SAPI（比如 `CLI` 和 `embed`）仅冲刷输出
