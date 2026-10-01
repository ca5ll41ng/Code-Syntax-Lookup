---
id: "en-php-function-function-pspell-add-to-session"
language: "php"
lang: "en"
category: "function"
name: "pspell_add_to_session"
title: "Add the word to the wordlist in the current session"
signature: "bool pspell_add_to_session(PSpell\\Dictionary $dictionary, string $word)"
module: "pspell"
source_url: "https://www.php.net/manual/en/function.pspell-add-to-session.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add the word to the wordlist in the current session

## Description

```php
bool pspell_add_to_session(PSpell\Dictionary $dictionary, string $word)
```

`pspell_add_to_session()` adds a word to the wordlist associated with the current session. It is very similar to `pspell_add_to_personal()`

## Parameters

- **`$dictionary`** — An `PSpell\Dictionary` instance.
- **`$word`** — The added word.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$dictionary` parameter expects an `PSpell\Dictionary` instance now; previously, a `resource` was expected. |
