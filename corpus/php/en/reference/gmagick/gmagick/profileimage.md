---
id: "en-php-function-gmagick-profileimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::profileimage"
title: "Adds or removes a profile from an image"
signature: "public Gmagick Gmagick::profileimage(string $name, string $profile)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.profileimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds or removes a profile from an image

## Description

```php
public Gmagick Gmagick::profileimage(string $name, string $profile)
```

Adds or removes a ICC, IPTC, or generic profile from an image. If the profile is `null`, it is removed from the image otherwise added. Use a name of `*` and a profile of `null` to remove all profiles from the image.

## Parameters

- **`$name`** — Name of profile to add or remove: ICC, IPTC, or generic profile.
- **`$profile`** — The profile.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
