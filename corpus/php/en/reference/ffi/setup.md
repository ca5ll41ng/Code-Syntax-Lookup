---
id: "en-php-guide-ffi-setup"
language: "php"
lang: "en"
category: "guide"
name: "ffi.setup"
title: "Getting Started"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

This extension requires the [libffi library]() to be installed.

 {{{ Installation 

  

 }}} 

## Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| ffi.enable | "preload" | `INI_SYSTEM` |  |
| ffi.preload | "" | `INI_SYSTEM` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$ffi.enable` `string`** — Allows enabling (`"true"`) or disabling (`"false"`) FFI API usage, or restricting it only to the CLI SAPI and preloaded files (`"preload"`). — The FFI API restrictions only affect the `FFI` class, but not overloaded functions of `FFI\CData` objects. This means that it is possible to create some `FFI\CData` objects in preloaded files, and then to use these directly in PHP scripts.
- **`$ffi.preload` `string`** — Allows preloading of FFI bindings during startup, which is not possible with `FFI::load()` if opcache.preload_user is set. This directive accepts a `DIRECTORY_SEPARATOR` delimited list of filenames. The preloaded bindings can be accessed by calling `FFI::scope()`.
