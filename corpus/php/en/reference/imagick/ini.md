---
id: "en-php-guide-imagick-configuration"
language: "php"
lang: "en"
category: "guide"
name: "imagick.configuration"
title: "Runtime Configuration"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| imagick.locale_fix | `false` | `INI_ALL` | Available since Imagick 2.1.0 |
| imagick.progress_monitor | `false` | `INI_SYSTEM` | Available since Imagick 2.2.2 |
| imagick.skip_version_check | `false` | `INI_SYSTEM` | Available since Imagick 3.3.0 |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$imagick.locale_fix` `bool`** — Fixes a drawing bug with locales that use '`,`' as float separators.
- **`$imagick.progress_monitor` `bool`** — Used to enable the image progress monitor.
- **`$imagick.skip_version_check` `bool`** — When Imagick is loaded, it checks the version number of ImageMagick that it was compiled against, with the version number that is currently being used and will give a warning if they don't match. This warning can be suppressed by enabling this ini setting. — Using a version of Imagick that was compiled against a different version of ImageMagick than the one being used is not recommended. Although it may appear to work, it can lead to random crashes or other undefined behaviour.
