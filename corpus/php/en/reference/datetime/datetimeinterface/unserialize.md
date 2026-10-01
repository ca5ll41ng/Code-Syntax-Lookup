---
id: "en-php-function-datetime-unserialize"
language: "php"
lang: "en"
category: "function"
name: "DateTime::__unserialize"
aliases: ["DateTimeImmutable::__unserialize","DateTimeInterface::__unserialize"]
title: "Unserialize an Datetime"
signature: "public void DateTime::__unserialize(array $data)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetime.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unserialize an Datetime

## Description

```php
public void DateTime::__unserialize(array $data)
```

```php
public void DateTimeImmutable::__unserialize(array $data)
```

```php
public void DateTimeInterface::__unserialize(array $data)
```

The __unserialize() handler.

## Parameters

- **`$data`** — The serialized `DateTime`.

## Return Values

No value is returned.

## Examples

**`DateTime::__unserialize()` example**

```php


<?php

class CustomDateTimeImmutable extends DateTimeImmutable
{
    #[\Override]
    public function __unserialize(array $data): void
    {
        echo "Time to `{$data['to']}`:\n\n";

        parent::__construct($data['date'], new DateTimeZone($data['timezone']));
    }
}

$serializedData = 'O:23:"CustomDateTimeImmutable":4:{s:4:"date";s:25:"2025-03-27T00:00:00+00:00";s:9:"timestamp";i:1743033600;s:8:"timezone";s:3:"UTC";s:2:"to";s:21:"Drink a cup of coffee";}';

var_dump(unserialize($serializedData));


   
```

The above example will output:

```text


Time to `Drink a cup of coffee`:

object(CustomDateTimeImmutable)#1 (3) {
  ["date"]=>
  string(26) "2025-03-27 00:00:00.000000"
  ["timezone_type"]=>
  int(1)
  ["timezone"]=>
  string(6) "+00:00"
}

   
```

## Notes

> An Error is thrown when attempting to unserialize a custom `DateTime` object if __serialize() is defined but __unserialize() is missing.

## See Also

 `DateTime::__serialize()`
