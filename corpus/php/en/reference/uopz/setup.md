---
id: "en-php-guide-uopz-setup"
language: "php"
lang: "en"
category: "guide"
name: "uopz.setup"
title: "Getting Started"
module: "uopz"
source_url: "https://www.php.net/manual/en/uopz.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

As of uopz 5.0 PHP 7.0 is required. As of uopz 5.1, PHP 7.1+ is required.

## Installation

uopz releases are hosted by PECL and the source code by [github](krakjoe/uopz), the easiest route to installation is the normal PECL route: [uopz](uopz).

Windows users can download prebuilt release binaries from the [PECL](uopz) website.

As of uopz 5.0.0 the extension must be loaded as extension. Before this version it must be loaded as zend_extension.

## Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| uopz.disable | "0" | `INI_SYSTEM` | Available as of uopz 5.0.2 |
| uopz.exit | "0" | `INI_SYSTEM` | Available as of uopz 6.0.1 |
| uopz.overloads | "1" | `INI_SYSTEM` | Available as of uopz 2.0.2. Removed as of uopz 5.0.0. |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$uopz.disable` `bool`** — If enabled, uopz should stop having any effect on the engine.
- **`$uopz.exit` `bool`** — Whether to allow the execution of exit opcodes or not. This setting can be overridden during runtime by calling `uopz_allow_exit()`.
- **`$uopz.overloads` `bool`** — Enables the ability to use `uopz_overload()`.

> When running with OPcache enabled, it may be necessary to disable all OPcache optimizations (opcache.optimization_level=0).
