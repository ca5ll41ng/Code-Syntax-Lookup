---
id: "en-php-function-datetimeinterface-getmicrosecond"
language: "php"
lang: "en"
category: "function"
name: "DateTimeInterface::getMicrosecond"
aliases: ["DateTimeImmutable::getMicrosecond","DateTime::getMicrosecond"]
title: "Gets the microsecond part of the Unix timestamp"
signature: "public int DateTimeInterface::getMicrosecond()"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeinterface.getmicrosecond.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the microsecond part of the Unix timestamp

## Description

```php
public int DateTimeInterface::getMicrosecond()
```

```php
public int DateTimeImmutable::getMicrosecond()
```

```php
public int DateTime::getMicrosecond()
```

Gets the microsecond part of the Unix timestamp.

## Parameters

This function has no parameters.

## Return Values

Returns the microsecond part of the Unix timestamp representing the date.

## Examples

**`DateTimeInterface::getMicrosecond()` example**

```php


<?php
$date = new DateTimeImmutable('2024-01-01 12:34:56.789123');
var_dump($date->format('u'));
var_dump($date->getMicrosecond());
?>

   
```

The above example will output:

```text


string(6) "789123"
int(789123)

   
```

## See Also

 `DateTimeInterface::getTimestamp()` `DateTimeInterface::format()`
