---
id: "zh-php-guide-class-datetimeinterface"
language: "php"
lang: "zh"
category: "guide"
name: "class.datetimeinterface"
title: "The DateTimeInterface interface"
module: "datetime"
source_url: "https://www.php.net/manual/zh/class.datetimeinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DateTimeInterface interface

DateTimeInterface

   简介  创建 DateTimeInterface 是为了让参数、返回值、属性类型声明能够接受 `DateTimeImmutable` 或 `DateTime` 作为值。不可以使用用户定义的类实现该接口。    此接口也定义了公共常量，允许通过 `DateTimeImmutable::format()` 和 `DateTime::format()` 格式化 `DateTimeImmutable` 或 `DateTime` 对象。      接口摘要    DateTimeInterface  常量  `public` `const` `string` `DateTimeInterface::ATOM` "Y-m-d\\TH:i:sP"   `public` `const` `string` `DateTimeInterface::COOKIE` "l, d-M-Y H:i:s T"   `public` `const` `string` `DateTimeInterface::ISO8601` "Y-m-d\\TH:i:sO"   `public` `const` `string` `DateTimeInterface::ISO8601_EXPANDED` "X-m-d\\TH:i:sP"   `public` `const` `string` `DateTimeInterface::RFC822` "D, d M y H:i:s O"   `public` `const` `string` `DateTimeInterface::RFC850` "l, d-M-y H:i:s T"   `public` `const` `string` `DateTimeInterface::RFC1036` "D, d M y H:i:s O"   `public` `const` `string` `DateTimeInterface::RFC1123` "D, d M Y H:i:s O"   `public` `const` `string` `DateTimeInterface::RFC7231` "D, d M Y H:i:s \\G\\M\\T"   `public` `const` `string` `DateTimeInterface::RFC2822` "D, d M Y H:i:s O"   `public` `const` `string` `DateTimeInterface::RFC3339` "Y-m-d\\TH:i:sP"   `public` `const` `string` `DateTimeInterface::RFC3339_EXTENDED` "Y-m-d\\TH:i:s.vP"   `public` `const` `string` `DateTimeInterface::RSS` "D, d M Y H:i:s O"   `public` `const` `string` `DateTimeInterface::W3C` "Y-m-d\\TH:i:sP"  方法       预定义常量 
- **`DateTimeInterface::ATOM` `string`** — Atom 格式（示例：2005-08-15T15:52:01+00:00）；兼容 ISO-8601、RFC 3339 和 XML Schema
- **`DateTimeInterface::COOKIE` `string`** — HTTP Cookies 格式（示例：Monday, 15-Aug-2005 15:52:01 UTC）
- **`DateTimeInterface::ISO8601` `string`** — 类似 ISO-8601 格式（示例：2005-08-15T15:52:01+0000）
  > 这种格式和 ISO-8601 格式并不兼容，只是出于向后兼容的原因才保留的。 如果要使用和 ISO-8601 兼容的格式，请使用 `DateTimeInterface::ISO8601_EXPANDED` 和 `DateTimeInterface::ATOM` 两个常量。 （参见 ISO8601:2004 第 4.3.3 条 d 项）

- **`DateTimeInterface::ISO8601_EXPANDED` `string`** — ISO-8601 扩大版（示例：+10191-07-26T08:59:52+01:00）
  > 通过始终包含符号字符，此格式允许超出 ISO-8601 正常范围（`0000`-`9999`）的年份。还确保时区部分（`+01:00`）与 ISO-8601 兼容。

- **`DateTimeInterface::RFC822` `string`** — RFC 822 格式（示例：Mon, 15 Aug 05 15:52:01 +0000）
- **`DateTimeInterface::RFC850` `string`** — RFC 850 格式（示例：Monday, 15-Aug-05 15:52:01 UTC）
- **`DateTimeInterface::RFC1036` `string`** — RFC 1036（示例：Mon, 15 Aug 05 15:52:01 +0000）
- **`DateTimeInterface::RFC1123` `string`** — RFC 1123 格式（示例：Mon, 15 Aug 2005 15:52:01 +0000）
- **`DateTimeInterface::RFC7231` `string`** — RFC 7231 格式 (自 PHP 7.0.19 和 7.1.5 可用) (示例：Sat, 30 Apr 2016 17:52:13 GMT)
- **`DateTimeInterface::RFC2822` `string`** — RFC 2822 格式（示例：Mon, 15 Aug 2005 15:52:01 +0000）
- **`DateTimeInterface::RFC3339` `string`** — 同 `DATE_ATOM`
- **`DateTimeInterface::RFC3339_EXTENDED` `string`** — RFC 3339 EXTENDED 格式（示例：2005-08-15T15:52:01.000+00:00）
- **`DateTimeInterface::RSS` `string`** — RSS（示例：Mon, 15 Aug 2005 15:52:01 +0000）
- **`DateTimeInterface::W3C` `string`** — World Wide Web Consortium（示例：2005-08-15T15:52:01+00:00）

    更新日志  
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现已类型化。 |
| 8.2.0 | 新增常量 `DateTimeInterface::ISO8601_EXPANDED`。 |
| 7.2.0 | `DateTime` 的类常量现在定义在了 `DateTimeInterface` 上。 |
