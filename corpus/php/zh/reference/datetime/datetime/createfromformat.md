---
id: "zh-php-function-datetime-createfromformat"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::createFromFormat"
aliases: ["date_create_from_format"]
title: "根据指定格式解析时间字符串"
signature: "public static DateTime|false DateTime::createFromFormat(string $format, string $datetime, DateTimeZone|null $timezone = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.createfromformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据指定格式解析时间字符串

## 说明

面向对象风格

```php
public static DateTime|false DateTime::createFromFormat(string $format, string $datetime, DateTimeZone|null $timezone = null)
```

过程化风格

```php
DateTime|false date_create_from_format(string $format, string $datetime, DateTimeZone|null $timezone = null)
```

返回新的 DateTime 对象，该对象是通过指定 `$format` 将表示日期和时间的 `$datetime` 格式化生成。

类似于 `DateTimeImmutable::createFromFormat()` 和 `date_create_immutable_from_format()`，但创建的是 `DateTime` 对象。

此方法（包括参数、示例和注意事项）记录在 DateTimeImmutable::createFromFormat 页面上。

## 参数

参阅 DateTimeImmutable::createFromFormat。

## 返回值

返回 DateTime 对象 或者在失败时返回 `false`。

## 错误／异常

当 `$datetime` 包含 NULL 字节时，此方法抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.21、8.1.8、8.2.0 | 现在，当将 NULL 字节传递到 `$datetime` 时，会引发 ValueError，而之前会默默忽略该错误。 |

## 示例

有关大量示例，请参阅 DateTimeImmutable::createFromFormat。

## 参见

 `DateTimeImmutable::createFromFormat()`
