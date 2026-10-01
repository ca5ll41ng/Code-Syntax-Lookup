---
id: "en-php-guide-trader-configuration"
language: "php"
lang: "en"
category: "guide"
name: "trader.configuration"
title: "Runtime Configuration"
module: "trader"
source_url: "https://www.php.net/manual/en/trader.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| trader.real_precision | 3 | `INI_ALL` | Since trader 0.2.1 |
| trader.real_round_mode | HALF_DOWN | `INI_ALL` | Since trader 0.3.0 |

Here's a short explanation of the configuration directives.

- **`$trader.real_precision` `int`** — All the values in the returned arrays will be rounded to this precision. However the calculations inside TA-Lib happen with unrounded values.
- **`$trader.real_round_mode` `string`** — Controls the trader real rounding policy. Valid values are `HALF_UP`, `HALF_DOWN`, `HALF_EVEN` and `HALF_ODD`. The behaviour is identical to the round() function used with the mode argument.
