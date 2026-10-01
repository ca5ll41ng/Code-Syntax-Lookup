---
id: "en-php-guide-xattr-constants"
language: "php"
lang: "en"
category: "guide"
name: "xattr.constants"
title: "Predefined Constants"
module: "xattr"
source_url: "https://www.php.net/manual/en/xattr.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`XATTR_ROOT` (`int`)** — Set attribute in root (trusted) namespace. Requires root privileges.
- **`XATTR_DONTFOLLOW` (`int`)** — Do not follow the symbolic link but operate on symbolic link itself.
- **`XATTR_CREATE` (`int`)** — Function will fail if extended attribute already exists.
- **`XATTR_REPLACE` (`int`)** — Function will fail if extended attribute doesn't exist.
