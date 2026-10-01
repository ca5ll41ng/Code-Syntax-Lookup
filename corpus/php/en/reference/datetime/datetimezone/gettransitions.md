---
id: "en-php-function-datetimezone-gettransitions"
language: "php"
lang: "en"
category: "function"
name: "DateTimeZone::getTransitions"
aliases: ["timezone_transitions_get"]
title: "Returns all transitions for the timezone"
signature: "public array|false DateTimeZone::getTransitions(int $timestampBegin = PHP_INT_MIN, int $timestampEnd = 2147483647)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimezone.gettransitions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns all transitions for the timezone

## Description

Object-oriented style

```php
public array|false DateTimeZone::getTransitions(int $timestampBegin = PHP_INT_MIN, int $timestampEnd = 2147483647)
```

Procedural style

```php
array|false timezone_transitions_get(DateTimeZone $object, int $timestampBegin = PHP_INT_MIN, int $timestampEnd = 2147483647)
```

## Parameters

- **`$object`** — Procedural style only: A `DateTimeZone` object returned by `timezone_open()`
- **`$timestampBegin`** — Begin timestamp.
- **`$timestampEnd`** — End timestamp.

## Return Values

Returns a numerically indexed array of transition arrays on success, or `false` on failure. DateTimeZone objects wrapping type 1 (UTC offsets) and type 2 (abbreviations) do not contain any transitions, and calling this method on them will return `false`.

If `$timestampBegin` is given, the first entry in the returned array will contain a transition element at the time of `$timestampBegin`.

| Key | Type | Description |
| --- | --- | --- |
| `ts` | `int` | Unix timestamp |
| `time` | `string` | `DateTimeInterface::ISO8601_EXPANDED` (PHP 8.2 and later), or `DateTimeInterface::ISO8601` (PHP 8.1 and lower) time string |
| `offset` | `int` | Offset to UTC in seconds |
| `isdst` | `bool` | Whether daylight saving time is active |
| `abbr` | `string` | Timezone abbreviation |

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The default value of `$timestampEnd` has been changed to 2147483647. Previously, it was `PHP_INT_MAX`. |

## Examples

**A `timezone_transitions_get()` example**

```php


<?php
$timezone = new DateTimeZone("Europe/London");
$transitions = $timezone->getTransitions();
print_r(array_slice($transitions, 0, 3));
?>

    
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [ts] => -2147483648
            [time] => 1901-12-13T20:45:52+00:00
            [offset] => -75
            [isdst] =>
            [abbr] => LMT
        )

    [1] => Array
        (
            [ts] => 442304971
            [time] => 1847-12-01T00:01:15+00:00
            [offset] => 0
            [isdst] =>
            [abbr] => GMT
        )

    [2] => Array
        (
            [ts] => -1691964000
            [time] => 1916-05-21T02:00:00+00:00
            [offset] => 3600
            [isdst] => 1
            [abbr] => BST
        )

)

    
```

**A `timezone_transitions_get()` example with `$timestampBegin` set**

```php


<?php
$timezone = new DateTimeZone("Europe/London");
$transitions = $timezone->getTransitions(time());
print_r(array_slice($transitions, 0, 3));
?>

    
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
        (
            [ts] => 1759058251
            [time] => 2025-09-28T11:17:31+00:00
            [offset] => 3600
            [isdst] => 1
            [abbr] => BST
        )

    [1] => Array
        (
            [ts] => 1761440400
            [time] => 2025-10-26T01:00:00+00:00
            [offset] => 0
            [isdst] => 
            [abbr] => GMT
        )

    [2] => Array
        (
            [ts] => 1774746000
            [time] => 2026-03-29T01:00:00+00:00
            [offset] => 3600
            [isdst] => 1
            [abbr] => BST
        )

)

    
```
