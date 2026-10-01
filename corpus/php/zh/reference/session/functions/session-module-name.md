---
id: "zh-php-function-function-session-module-name"
language: "php"
lang: "zh"
category: "function"
name: "session_module_name"
title: "获取/设置会话模块名称"
signature: "string|false session_module_name(string|null $module = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-module-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取/设置会话模块名称

## 说明

```php
string|false session_module_name(string|null $module = null)
```

`session_module_name()` 获取或设置会话模块名称，也被称做：session.save_handler。

## 参数

- **`$module`** — 如果指定 `$module` 参数并且不是 `null`， 则使用指定值作为会话模块。 禁止传入 `"user"` 作为此参数的值， 请使用 `session_set_save_handler()` 来设置用户自定义的会话处理器。

## 返回值

返回当前所用的会话模块名称, 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$module` 现在可以为空。 |
| 7.2.0 | 不允许设置模块名称为 `"user"`。 在之前的版本中，如果设置为 "user"，那么会被静默的忽略到。 |
