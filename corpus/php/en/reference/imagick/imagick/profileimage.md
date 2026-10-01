---
id: "en-php-function-imagick-profileimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::profileImage"
title: "Adds or removes a profile from an image"
signature: "public bool Imagick::profileImage(string $name, [string $profile = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.profileimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds or removes a profile from an image

## Description

```php
public bool Imagick::profileImage(string $name, [string $profile = ...])
```

Adds or removes a ICC, IPTC, or generic profile from an image. If the `$profile` is `null`, it is removed from the image rather than added.

To remove every single profile from the image use `'*'` as the `$name` and `null` for the `$profile`.

## Parameters

- **`$name`** — The profile name.
- **`$profile`** — The profile data. If `null`, the specified profile will be deleted.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
