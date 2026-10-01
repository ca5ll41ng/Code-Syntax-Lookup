---
id: "en-php-function-messageformatter-getlocale"
language: "php"
lang: "en"
category: "function"
name: "MessageFormatter::getLocale"
aliases: ["msgfmt_get_locale"]
title: "Get the locale for which the formatter was created"
signature: "public string MessageFormatter::getLocale()"
module: "intl"
source_url: "https://www.php.net/manual/en/messageformatter.getlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the locale for which the formatter was created

## Description

Object-oriented style

```php
public string MessageFormatter::getLocale()
```

Procedural style

```php
string msgfmt_get_locale(MessageFormatter $formatter)
```

Get the locale for which the formatter was created.

## Parameters

- **`$formatter`** — The formatter resource

## Return Values

The locale name

## Examples

**`msgfmt_get_locale()` example**

```php


<?php
$fmt = msgfmt_create('en_US', "Number {0,number}");
echo msgfmt_get_locale($fmt);
?>

   
```

**OO example**

```php


<?php
$fmt = new MessageFormatter('en_US', "Number {0,number}");
echo $fmt->getLocale();
?>

   
```

The above example will output:

```text


en_US

  
```

## See Also

`msgfmt_create()`
