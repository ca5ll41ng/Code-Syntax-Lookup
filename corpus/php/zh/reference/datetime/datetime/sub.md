---
id: "zh-php-function-datetime-sub"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::sub"
aliases: ["date_sub"]
title: "对 DateTime 对象减去一定量的日、月、年、小时、分钟和秒。"
signature: "public DateTime DateTime::sub(DateInterval $interval)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.sub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对 DateTime 对象减去一定量的日、月、年、小时、分钟和秒。

## 说明

面向对象风格

```php
public DateTime DateTime::sub(DateInterval $interval)
```

过程化风格

```php
DateTime date_sub(DateTime $object, DateInterval $interval)
```

对指定 DateTime 对象，减去指定 `DateInterval` 对象。

跟 `DateTimeImmutable::sub()` 一样，但适用于 `DateTime`。

过程化版本将 `DateTime` 对象作为第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$interval`** — `DateInterval` 对象

## 返回值

返回方法链修改后的 `DateTime` 对象。

## 错误／异常

仅限于面向对象的API：如果尝试不受支持的操作，比如使用 `DateInterval` 对象表示相对时间规格（如 `next weekday`）的，将会抛出 DateInvalidOperationException。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 当尝试执行不受支持的操作时，`DateTime::sub()` 现在会抛出 DateInvalidOperationException，而不是警告。`date_sub()` 尚未更改。 |

## 参见

 `DateTimeImmutable::sub()`
