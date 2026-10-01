---
id: "en-php-function-function-mb-regex-set-options"
language: "php"
lang: "en"
category: "function"
name: "mb_regex_set_options"
title: "Set/Get the default options for mbregex functions"
signature: "string mb_regex_set_options(string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-regex-set-options.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set/Get the default options for mbregex functions

## Description

```php
string mb_regex_set_options(string|null $options = null)
```

Sets the default options described by `$options` for multibyte regex functions.

## Parameters

- **`$options`** — The options to set. This is a string where each character is an option. To set a mode, the mode character must be the last one set, however there can only be set one mode but multiple options.
  | Option | Meaning |  |
  | --- | --- | --- |
  | i | Ambiguity match on |  |
  | x | Enables extended pattern form |  |
  | m | `'.'` matches with newlines |  |
  | s | `'^'` -> `'\A'`, `'$'` -> `'\Z'` |  |
  | p | Same as both the `m` and `s` options |  |
  | l | Finds longest matches |  |
  | n | Ignores empty matches |  |
  | e | `eval()` resulting code | Deprecated as of PHP 7.1.0 and removed as of PHP 8.0.0 |


  > The `"e"` option has no effect when set through `mb_regex_set_options()`. Use it with `mb_ereg_replace()` or `mb_eregi_replace()`.


  | Mode | Meaning |
  | --- | --- |
  | j | Java (Sun java.util.regex) |
  | u | GNU regex |
  | g | grep |
  | c | Emacs |
  | r | Ruby |
  | z | Perl |
  | b | POSIX Basic regex |
  | d | POSIX Extended regex |



## Return Values

The previous options. If `$options` is omitted or `null`, it returns the `string` that describes the current options.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | If the parameter `$options` is given and not `null`, the *previous* options are returned. Formerly, the *current* options have been returned. |
| 8.0.0 | `$options` is nullable now. |
| 8.0.0 | The `"e"` option now throws a `ValueError`. |
| 7.1.0 | The `"e"` option now emits an `E_DEPRECATED`. |

## See Also

`mb_split()` `mb_ereg()` `mb_eregi()`
