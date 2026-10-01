---
id: "zh-php-function-datetimezone-getname"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeZone::getName"
aliases: ["timezone_name_get"]
title: "返回时区名称"
signature: "public string DateTimeZone::getName()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetimezone.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回时区名称

## 说明

面向对象风格

```php
public string DateTimeZone::getName()
```

过程化风格

```php
string timezone_name_get(DateTimeZone $object)
```

返回时区名称。

## 参数

- **`$object`** — 要获得名称的 `DateTimeZone`。

## 返回值

根据区域类型、UTC 时差（类型 1）、时区缩写（类型 2）和 IANA 时区数据库发布的时区标识符（类型 3），描述符字符串使用相同时差和/或规则创建新的 `DateTimeZone`。例如：`02:00`、`CEST` 或者 时区列表中的其中一个时区名称。
