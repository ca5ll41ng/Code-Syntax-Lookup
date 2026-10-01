---
id: "en-php-function-ui-draw-brush-gradient-addstop"
language: "php"
lang: "en"
category: "function"
name: "UI\\Draw\\Brush\\Gradient::addStop"
title: "Stop Manipulation"
signature: "public int UI\\Draw\\Brush\\Gradient::addStop(float $position, UI\\Draw\\Color $color)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-draw-brush-gradient.addstop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stop Manipulation

## Description

```php
public int UI\Draw\Brush\Gradient::addStop(float $position, UI\Draw\Color $color)
```

```php
public int UI\Draw\Brush\Gradient::addStop(float $position, int $color)
```

Shall add a stop of the given color at the given position

## Parameters

- **`$position`** — The position for the new stop
- **`$color`** — The color for the new stop, may be UI\Draw\Color or RRGGBBAA

## Return Values

Total number of stops
