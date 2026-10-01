---
id: "en-php-guide-xdiff-constants"
language: "php"
lang: "en"
category: "guide"
name: "xdiff.constants"
title: "Predefined Constants"
module: "xdiff"
source_url: "https://www.php.net/manual/en/xdiff.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`XDIFF_PATCH_NORMAL` (`int`)** — This flag indicates that `xdiff_string_patch()` and `xdiff_file_patch()` functions should create result by applying patch to original content thus creating newer version of file. This is the default mode of operation.
- **`XDIFF_PATCH_REVERSE` (`int`)** — This flag indicated that `xdiff_string_patch()` and `xdiff_file_patch()` functions should create result by reversing patch changed from newer content thus creating original version.
