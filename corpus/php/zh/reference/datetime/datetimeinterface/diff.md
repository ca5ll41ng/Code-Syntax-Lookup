---
id: "zh-php-function-datetime-diff"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeInterface::diff"
aliases: ["DateTimeImmutable::diff","DateTime::diff","date_diff"]
title: "返回两个 DateTime 之间的差值"
signature: "public DateInterval DateTimeInterface::diff(DateTimeInterface $targetObject, bool $absolute = false)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回两个 DateTime 之间的差值

## 说明

面向对象风格

```php
public DateInterval DateTimeInterface::diff(DateTimeInterface $targetObject, bool $absolute = false)
```

```php
public DateInterval DateTimeImmutable::diff(DateTimeInterface $targetObject, bool $absolute = false)
```

```php
public DateInterval DateTime::diff(DateTimeInterface $targetObject, bool $absolute = false)
```

过程化风格

```php
DateInterval date_diff(DateTimeInterface $baseObject, DateTimeInterface $targetObject, bool $absolute = false)
```

返回两个 `DateTimeInterface` 对象的差值。

## 参数

- **`$datetime`** — 要比较的日期。
- **`$absolute`** — 间隔是否强制为正的？

## 返回值

`DateInterval` 对象表示两个日期之间的差值。

`$absolute` 参数只影响 `DateInterval` 对象的 `$invert` 属性。

返回更具体的表示应用于原始对象（`$$this` 或 `$$originObject`）到达 `$$targetObject` 的时钟时间间隔的值。该过程始终不可逆。

该方法知道 DST 转换，因此可以根据示例返回 `24 小时 30 分钟`的时间间隔。如果想使用绝对时间计算，则需要先将 `$$this`/`$$baseObject` 和 `$$targetObject` 都转换为 UTC。

## 示例

**`DateTimeImmutable::diff()` 示例**

面向对象风格

```php


<?php
$origin = new DateTimeImmutable('2009-10-11');
$target = new DateTimeImmutable('2009-10-13');
$interval = $origin->diff($target);
echo $interval->format('%R%a days');

   
```

以上示例会输出：

```text


+2 days

   
```

过程化风格

```php


<?php
$origin = date_create('2009-10-11');
$target = date_create('2009-10-13');
$interval = date_diff($origin, $target);
echo $interval->format('%R%a days');

   
```

以上示例会输出：

```text


+2 days

   
```

**DST 转换期间的 `DateTimeInterface::diff()`**

```php


<?php
$originalTime = new DateTimeImmutable("2021-10-30 09:00:00 Europe/London");
$targetTime = new DateTimeImmutable("2021-10-31 08:30:00 Europe/London");
$interval = $originalTime->diff($targetTime);
echo $interval->format("%H:%I:%S (Full days: %a)"), "\n";

   
```

以上示例会输出：

```text


24:30:00 (Full days: 0)

   
```

**`DateTimeInterface::diff()` range**

该方法返回的值是从 `$$this` 到达 `$$targetObject` 所需要的精确时间。因此，将 1 月 1 日与 12 月 31 日进行比较，返回的结果是 364，而不是 365 天（对于非闰年）。

```php

    
<?php
$originalTime = new DateTimeImmutable("2023-01-01 UTC");
$targetTime = new DateTimeImmutable("2023-12-31 UTC");
$interval = $originalTime->diff($targetTime);
echo "Full days: ", $interval->format("%a"), "\n";

   
```

以上示例会输出：

```text

    
Full days: 364

   
```

**`DateTime` 对象比较**

> `DateTimeImmutable` 和 `DateTime` 对象可以使用比较运算符进行比较。

```php


<?php
$date1 = new DateTime("now");
$date2 = new DateTime("tomorrow");

var_dump($date1 == $date2);
var_dump($date1 < $date2);
var_dump($date1 > $date2);

  
```

以上示例会输出：

```text


bool(false)
bool(true)
bool(false)

  
```

## 参见

 `DateInterval::format()` `DateTime::add()` `DateTime::sub()`
