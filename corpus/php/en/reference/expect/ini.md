---
id: "en-php-guide-expect-configuration"
language: "php"
lang: "en"
category: "guide"
name: "expect.configuration"
title: "Runtime Configuration"
module: "expect"
source_url: "https://www.php.net/manual/en/expect.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

In order to configure expect extension, there are configuration options in the configuration file php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| expect.timeout | "10" | `INI_ALL` |  |
| expect.loguser | "1" | `INI_ALL` |  |
| expect.logfile | "" | `INI_ALL` |  |
| expect.match_max | "" | `INI_ALL` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$expect.timeout` `int`** — The timeout period for waiting for the data, when using the `expect_expectl()` function. — A value of "-1" disables a timeout from occurring.
  > A value of "0" causes the `expect_expectl()` function to return immediately.


- **`$expect.loguser` `bool`** — Whether expect should send any output from the spawned process to stdout. Since interactive programs typically echo their input, this usually suffices to show both sides of the conversation.
- **`$expect.logfile` `string`** — Name of the file, where the output from the spawned process will be written. If this file doesn't exist, it will be created.
  > If this configuration is not empty, the output is written regardless of the value of expect.loguser.


- **`$expect.match_max` `int`** — Changes default size (2000 bytes) of the buffer used to match asterisks in patterns.
