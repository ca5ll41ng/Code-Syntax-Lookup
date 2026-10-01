---
id: "en-php-function-gmagick-setimageprofile"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setimageprofile"
title: "Adds a named profile to the Gmagick object"
signature: "public Gmagick Gmagick::setimageprofile(string $name, string $profile)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setimageprofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a named profile to the Gmagick object

## Description

```php
public Gmagick Gmagick::setimageprofile(string $name, string $profile)
```

Adds a named profile to the Gmagick object. If a profile with the same name already exists, it is replaced. This method differs from the Gmagick::profileimage() method in that it does not apply any CMS color profiles.

## Parameters

- **`$name`** — Name of profile to add or remove: ICC, IPTC, or generic profile.
- **`$profile`** — The profile.

## Return Values

The Gmagick object on success.

## Errors/Exceptions

Throws an `GmagickException` on error.
