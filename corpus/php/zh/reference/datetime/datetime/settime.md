---
id: "zh-php-function-datetime-settime"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::setTime"
aliases: ["date_time_set"]
title: "设置时间"
signature: "public DateTime DateTime::setTime(int $hour, int $minute, int $second = 0, int $microsecond = 0)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.settime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置时间

## 说明

面向对象风格

```php
public DateTime DateTime::setTime(int $hour, int $minute, int $second = 0, int $microsecond = 0)
```

过程化风格

```php
DateTime date_time_set(DateTime $object, int $hour, int $minute, int $second = 0, int $microsecond = 0)
```

将 DateTime 的当前时间重置为不同的时间。

跟 `DateTimeImmutable::setTime()` 一样，但适用于 `DateTime`。

过程化版本将 `DateTime` 对象作为第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$hour`** — 时间中的小时。
- **`$minute`** — 时间中的分钟。
- **`$second`** — 时间中的秒。
- **`$microsecond`** — 时间中的微秒。

## 返回值

返回方法链修改后的 `DateTime` 对象。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 重复存在的小时（在夏令时回拨转换期间）的行为已更改。之前 PHP 会选择第二次出现的时间（夏令时转换之后），而不是第一次出现的时间（夏令时转换之前）。 |
| 7.1.0 | 新增 `$microsecond` 参数。 |

## 参见

 `DateTimeImmutable::setTime()`
