---
id: "zh-php-function-function-session-get-cookie-params"
language: "php"
lang: "zh"
category: "function"
name: "session_get_cookie_params"
title: "获取会话 cookie 参数"
signature: "array session_get_cookie_params()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-get-cookie-params.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取会话 cookie 参数

## 说明

```php
array session_get_cookie_params()
```

获取会话 cookie 的参数。

## 参数

此函数没有参数。

## 返回值

返回一个包含当前会话 cookie 信息的数组：

- "lifetime" - cookie 的生命周期，以秒为单位。
- "path" - cookie 的访问路径。
- "domain" - cookie 的域。
- "secure" - 仅在使用安全连接时发送 cookie。
- "httponly" - 只能通过 http 协议访问 cookie
- "samesite"——控制 cookie 的跨域发送。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 返回的数组中已添加“samesite”条目。 |

## 参见

session.cookie_lifetime session.cookie_path session.cookie_domain session.cookie_secure session.cookie_httponly session.cookie_samesite `session_set_cookie_params()`
