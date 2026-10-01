---
id: "zh-php-function-function-session-decode"
language: "php"
lang: "zh"
category: "function"
name: "session_decode"
title: "解码会话数据"
signature: "bool session_decode(string $data)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解码会话数据

## 说明

```php
bool session_decode(string $data)
```

`session_decode()` 对 `$$data` 参数中的已经序列化的会话数据进行解码， 并且使用解码后的数据填充 $_SESSION 超级全局变量。

请注意，这里的反序列化方法不同于 `unserialize()` 函数。 序列化方法是 PHP 内置的，并且可以通过 session.serialize_handler 配置项进行修改。

## 参数

- **`$data`** — 编码后的数据

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

`session_encode()` session.serialize_handler
