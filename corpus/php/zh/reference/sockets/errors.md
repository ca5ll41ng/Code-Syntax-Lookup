---
id: "zh-php-guide-sockets-errors"
language: "php"
lang: "zh"
category: "guide"
name: "sockets.errors"
title: "Socket Errors"
module: "sockets"
source_url: "https://www.php.net/manual/zh/sockets.errors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Socket Errors

Socket 扩展编写的目的是为功能强大的 BSD Socket 提供可用的接口。它能确保这些函数在 Win32 和 Unix 平台上都能很好的工作。在特定条件下，大部分 socket 函数如果发生错误都会发出一个 `E_WARNING` 消息描述错误内容。有时可能并不会如开发者所愿。例如，因为连接突然中断，`socket_read()` 函数可能会突然发出一个 `E_WARNING` 消息。通常会使用 `@` 操作符来压制异常，然后在程序中用 `socket_last_error()` 来捕获错误代码。可以调用 `socket_strerror()` 函数通过错误代码获取错误描述。查看函数描述获取更多信息。

> Socket 扩展发出的 `E_WARNING` 信息都是英文的，但获取到的错误描述会根据当前区域（`LC_MESSAGES`）展示：
>
> ```text
>
>
> Warning - socket_bind() unable to bind address [98]: Die Adresse wird bereits verwendet
>
>    
> ```
