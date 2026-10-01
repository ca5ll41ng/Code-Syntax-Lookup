---
id: "en-php-function-datetime-serialize"
language: "php"
lang: "en"
category: "function"
name: "DateTime::__serialize"
aliases: ["DateTimeImmutable::__serialize","DateTimeInterface::__serialize"]
title: "Serialize a DateTime"
signature: "public array DateTime::__serialize()"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetime.serialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serialize a DateTime

## Description

```php
public array DateTime::__serialize()
```

```php
public array DateTimeImmutable::__serialize()
```

```php
public array DateTimeInterface::__serialize()
```

The __serialize() handler.

## Parameters

This function has no parameters.

## Return Values

The serialized representation of the `DateTime` object.

## Examples

**`DateTime::__serialize()` example**

```php


<?php

class CustomDateTimeImmutable extends DateTimeImmutable
{
    #[\Override]
    public function __serialize(): array
    {
        return [
            'date' => $this->format(DateTimeInterface::W3C),
            'timestamp' => $this->getTimestamp(),
            'timezone' => $this->getTimeZone()->getName(),
            'to' => 'Drink a cup of coffee',
        ];
    }
}

$date = new CustomDateTimeImmutable('2025-03-27');
var_dump(serialize($date));

   
```

The above example will output:

```text


string(171) "O:23:"CustomDateTimeImmutable":4:{s:4:"date";s:25:"2025-03-27T00:00:00+00:00";s:9:"timestamp";i:1743033600;s:8:"timezone";s:3:"UTC";s:2:"to";s:21:"Drink a cup of coffee";}"

   
```

## Notes

> An Error is thrown when attempting to unserialize a custom `DateTime` object if __serialize() is defined but __unserialize() is missing.

## See Also

 `DateTime::__unserialize()`
