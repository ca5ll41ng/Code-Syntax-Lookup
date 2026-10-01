---
id: "zh-php-function-function-error-log"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[3]}
name: "error_log"
title: "发送错误信息到某个地方"
signature: "bool error_log(string $message, int $message_type = 0, string|null $destination = null, string|null $additional_headers = null)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.error-log.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送错误信息到某个地方

## 说明

```php
bool error_log(string $message, int $message_type = 0, string|null $destination = null, string|null $additional_headers = null)
```

把错误信息发送到 web 服务器的错误日志，或者到一个文件里。

## 参数

- **`$message`** — 应该被记录的错误信息。
- **`$message_type`** — 设置错误应该发送到何处。可能的信息类型有以下几个： — | 0 | `$message` 发送到 PHP 的系统日志，使用 操作系统的日志机制或者一个文件，取决于 error_log 指令设置了什么。 这是个默认的选项。 | | --- | --- | | 1 | `$message` 发送到参数 `$destination` 设置的邮件地址。 第四个参数 `$additional_headers` 只有在这个类型里才会被用到。 | | 2 | 不再是一个选项。 | | 3 | `$message` 被发送到位置为 `$destination` 的文件里。 字符 `$message` 不会默认被当做新的一行。 | | 4 | `$message` 直接发送到 SAPI 的日志处理程序中。 |
- **`$destination`** — 目标。它的含义描述于以上，由 `$message_type` 参数所决定。
- **`$additional_headers`** — 额外的头。当 `$message_type` 设置为 `1` 的时候使用。 该信息类型使用了 `mail()` 的同一个内置函数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果 `$message_type` 是 0，此函数始终返回 `true`，无论是否可以记录错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$destination` 和 `$additional_headers` 允许为 null。 |

## 示例

**`error_log()` 范例**

```php


<?php
// 如果无法连接到数据库，发送通知到服务器日志
if (!Ora_Logon($username, $password)) {
    error_log("Oracle database not available!", 0);
}

// 如果用尽了 FOO，通过邮件通知管理员
if (!($foo = allocate_new_foo())) {
    error_log("Big trouble, we're all out of FOOs!", 1,
               "operator@example.com");
}

// 调用 error_log() 的另一种方式:
error_log("You messed up!", 3, "/var/tmp/my-errors.log");
?>

    
```

## 注释

> `error_log()` 并非二进制安全的。null 字符可能截断 `$message`。

> `$message` 不能包含 null 字符。注意，`$message` 可能会发送到文件、邮件、syslog 等。所以在调用 `error_log()` 前需要使用适合的转换/转义函数：`base64_encode()`、`rawurlencode()` 或 `addslashes()`。
