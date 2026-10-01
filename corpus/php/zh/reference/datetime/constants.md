---
id: "zh-php-guide-datetime-constants"
language: "php"
lang: "zh"
category: "guide"
name: "datetime.constants"
title: "预定义常量"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

已定义的 `DATE_{*}` 常量提供了一些标准的日期时间的表达，可以用在日期时间格式化的函数中（例如 `date()`）。

- **`SUNFUNCS_RET_TIMESTAMP` （`int`）** — 时间戳
- **`SUNFUNCS_RET_STRING` （`int`）** — 小时:分钟（例如：`08:02`）
- **`SUNFUNCS_RET_DOUBLE` （`int`）** — 浮点数表示的小时（例如：`8.75`）

- **`DATE_ATOM` (`string`)** — Atom（示例：`2005-08-15T15:52:01+00:00`）；兼容 ISO-8601、RFC 3339 和 XML Schema
- **`DATE_COOKIE` (`string`)** — HTTP Cookie（示例：`Monday, 15-Aug-2005 15:52:01 UTC`）
- **`DATE_ISO8601` (`string`)** — 类似 ISO-8601 格式（示例：`2005-08-15T15:52:01+0000`）
  > 此格式与 ISO-8601 不兼容，但出于向后兼容的原因，保留了这种格式。使用 `DATE_ISO8601_EXPANDED`、`DATE_ATOM` 来兼容 ISO-8601（参考 ISO8601:2004 第 4.3.3 节第 d 条）。


- **`DATE_ISO8601_EXPANDED` (`string`)** — ISO-8601 扩充（示例：`+10191-07-26T08:59:52+01:00`）
  > 此格式允许使用 ISO-8601 正常范围（`0000`-`9999`）之外的年份范围，只需包含一个字符即可。还确保时区部分 (`+01:00`) 与 ISO-8601 兼容。


- **`DATE_RFC822` (`string`)** — RFC 822（示例：`Mon, 15 Aug 05 15:52:01 +0000`）
- **`DATE_RFC850` (`string`)** — RFC 850（示例：`Monday, 15-Aug-05 15:52:01 UTC`）
- **`DATE_RFC1036` (`string`)** — RFC 1036（示例：`Mon, 15 Aug 05 15:52:01 +0000`）
- **`DATE_RFC1123` (`string`)** — RFC 1123（示例：`Mon, 15 Aug 2005 15:52:01 +0000`）
- **`DATE_RFC7231` (`string`)** — RFC 7231（自 PHP 7.0.19 和 7.1.5 起）（示例：`Sat, 30 Apr 2016 17:52:13 GMT`）
- **`DATE_RFC2822` (`string`)** — RFC 2822（示例：`Mon, 15 Aug 2005 15:52:01 +0000`）
- **`DATE_RFC3339` (`string`)** — 与 `DATE_ATOM` 相同。
- **`DATE_RFC3339_EXTENDED` (`string`)** — RFC 3339 EXTENDED 格式（示例：`2005-08-15T15:52:01.000+00:00`）
- **`DATE_RSS` (`string`)** — RSS（示例：`Mon, 15 Aug 2005 15:52:01 +0000`）. 别名 `DATE_RFC1123`.
- **`DATE_W3C` (`string`)** — 万维网联盟（示例：`2005-08-15T15:52:01+00:00`）。别名 `DATE_RFC3339`。
