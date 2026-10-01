---
id: "zh-php-guide-url-constants"
language: "php"
lang: "zh"
category: "guide"
name: "url.constants"
title: "预定义常量"
module: "url"
source_url: "https://www.php.net/manual/zh/url.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

以下常量与 `parse_url()` 一起使用。

- **`PHP_URL_SCHEME` (`int`)**
- **`PHP_URL_HOST` (`int`)** — 输出解析 URL 的主机名。
- **`PHP_URL_PORT` (`int`)** — 输出解析 URL 的端口。
- **`PHP_URL_USER` (`int`)** — 输出解析 URL 的用户名。
- **`PHP_URL_PASS` (`int`)** — 输出解析 URL 的密码。
- **`PHP_URL_PATH` (`int`)** — 输出解析 URL 的路径。
- **`PHP_URL_QUERY` (`int`)** — 输出解析 URL 的查询字符串。
- **`PHP_URL_FRAGMENT` (`int`)** — 输出解析 URL 的片段（# 后的字符串）。

以下常量与 `http_build_query()` 一起使用。

- **`PHP_QUERY_RFC1738` (`int`)** — 根据 [RFC 1738](1738) 和 `application/x-www-form-urlencoded` 媒体类型执行编码，这意味着空格会编码为加号（`+`）。
- **`PHP_QUERY_RFC3986` (`int`)** — 根据 [RFC 3986](3986) 执行编码，空格将会百分比编码（`%20`）。
