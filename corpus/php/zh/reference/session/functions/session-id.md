---
id: "zh-php-function-function-session-id"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["session_fixation"],"cwe":["CWE-384"],"params":[1]}
name: "session_id"
title: "获取/设置当前会话 ID"
signature: "string|false session_id(string|null $id = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取/设置当前会话 ID

## 说明

```php
string|false session_id(string|null $id = null)
```

`session_id()` 可以用来获取/设置 当前会话 ID。

为了能够将会话 ID 很方便的附加到 URL 之后， 你可以使用常量 `SID` 获取以字符串格式表达的会话名称和 ID。 请参考 会话处理。

## 参数

- **`$id`** — 如果指定了 `$id` 且不为 `null`， 则使用指定值作为会话 ID。 必须在调用 `session_start()` 函数之前调用 `session_id()` 函数。 不同的会话处理程序对于会话 ID 中可以使用的字符有不同的限制。 例如文件会话处理程序仅允许会话 ID 中使用以下字符：`[a-zA-Z0-9,-]`
  > 如果使用 cookie 方式传送会话 ID，并且指定了 `$id` 参数， 在调用 `session_start()` 之后都会向客户端发送新的 cookie， 无论当前的会话 ID 和新指定的会话 ID 是否相同。



## 返回值

`session_id()` 返回当前会话ID。 如果当前没有会话，则返回空字符串（`""`）。失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$id` 现在可以为 null。 |

## 参见

`session_regenerate_id()` `session_start()` `session_set_save_handler()` session.save_handler
