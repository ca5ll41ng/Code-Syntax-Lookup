---
id: "en-php-function-ui-draw-stroke-construct"
language: "php"
lang: "en"
category: "function"
name: "UI\\Draw\\Stroke::__construct"
title: "Construct a new Stroke"
signature: "public UI\\Draw\\Stroke::__construct(int $cap = UI\\Draw\\Line\\Cap::Flat, int $join = UI\\Draw\\Line\\Join::Miter, float $thickness = 1, float $miterLimit = 10)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-draw-stroke.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Stroke

## Description

```php
public UI\Draw\Stroke::__construct(int $cap = UI\Draw\Line\Cap::Flat, int $join = UI\Draw\Line\Join::Miter, float $thickness = 1, float $miterLimit = 10)
```

Shall construct a new Stroke

## Parameters

- **`$cap`** — UI\Draw\Line\Cap::Flat, UI\Draw\Line\Cap::Round, or UI\Draw\Line\Cap::Square
- **`$join`** — UI\Draw\Line\Join::Miter, UI\Draw\Line\Join::Round, or UI\Draw\Line\Join::Bevel
- **`$thickness`** — The thickness of the stroke
- **`$miterLimit`** — Miter limit (default is sensible for all supported platforms)
