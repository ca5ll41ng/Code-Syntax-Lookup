---
id: "zh-php-function-function-filter-id"
language: "php"
lang: "zh"
category: "function"
name: "filter_id"
title: "返回与某个特定名称的过滤器相关联的id"
signature: "int|false filter_id(string $name)"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回与某个特定名称的过滤器相关联的id

## 说明

```php
int|false filter_id(string $name)
```

## 参数

- **`$name`** — 待获取的过滤器名称。

## 返回值

如果获取成功则返回过滤器 id，如果过滤器不存在则返回 `false`。

## 参见

 `filter_list()`
