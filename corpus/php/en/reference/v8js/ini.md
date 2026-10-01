---
id: "en-php-guide-v8js-configuration"
language: "php"
lang: "en"
category: "guide"
name: "v8js.configuration"
title: "Runtime Configuration"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| v8js.max_disposed_contexts | 25 | `INI_ALL` |  |
| v8js.flags |  | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$v8js.max_disposed_contexts` `int`** — Sets limit for disposed contexts before forcing V8 to do garbage collection.
- **`$v8js.flags` `string`** — Sets V8 command line flags. The list of available flags can be obtained in CLI mode by setting this parameter to `--help`. Example: ```text $ php -r 'ini_set("v8js.flags", "--help"); new V8Js;' | less ``` > For these flags to be effective in runtime the ini_set() call has to be done before any V8Js objects are instantiated!
