---
id: "en-php-guide-intl-installation"
language: "php"
lang: "en"
category: "guide"
name: "intl.installation"
title: "Installation"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

--enable-intl will enable the extension while compiling PHP.

If your ICU is installed to a non-standard directory then you might want to specify its location in `LD_LIBRARY_PATH` environment variable so that dynamic linker can find it:

```text
$ export LD_LIBRARY_PATH=/opt/icu/lib
```

Otherwise, if PHP and ICU are installed to their default locations, then the additional options to configure are not needed.
