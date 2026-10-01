---
id: "en-php-function-datetimeimmutable-construct"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::__construct"
aliases: ["date_create_immutable"]
title: "Returns new DateTimeImmutable object"
signature: "public DateTimeImmutable::__construct(string $datetime = \"now\", DateTimeZone|null $timezone = null)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns new DateTimeImmutable object

## Description

Object-oriented style

```php
public DateTimeImmutable::__construct(string $datetime = "now", DateTimeZone|null $timezone = null)
```

Procedural style

```php
DateTimeImmutable|false date_create_immutable(string $datetime = "now", DateTimeZone|null $timezone = null)
```

Returns new a DateTimeImmutable object.

## Parameters

- **`$datetime`** — A date/time string. Valid formats are explained in Date and Time Formats. — Enter `"now"` here to obtain the current time when using the `$timezone` parameter.
- **`$timezone`** — A `DateTimeZone` object representing the timezone of `$datetime`. — If `$timezone` is omitted or `null`, the current timezone will be used.
  > The `$timezone` parameter and the current timezone are ignored when the `$datetime` parameter either is a UNIX timestamp (e.g. `@946684800`) or specifies a timezone (e.g. `2010-01-28T15:00:00+02:00`, or `2010-07-05T06:00:00Z`).



## Return Values

Returns a new DateTimeImmutable instance.

## Errors/Exceptions

If an invalid Date/Time string is passed, DateMalformedStringException is thrown. Previous to PHP 8.3, this was Exception.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Now throws DateMalformedStringException if an invalid string is passed, instead of Exception. |
| 7.1.0 | From now on microseconds are filled with actual value. Not with '00000'. |

## Examples

**`DateTimeImmutable::__construct()` example**

Object-oriented style

```php


<?php
try {
    $date = new DateTimeImmutable('2000-01-01');
} catch (Exception $e) {
    echo $e->getMessage();
    exit(1);
}

echo $date->format('Y-m-d');

   
```

The above example will output:

```text


2000-01-01

   
```

Procedural style

```php


<?php
$date = date_create('2000-01-01');
if (!$date) {
    $e = date_get_last_errors();
    foreach ($e['errors'] as $error) {
        echo "$error\n";
    }
    exit(1);
}

echo date_format($date, 'Y-m-d');

   
```

The above example will output:

```text


2000-01-01

   
```

**Intricacies of `DateTimeImmutable::__construct()`**

```php


<?php
date_default_timezone_set('America/Jamaica');

// Specified date/time in PHP's default time zone.
$date = new DateTimeImmutable('2000-01-01');
echo $date->format('Y-m-d H:i:sP') . "\n";

// Specified date/time in the specified time zone.
$date = new DateTimeImmutable('2000-01-01', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

// Current date/time in your PHP's default time zone.
$date = new DateTimeImmutable();
echo $date->format('Y-m-d H:i:sP') . "\n";

// Current date/time in the specified time zone.
$date = new DateTimeImmutable('now', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

// Using a UNIX timestamp.  Notice the result is in the UTC time zone.
$date = new DateTimeImmutable('@946684800');
echo $date->format('Y-m-d H:i:sP') . "\n";

// Non-existent values roll over.
$date = new DateTimeImmutable('2000-02-30');
echo $date->format('Y-m-d H:i:sP') . "\n";

   
```

The above example will output something similar to:

```text


2000-01-01 00:00:00-05:00
2000-01-01 00:00:00+12:00
2010-04-24 10:24:16-04:00
2010-04-25 02:24:16+12:00
2000-01-01 00:00:00+00:00
2000-03-01 00:00:00-05:00

   
```

> Rolled over dates can be detected by checking for warnings using `DateTimeImmutable::getLastErrors()`.

**Changing the associated timezone**

```php


<?php
$timeZone = new \DateTimeZone('Asia/Tokyo');

$time = new \DateTimeImmutable();
$time = $time->setTimezone($timeZone);

echo $time->format('Y/m/d H:i:s e'), "\n";

   
```

The above example will output something similar to:

```text


2022/08/12 23:49:23 Asia/Tokyo

   
```

**Using a relative date/time string**

```php


<?php
$time = new \DateTimeImmutable("-1 year");

echo $time->format('Y/m/d H:i:s'), "\n";

   
```

The above example will output something similar to:

```text


2021/08/12 15:43:51

   
```
