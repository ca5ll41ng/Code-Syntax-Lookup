---
id: "zh-php-guide-stream-filters"
language: "php"
lang: "zh"
category: "guide"
name: "stream.filters"
title: "Stream 过滤"
module: "stream"
source_url: "https://www.php.net/manual/zh/stream.filters.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stream 过滤

`filter` 是在流中执行读取或写入数据操作时的最后一段代码。可以将任意数量的过滤器堆叠到一个流上。可以在 PHP 脚本中使用 `stream_filter_register()` 或扩展定义自定义过滤器。要访问当前注册的过滤器列表，请使用 `stream_get_filters()`。
