---
id: "en-php-function-v8js-registerextension"
language: "php"
lang: "en"
category: "function"
name: "V8Js::registerExtension"
title: "Register Javascript extensions for V8Js"
signature: "public static bool V8Js::registerExtension(string $extension_name, string $script, array $dependencies = array(), bool $auto_enable = false)"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.registerextension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register Javascript extensions for V8Js

## Description

```php
public static bool V8Js::registerExtension(string $extension_name, string $script, array $dependencies = array(), bool $auto_enable = false)
```

Registers passed Javascript `$script` as extension to be used in `V8Js` contexts.

## Parameters

- **`$extension_name`** — Name of the extension to be registered.
- **`$script`** — The Javascript code to be registered.
- **`$dependencies`** — Array of extension names the extension to be registered depends on. Any such extension is enabled automatically when this extension is loaded. > All extensions, including the dependencies, must be registered before any `V8Js` are created which use them.
- **`$auto_enable`** — If set to `true`, the extension will be enabled automatically in all `V8Js` contexts.

## Return Values

Returns `true` if extension was registered successfully, `false` otherwise.
