---
id: "en-php-function-function-timezone-name-from-abbr"
language: "php"
lang: "en"
category: "function"
name: "timezone_name_from_abbr"
title: "Returns a timezone name by guessing from abbreviation and UTC offset"
signature: "string|false timezone_name_from_abbr(string $abbr, int $utcOffset = -1, int $isDST = -1)"
module: "datetime"
source_url: "https://www.php.net/manual/en/function.timezone-name-from-abbr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a timezone name by guessing from abbreviation and UTC offset

## Description

```php
string|false timezone_name_from_abbr(string $abbr, int $utcOffset = -1, int $isDST = -1)
```

## Parameters

- **`$abbr`** — Time zone abbreviation.
- **`$utcOffset`** — Offset from GMT in seconds. Defaults to -1 which means that first found time zone corresponding to `$abbr` is returned. Otherwise exact offset is searched and only if not found then the first time zone with any offset is returned.
- **`$isDST`** — Daylight saving time indicator. Defaults to -1, which means that whether the time zone has daylight saving or not is not taken into consideration when searching. If this is set to 1, then the `$utcOffset` is assumed to be an offset with daylight saving in effect; if 0, then `$utcOffset` is assumed to be an offset without daylight saving in effect. If `$abbr` doesn't exist then the time zone is searched solely by the `$utcOffset` and `$isDST`.

## Return Values

Returns time zone name on success or `false` on failure.

## Examples

**A `timezone_name_from_abbr()` example**

```php


<?php
echo timezone_name_from_abbr("CET") . "\n";
echo timezone_name_from_abbr("", 3600, 0) . "\n";

    
```

The above example will output something similar to:

```text


Europe/Berlin
Europe/Paris

    
```

## See Also

`timezone_abbreviations_list()`
