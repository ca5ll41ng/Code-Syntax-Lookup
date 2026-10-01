---
id: "en-php-function-function-gettext"
language: "php"
lang: "en"
category: "function"
name: "gettext"
title: "Lookup a message in the current domain"
signature: "string gettext(string $message)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.gettext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lookup a message in the current domain

## Description

```php
string gettext(string $message)
```

Looks up a message in the current domain.

## Parameters

- **`$message`** — The message being translated.

## Return Values

Returns a translated `string` if one is found in the translation table, or the submitted message if not found.

## Examples

**`gettext()`-check**

```php


<?php
// Set language to German
putenv('LC_ALL=de_DE');
setlocale(LC_ALL, 'de_DE');

// Specify location of translation tables
bindtextdomain("myPHPApp", "./locale");

// Choose domain
textdomain("myPHPApp");

// Translation is looking for in ./locale/de_DE/LC_MESSAGES/myPHPApp.mo now

// Print a test message
echo gettext("Welcome to My PHP Application");

// Or use the alias _() for gettext()
echo _("Have a nice day");
?>

    
```

## Notes

> You may use the underscore character '_' as an alias to this function.

> Setting a language isn't enough for some systems and the `putenv()` should be used to define the current locale.

## See Also

`_()` `setlocale()`
