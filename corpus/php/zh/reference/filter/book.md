---
id: "zh-php-guide-book-filter"
language: "php"
lang: "zh"
category: "guide"
name: "book.filter"
title: "数据过滤器"
module: "filter"
source_url: "https://www.php.net/manual/zh/book.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 数据过滤器

过滤器

 简介  该扩展提供过滤器，用于验证或清理数据。当数据源包含像用户提供的输入数据等未知（或外部）数据时，这尤其有用。例如，这些数据可能来自 HTML 表单。    有两种主要的过滤类型：*验证（validation）*和*清理（sanitization）*。    验证过滤器用于检查数据是否符合某些标准。这些过滤器通过 `FILTER_VALIDATE_{*}` 常量区分。例如，`FILTER_VALIDATE_EMAIL` 过滤器可用于确定数据是否为有效的电子邮件地址。但是，它永远不会更改输入数据。    另一方面，清理将“清洁”数据，因此可能会通过添加或移除字符来更改输入数据。这些过滤器通过 `FILTER_SANITIZE_{*}` 常量区分。例如，`FILTER_SANITIZE_EMAIL` 过滤器将删除电子邮件地址中不应该存在的字符。但是，清理后的数据不会验证是否是有效的电子邮件地址。    大多数过滤器都支持可选的 *flag*，这些 flag 可以调整过滤器的行为。这些标记通过 `FILTER_FLAG_{*}` 常量区分。例如，将 `FILTER_FLAG_PATH_REQUIRED` 与 `FILTER_VALIDATE_URL` 验证过滤器一起使用，可以要求 URL 存在路径（例如 `https://example.org/foo` 中的 `/foo`）。
