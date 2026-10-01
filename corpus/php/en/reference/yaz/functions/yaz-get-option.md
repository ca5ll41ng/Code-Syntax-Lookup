---
id: "en-php-function-function-yaz-get-option"
language: "php"
lang: "en"
category: "function"
name: "yaz_get_option"
title: "Returns value of option for connection"
signature: "string yaz_get_option(resource $id, string $name)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-get-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns value of option for connection

## Description

```php
string yaz_get_option(resource $id, string $name)
```

Returns the value of the option specified with `$name`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$name`** — The option name.

## Return Values

Returns the value of the specified option or an empty string if the option wasn't set.

## See Also

The description of `yaz_set_option()` for available options
