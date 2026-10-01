---
id: "en-php-guide-xsl-constants"
language: "php"
lang: "en"
category: "guide"
name: "xsl.constants"
title: "Predefined Constants"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsl.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`XSL_CLONE_AUTO` (`int`)**
- **`XSL_CLONE_NEVER` (`int`)**
- **`XSL_CLONE_ALWAYS` (`int`)**
- **`LIBXSLT_VERSION` (`int`)** — libxslt version like 10117.
- **`LIBXSLT_DOTTED_VERSION` (`string`)** — libxslt version like 1.1.17.
- **`LIBEXSLT_VERSION` (`int`)** — libexslt version like 813.
- **`LIBEXSLT_DOTTED_VERSION` (`string`)** — libexslt version like 1.1.17.
- **`XSL_SECPREF_NONE` (`int`)** — Deactivate all security restrictions.
- **`XSL_SECPREF_READ_FILE` (`int`)** — Disallows reading files.
- **`XSL_SECPREF_WRITE_FILE` (`int`)** — Disallows writing files.
- **`XSL_SECPREF_CREATE_DIRECTORY` (`int`)** — Disallows creating directories.
- **`XSL_SECPREF_READ_NETWORK` (`int`)** — Disallows reading network files.
- **`XSL_SECPREF_WRITE_NETWORK` (`int`)** — Disallows writing network files.
- **`XSL_SECPREF_DEFAULT` (`int`)** — Disallows all write access, i.e. a bitmask of `XSL_SECPREF_WRITE_NETWORK` | `XSL_SECPREF_CREATE_DIRECTORY` | `XSL_SECPREF_WRITE_FILE`.
