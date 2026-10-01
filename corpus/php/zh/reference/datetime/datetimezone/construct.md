---
id: "zh-php-function-datetimezone-construct"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeZone::__construct"
aliases: ["timezone_open"]
title: "创建新的DateTimeZone对象"
signature: "public DateTimeZone::__construct(string $timezone)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetimezone.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的DateTimeZone对象

## 说明

面向对象风格

```php
public DateTimeZone::__construct(string $timezone)
```

过程化风格

```php
DateTimeZone|false timezone_open(string $timezone)
```

创建新的 DateTimeZone 对象。

DateTimeZone 对象提供了对三种不同类型的时区规则访问。UTC 时差（类型 `1`）、时区缩写（类型 `2`）、IANA 时区数据库中公布的时区标识符（类型 `3`）。

DateTimeZone 对象可以附加到 `DateTime` 和 `DateTimeImmutable` 对象上，以便能够在本地时区呈现这些对象所封装的时区。

## 参数

- **`$timezone`** — 所支持的时区名之一，时差（+0200）或时区缩写（BSD）。

## 返回值

成功时返回 `DateTimeZone` 对象。 过程化风格在失败时返回 `false`。

## 错误／异常

如果提供的时区不能识别为有效的时区，此方法将抛出 DateInvalidTimeZoneException 异常。在 PHP 8.3 之前，是 Exception。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 无效值现在返回 DateInvalidTimeZoneException 而不是生成 Exception。 |

## 示例

**创建 DateTimeZone 并附加到 DateTimeImmutable**

```php


<?php
$d = new DateTimeImmutable("2022-06-02 15:44:48 UTC");

$timezones = [ 'Europe/London', 'GMT+04:45', '-06:00', 'CEST' ];

foreach ($timezones as $tz) {
    $tzo = new DateTimeZone($tz);

    $local = $d->setTimezone($tzo);
    echo $local->format(DateTimeInterface::RFC2822 . ' — e') . "\n";
}

    
```

以上示例会输出：

```text


Thu, 02 Jun 2022 16:44:48 +0100 — Europe/London
Thu, 02 Jun 2022 20:29:48 +0445 — +04:45
Thu, 02 Jun 2022 09:44:48 -0600 — -06:00
Thu, 02 Jun 2022 17:44:48 +0200 — CEST

    
```

**实例化 `DateTimeZone` 时捕捉错误**

```php


<?php
// 通过捕获异常来处理错误
$timezones = array('Europe/London', 'Mars/Phobos', 'Jupiter/Europa');

foreach ($timezones as $tz) {
    try {
        $mars = new DateTimeZone($tz);
        echo $mars->getName() . "\n";
    } catch(Exception $e) {
        echo $e->getMessage() . "\n";
    }
}

    
```

以上示例会输出：

```text


Europe/London
DateTimeZone::__construct() [datetimezone.--construct]: Unknown or bad timezone (Mars/Phobos)
DateTimeZone::__construct() [datetimezone.--construct]: Unknown or bad timezone (Jupiter/Europa)

    
```
