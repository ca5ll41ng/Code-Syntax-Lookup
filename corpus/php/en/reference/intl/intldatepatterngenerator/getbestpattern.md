---
id: "en-php-function-intldatepatterngenerator-getbestpattern"
language: "php"
lang: "en"
category: "function"
name: "IntlDatePatternGenerator::getBestPattern"
title: "Determines the most suitable date/time format"
signature: "public string|false IntlDatePatternGenerator::getBestPattern(string $skeleton)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldatepatterngenerator.getbestpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines the most suitable date/time format

## Description

```php
public string|false IntlDatePatternGenerator::getBestPattern(string $skeleton)
```

Determines which date/time format is most suitable for a particular locale.

## Parameters

- **`$skeleton`** — The skeleton.

## Return Values

Returns an ICU date/time pattern accepted by `IntlDateFormatter` on success, or `false` on failure.

## Examples

**`IntlDatePatternGenerator::getBestPattern()` example**

```php


<?php

$skeleton = 'YYYYMMdd';
$today = \DateTimeImmutable::createFromFormat('Y-m-d', '2021-04-24');
 
$patternGenerator = new \IntlDatePatternGenerator('de_DE');
$pattern = $patternGenerator->getBestPattern($skeleton);
echo 'de: ', \IntlDateFormatter::formatObject($today, $pattern, 'de_DE'), "\n";
 
$patternGenerator = new \IntlDatePatternGenerator('en_US');
$pattern = $patternGenerator->getBestPattern($skeleton);
echo 'en: ', \IntlDateFormatter::formatObject($today, $pattern, 'en_US');
?>

    
```

The above example will output:

```text


de: 24.04.2021
en: 04/24/2021

    
```
