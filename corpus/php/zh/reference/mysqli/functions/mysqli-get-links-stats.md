---
id: "zh-php-function-function-mysqli-get-links-stats"
language: "php"
lang: "zh"
category: "function"
name: "mysqli_get_links_stats"
title: "返回打开和缓存的链接相关信息"
signature: "array mysqli_get_links_stats()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/function.mysqli-get-links-stats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回打开和缓存的链接相关信息

## 说明

```php
array mysqli_get_links_stats()
```

`mysqli_get_links_stats()` 返回已经打开和不活跃的 MySQL 链接的相关信息。

## 参数

此函数没有参数。

## 返回值

`mysqli_get_links_stats()` 返回一个有三个元素的关联数组, 键如下:

- **`$total`** — `int` 类型，表示任何状态下未关闭链接的总数。
- **`$active_plinks`** — `int` 类型，表示活跃的持久链接数。
- **`$cached_plinks`** — `int` 类型，表示不活跃的持久链接数。
