---
id: "zh-php-function-function-mb-language"
language: "php"
lang: "zh"
category: "function"
name: "mb_language"
title: "设置/获取当前的语言"
signature: "string|bool mb_language(string|null $language = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-language.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取当前的语言

## 说明

```php
string|bool mb_language(string|null $language = null)
```

设置/获取当前的语言。

## 参数

- **`$language`** — 用于编码邮件信息。下表列出了有效的语言。 `mb_send_mail()` 使用了该设置来对邮件进行编码。
  | 语言 | 字符 | 编码 | 别名 |
  | --- | --- | --- | --- |
  | German/de | ISO-8859-15 | Quoted-Printable | Deutsch |
  | English/en | ISO-8859-1 | Quoted-Printable |  |
  | Armenian/hy | ArmSCII-8 | Quoted-Printable |  |
  | Japanese/ja | ISO-2022-JP | BASE64 |  |
  | Korean/ko | ISO-2022-KR | BASE64 |  |
  | neutral | UTF-8 | BASE64 |  |
  | Russian/ru | KOI8-R | Quoted-Printable |  |
  | Turkish/tr | ISO-8859-9 | Quoted-Printable |  |
  | Ukrainian/ua | KOI8-U | Quoted-Printable |  |
  | uni | UTF-8 | BASE64 | universal |
  | 简体中文/zh-cn | HZ | BASE64 |  |
  | 繁体中文/zh-tw | BIG-5 | BASE64 |  |



## 返回值

如果设置了 `$language`，并且 `$language` 是有效的，它将返回 `true`。否则将返回 `false`。 当省略了 `$language` 或为 `null` 时，将返回语言名称的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$language` 现在可为 null。 |

## 参见

`mb_send_mail()`
