---
id: "en-php-function-gmagick-removeimageprofile"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::removeimageprofile"
title: "Removes the named image profile and returns it"
signature: "public string Gmagick::removeimageprofile(string $name)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.removeimageprofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes the named image profile and returns it

## Description

```php
public string Gmagick::removeimageprofile(string $name)
```

Removes the named image profile and returns it.

## Parameters

- **`$name`** — Name of profile to return: ICC, IPTC, or generic profile.

## Return Values

The named profile.

## Errors/Exceptions

Throws an `GmagickException` on error.
