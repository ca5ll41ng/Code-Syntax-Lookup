---
id: "en-php-function-gmagickdraw-setfontstyle"
language: "php"
lang: "en"
category: "function"
name: "GmagickDraw::setfontstyle"
title: "Sets the font style to use when annotating with text"
signature: "public GmagickDraw GmagickDraw::setfontstyle(int $style)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickdraw.setfontstyle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the font style to use when annotating with text

## Description

```php
public GmagickDraw GmagickDraw::setfontstyle(int $style)
```

Sets the font style to use when annotating with text. The AnyStyle enumeration acts as a wild-card "don't care" option.

## Parameters

- **`$style`** — Font style (NormalStyle, ItalicStyle, ObliqueStyle, AnyStyle)

## Return Values

The `GmagickDraw` object.
