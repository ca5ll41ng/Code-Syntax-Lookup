---
id: "en-php-function-ui-draw-pen-stroke"
language: "php"
lang: "en"
category: "function"
name: "UI\\Draw\\Pen::stroke"
title: "Stroke a Path"
signature: "public UI\\Draw\\Pen::stroke(UI\\Draw\\Path $path, UI\\Draw\\Brush $with, UI\\Draw\\Stroke $stroke)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-draw-pen.stroke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stroke a Path

## Description

```php
public UI\Draw\Pen::stroke(UI\Draw\Path $path, UI\Draw\Brush $with, UI\Draw\Stroke $stroke)
```

```php
public UI\Draw\Pen::stroke(UI\Draw\Path $path, UI\Draw\Color $with, UI\Draw\Stroke $stroke)
```

```php
public UI\Draw\Pen::stroke(UI\Draw\Path $path, int $with, UI\Draw\Stroke $stroke)
```

Shall stroke the given path

## Parameters

- **`$path`** — The path to stroke
- **`$with`** — The color or brush to stroke with
- **`$stroke`** — The configuration of the stroke
