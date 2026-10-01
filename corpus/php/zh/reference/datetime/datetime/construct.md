---
id: "zh-php-function-datetime-construct"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::__construct"
title: "返回新的 DateTime 对象"
signature: "public DateTime::__construct(string $datetime = \"now\", DateTimeZone|null $timezone = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回新的 DateTime 对象

## 说明

```php
public DateTime::__construct(string $datetime = "now", DateTimeZone|null $timezone = null)
```

跟 `DateTimeImmutable::__construct()` 一样，但适用于 `DateTime`。Consider using the `DateTimeImmutable` and features instead.

返回新的 DateTime 对象。

## 参数

- **`$datetime`** — 日期/时间字符串。正确格式的说明详见 日期与时间格式。 — 如果这个参数为字符串 `"now"` 表示获取当前时间。 如果同时指定了 `$$timezone` 参数，那么获取指定时区的当前时间。
- **`$timezone`** — `DateTimeZone` 对象表示 `$$datetime` 的时区。 — 如果省略了 `$$timezone` 参数或者传递 `null`， 那么会使用当前时区。
  > 当 `$$datetime` 参数是 UNIX 时间戳（例如 `@946684800`），或者已经包含时区信息（例如 `2010-01-28T15:00:00+02:00`）的时候，`$$timezone` 参数和当前时区都将被忽略。



## 返回值

返回一个新的 DateTime 对象实例，或者在发生错误的时候返回

## 错误／异常

如果传递无效的日期/时间字符串，将会抛出 DateMalformedStringException，在 PHP 8.3 之前，将抛出 Exception。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 传递无效的字符串现在抛出 DateMalformedStringException 而不是 Exception。 |

## 参见

 `DateTimeImmutable::__construct()`
