---
id: "zh-php-guide-datetime-examples"
language: "php"
lang: "zh"
category: "guide"
name: "datetime.examples"
title: "示例"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 日期/时间算法

以下示例展示了有关 DST 转换和具有不同天数的月份的日期/时间算法的一些缺陷。

**DateTimeImmutable::add/sub 添加包含经过时间的间隔**

在 DST 转换上添加 PT24H 似乎会增加 23/25 小时（大多数时区）。

```php


<?php
$dt = new DateTimeImmutable("2015-11-01 00:00:00", new DateTimeZone("America/New_York"));
echo "Start: ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;
$dt = $dt->add(new DateInterval("PT3H"));
echo "End:   ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;

    
```

以上示例会输出：

```text


Start: 2015-11-01 00:00:00 -04:00
End:   2015-11-01 02:00:00 -05:00

    
```

**DateTimeImmutable::modify 和 strtotime 递增/减单个组件值**

在 DST 转换上添加 +24 小时将准确添加 24 小时，如日期/时间字符串中所示（除非开始/结束时间位于转换点）。

```php


<?php
$dt = new DateTimeImmutable("2015-11-01 00:00:00", new DateTimeZone("America/New_York"));
echo "Start: ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;
$dt = $dt->modify("+24 hours");
echo "End:   ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;

    
```

以上示例会输出：

```text


Start: 2015-11-01 00:00:00 -04:00
End:   2015-11-02 00:00:00 -05:00

    
```

**新增/减去时间可能会溢出/下溢日期**

就像 1 月 31 日 + 1 月会导致 3 月 2 日（闰年）或 3 月 3 日（平年）。

```php


<?php
echo "Normal year:\n"; // 2 月有 28 天
$dt = new DateTimeImmutable("2015-01-31 00:00:00", new DateTimeZone("America/New_York"));
echo "Start: ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;
$dt = $dt->modify("+1 month");
echo "End:   ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;

echo "Leap year:\n"; // 2 月有 29 天
$dt = new DateTimeImmutable("2016-01-31 00:00:00", new DateTimeZone("America/New_York"));
echo "Start: ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;
$dt = $dt->modify("+1 month");
echo "End:   ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;

    
```

以上示例会输出：

```text


Normal year:
Start: 2015-01-31 00:00:00 -05:00
End:   2015-03-03 00:00:00 -05:00
Leap year:
Start: 2016-01-31 00:00:00 -05:00
End:   2016-03-02 00:00:00 -05:00

    
```

要获取下个月的最后一天（例如防止溢出），可以使用 `last day of` 格式。

```php


<?php
echo "Normal year:\n"; // 2 月有 28 天
$dt = new DateTimeImmutable("2015-01-31 00:00:00", new DateTimeZone("America/New_York"));
echo "Start: ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;
$dt = $dt->modify("last day of next month");
echo "End:   ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;

echo "Leap year:\n"; // 2 月有 29 天
$dt = new DateTimeImmutable("2016-01-31 00:00:00", new DateTimeZone("America/New_York"));
echo "Start: ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;
$dt = $dt->modify("last day of next month");
echo "End:   ", $dt->format("Y-m-d H:i:s P"), PHP_EOL;

    
```

以上示例会输出：

```text


Normal year:
Start: 2015-01-31 00:00:00 -05:00
End:   2015-02-28 00:00:00 -05:00
Leap year:
Start: 2016-01-31 00:00:00 -05:00
End:   2016-02-29 00:00:00 -05:00

    
```
