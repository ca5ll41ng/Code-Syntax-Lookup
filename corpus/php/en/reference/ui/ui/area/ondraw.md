---
id: "en-php-function-ui-area-ondraw"
language: "php"
lang: "en"
category: "function"
name: "UI\\Area::onDraw"
title: "Draw Callback"
signature: "protected UI\\Area::onDraw(UI\\Draw\\Pen $pen, UI\\Size $areaSize, UI\\Point $clipPoint, UI\\Size $clipSize)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-area.ondraw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draw Callback

## Description

```php
protected UI\Area::onDraw(UI\Draw\Pen $pen, UI\Size $areaSize, UI\Point $clipPoint, UI\Size $clipSize)
```

Shall be invoked when this Area requires redrawing

## Parameters

- **`$pen`** — A Pen suitable for drawing in this Area
- **`$areaSize`** — The size of the Area
- **`$clipPoint`** — The clip point of the Area
- **`$clipSize`** — The clip size of the Area
