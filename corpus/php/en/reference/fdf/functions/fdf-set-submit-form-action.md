---
id: "en-php-function-function-fdf-set-submit-form-action"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_submit_form_action"
title: "Sets a submit form action of a field"
signature: "bool fdf_set_submit_form_action(resource $fdf_document, string $fieldname, int $trigger, string $script, int $flags)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-submit-form-action.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a submit form action of a field

## Description

```php
bool fdf_set_submit_form_action(resource $fdf_document, string $fieldname, int $trigger, string $script, int $flags)
```

Sets a submit form action for the given field.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`** — Name of the FDF field, as a string.
- **`$trigger`**
- **`$script`**
- **`$flags`**

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_set_javascript_action()`
