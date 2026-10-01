---
id: "zh-php-function-function-session-save-path"
language: "php"
lang: "zh"
category: "function"
name: "session_save_path"
title: "读取/设置当前会话的保存路径"
signature: "string|false session_save_path(string|null $path = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-save-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取/设置当前会话的保存路径

## 说明

```php
string|false session_save_path(string|null $path = null)
```

`session_save_path()` 返回当前会话的保存路径。

## 参数

- **`$path`** — 指定会话数据保存的路径。如果已经指定且不为 `null`，保存数据的路径将会改变。 必须在调用 `session_start()` 函数之前调用 `session_save_path()` 函数。 — > 在某些操作系统上，建议使用可以高效处理 大量小尺寸文件的文件系统上的路径来保存会话数据。

## 返回值

返回保存会话数据的路径， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$path` 现在可为 null。 |

## 参见

session.save_path 配置指令。
