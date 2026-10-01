---
id: "zh-php-function-function-session-set-cookie-params"
language: "php"
lang: "zh"
category: "function"
name: "session_set_cookie_params"
title: "设置会话 cookie 参数"
signature: "bool session_set_cookie_params(int $lifetime_or_options, string|null $path = null, string|null $domain = null, bool|null $secure = null, bool|null $httponly = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-set-cookie-params.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置会话 cookie 参数

## 说明

```php
bool session_set_cookie_params(int $lifetime_or_options, string|null $path = null, string|null $domain = null, bool|null $secure = null, bool|null $httponly = null)
```

自 PHP 7.3.0 起可用的替代签名：

```php
bool session_set_cookie_params(array $lifetime_or_options)
```

Cookie 参数可以在 php.ini 文件中定义，本函数仅在当前脚本执行过程中有效。 因此，如果要通过函数修改 cookie 参数，需要对每个请求都要 在调用 `session_start()` 函数之前调用 `session_set_cookie_params()` 函数。

本函数会修改运行期 ini 设置值， 可以通过 `ini_get()` 函数获取这些值。

## 参数

- **`$lifetime_or_options`** — 使用第一个签名时，session cookie 的 lifetime，以秒为单位。 — 当使用第二个签名时，关联 `array` 可能具有 `lifetime`、`path`、`domain`、`secure`、`httponly` 和 `samesite` 中的任一 key。这些值与同名参数的含义相同。`samesite` 元素的值应该是 `Lax` 或 `Strict`。 如果可以接受的键在传入的数组中不存在，那么会采用这些键对应的默认值作为运行时的值。如果省略 `samesite` 元素，则不会设置 SameSite cookie 属性。
- **`$path`** — 此 cookie 的有效 路径。 on the domain where 设置为“/”表示对于本域上所有的路径此 cookie 都可用。
- **`$domain`** — Cookie 的作用 域。 例如：“www.php.net”。 如果要让 cookie 在所有的子域中都可用，此参数必须以点（.）开头，例如：“.php.net”。
- **`$secure`** — 设置为 `true` 表示 cookie 仅在使用 安全 链接时可用。
- **`$httponly`** — 设置为 `true` 表示 PHP 发送 cookie 的时候会使用 httponly 标记。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$path`、`$domain`、`$secure` 和 `$httponly` 现在可为 null。 |
| 7.3.0 | 新增支持 `$lifetime_or_options` 数组的替代签名。此签名还支持 SameSite cookie 属性的设置。 |
| 7.2.0 | 成功时返回 `true`， 或者在失败时返回 `false`。以前该函数返回 `void`。 |

## 参见

session.cookie_lifetime session.cookie_path session.cookie_domain session.cookie_secure session.cookie_httponly session.cookie_samesite `session_get_cookie_params()`
