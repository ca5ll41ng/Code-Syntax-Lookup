---
id: "en-php-guide-class-luasandbox"
language: "php"
lang: "en"
category: "guide"
name: "class.luasandbox"
title: "The LuaSandbox class"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/class.luasandbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The LuaSandbox class

LuaSandbox

   Introduction  The LuaSandbox class creates a Lua environment and allows for execution of Lua code.      Class Synopsis   `LuaSandbox`    `LuaSandbox`      `const` `int` `LuaSandbox::SAMPLES` 0   `const` `int` `LuaSandbox::SECONDS` 1   `const` `int` `LuaSandbox::PERCENT` 2         Predefined Constants 
- **`LuaSandbox::SAMPLES`** — Used with `LuaSandbox::getProfilerFunctionReport()` to return timings in samples.
- **`LuaSandbox::SECONDS`** — Used with `LuaSandbox::getProfilerFunctionReport()` to return timings in seconds.
- **`LuaSandbox::PERCENT`** — Used with `LuaSandbox::getProfilerFunctionReport()` to return timings in percentages of the total.
