---
id: "zh-php-function-function-trigger-error"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"],"params":[1]}
name: "trigger_error"
title: "产生一个用户级别的 error/warning/notice 信息"
signature: "true trigger_error(string $message, int $error_level = E_USER_NOTICE)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.trigger-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 产生一个用户级别的 error/warning/notice 信息

## 说明

```php
true trigger_error(string $message, int $error_level = E_USER_NOTICE)
```

用于触发一个用户级别的错误条件，它能结合内置的错误处理器所关联，或者可以使用用户定义的函数作为新的错误处理程序(`set_error_handler()`)。

该函数在你运行出现异常时，需要产生一个特定的响应时非常有用。

## 参数

- **`$message`** — 该 error 的特定错误信息，长度限制在了 1024 个字节。超过 1024 字节的字符都会被截断。
- **`$error_level`** — 该 error 所特定的错误类型。仅 `E_USER_{*}` 系列常量对其有效，默认是 `E_USER_NOTICE`。
  > 现已弃用传递 `E_USER_ERROR` 作为 `$error_level`。抛出 Exception 或调用 `exit()`。



## 返回值

总是返回 `true`。

## 错误／异常

如果 `$error_level` 不是 `E_USER_ERROR`、`E_USER_WARNING`、`E_USER_NOTICE` 或 `E_USER_DEPRECATED`，此函数将抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现已弃用传递 `E_USER_ERROR` 作为 `$error_level`。抛出 Exception 或调用 `exit()`。 |
| 8.4.0 | 此函数现在返回类型是 `true` 而不是 `bool`。 |
| 8.0.0 | 如果指定 `$error_level` 无效，此函数现在将抛出 `ValueError`。之前返回 `false`。 |

## 示例

**`trigger_error()` 示例**

`set_error_handler()` 可见到更多详细的例子。

```php


<?php
$password = $_POST['password'] ?? '';
if ($password === '') {
  trigger_error("Using an empty password is unsafe", E_USER_WARNING);
}
$hash = password_hash($password, PASSWORD_DEFAULT);
?>

    
```

## 注释

> 在 `$message` 里的 HTML 实体，并不会被转义。如果错误消息要显示在浏览器里，需要对错误消息使用 `htmlentities()`。

## 参见

`error_reporting()` `set_error_handler()` `restore_error_handler()` 错误级别常量 `Deprecated` 注解
