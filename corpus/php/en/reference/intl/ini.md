---
id: "en-php-guide-intl-configuration"
language: "php"
lang: "en"
category: "guide"
name: "intl.configuration"
title: "Runtime Configuration"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| intl.default_locale |  | `INI_ALL` |  |
| intl.error_level | 0 | `INI_ALL` |  |
| intl.use_exceptions | 0 | `INI_ALL` | Available since PECL 3.0.0a1 |

Here's a short explanation of the configuration directives.

- **`$intl.default_locale` `string`** — The locale that will be used in intl functions when none is specified (either by omitting the corresponding argument or by passing `null`). These are ICU locales, not system locales. The built-in ICU locales and their data can be explored at [](). — The default value is empty, which forces the usage of ICU's default locale. Once set, the ini setting cannot be reset to this default value. It is not recommended that this default be relied on, as its effective value depends on the server's environment.
- **`$intl.error_level` `int`** — The type of the error messages generated when an error occurs in ICU functions. This is a PHP error level, such as `E_WARNING`. It can be set to `0` in order to inhibit the messages. This does not affect the return values indicating error or the values returned by `intl_get_error_code()` or by the class specific methods for retrieving error codes and messages. — The default value is `0`.
- **`$intl.use_exceptions` `int`** — If set to true, an exception will be raised whenever an error occurs in an intl function. The exception will be of type `IntlException`. This is possibly in addition to the error message generated due to intl.error_level. — The default value is `false`.
