---
id: "en-php-function-ui-controls-form-append"
language: "php"
lang: "en"
category: "function"
name: "UI\\Controls\\Form::append"
title: "Append Control"
signature: "public int UI\\Controls\\Form::append(string $label, UI\\Control $control, bool $stretchy = false)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-controls-form.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append Control

## Description

```php
public int UI\Controls\Form::append(string $label, UI\Control $control, bool $stretchy = false)
```

Shall append the control to the form, and set the label

## Parameters

- **`$label`** — The text for the label
- **`$control`** — A control
- **`$stretchy`** — Should be set true to stretch the control

## Return Values

Shall return the index of the appended control, may be 0
