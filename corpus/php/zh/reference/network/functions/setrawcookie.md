---
id: "zh-php-function-function-setrawcookie"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["session_fixation"],"cwe":["CWE-384"],"params":[1]}
name: "setrawcookie"
title: "发送未经 URL 编码的 cookie"
signature: "bool setrawcookie(string $name, [string $value = ...], int $expires_or_options = 0, [string $path = ...], [string $domain = ...], bool $secure = false, bool $httponly = false)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.setrawcookie.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送未经 URL 编码的 cookie

## 说明

```php
bool setrawcookie(string $name, [string $value = ...], int $expires_or_options = 0, [string $path = ...], [string $domain = ...], bool $secure = false, bool $httponly = false)
```

自 PHP 7.3.0 起可用的替代签名（不支持命名参数）：

```php
bool setrawcookie(string $name, [string $value = ...], array $options = [])
```

`setrawcookie()` 和 `setcookie()` 非常相似，唯一不同之处是发送到浏览器的 cookie 值没有自动经过 URL 编码（urlencode）。

## 参数

相关参数的信息参见 `setcookie()` 的文档。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 新增替代签名 `$options` 的支持。此签名还支持设置 SameSite cookie 属性。 |

## 参见

`setcookie()`
