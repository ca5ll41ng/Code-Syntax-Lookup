---
id: "en-php-guide-apcu-setup"
language: "php"
lang: "en"
category: "guide"
name: "apcu.setup"
title: "Getting Started"
module: "apcu"
source_url: "https://www.php.net/manual/en/apcu.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Installation

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [apcu](apcu).

> PHP 7 has a separate module ([apcu-bc]()) for backwards compatibility with APC.
>
> In backward compatibility mode, APCu registers the applicable APC functions with backward compatible prototypes.
>
> Where an APC function accepted `$cache_type`, it is simply ignored by the backward compatible version, and omitted from the prototype for the APCu version.

> As of PHP 8.0.0, apcu-bc is no longer supported.

> On Windows, APCu needs a temp path to exist, and be writable by the web server. It checks the TMP, TEMP and USERPROFILE environment variables in that order and finally tries the WINDOWS directory if none of those are set.

> For more in-depth, highly technical implementation details, see the [developer-supplied TECHNOTES file]().

APCu sources can be found [here](krakjoe/apcu).
