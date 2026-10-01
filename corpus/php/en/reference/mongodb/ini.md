---
id: "en-php-guide-mongodb-configuration"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.configuration"
title: "Runtime Configuration"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| mongodb.debug | "" | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$mongodb.debug` `string`** — This option can be used to enable or disable trace-level debug logging in the extension (and libmongoc). — Specify an empty string, `"0"`, `"off"`, `"no"`, or `"false"` to disable logging. — Specify `"stderr"` or `"stdout"` to log to `stderr` or `stdout`, respectively. — Specify `"1"`, `"on"`, `"yes"`, or `"true"` to log to a new temporary file within the default system temp directory (i.e. `sys_get_temp_dir()`). — Specify any other string to log to a new temporary file within that directory. If the directory cannot be used, the default system temp directory will be used instead.
  > Please note that the debug log can contain sensitive information, such as credentials to the MongoDB server and full documents written to or read from the server. Please review any debug logs before sharing them with other people.
