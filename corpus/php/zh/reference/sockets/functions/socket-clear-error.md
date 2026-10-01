---
id: "zh-php-function-function-socket-clear-error"
language: "php"
lang: "zh"
category: "function"
name: "socket_clear_error"
title: "清除套接字或者最后的错误代码上的错误"
signature: "void socket_clear_error(Socket|null $socket = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-clear-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清除套接字或者最后的错误代码上的错误

## 说明

```php
void socket_clear_error(Socket|null $socket = null)
```

这个函数清除给定的套接字上的错误代码或是最后一个全局的套接字如果套接字没有指定的话。

这个函数允许明确的重置错误代码值 不论是一个套接字或者最后全局错误代码的扩展， 这对在检测应用的一部分是否有错误发生是十分有用的。

## 参数

- **`$socket`** — 用 `socket_create()` 创建的 `Socket` 实例。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |
| 8.0.0 | 参数 `$socket` 可以为 null。 |

## 参见

`socket_last_error()` `socket_strerror()`
