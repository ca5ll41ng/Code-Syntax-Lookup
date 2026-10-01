---
id: "en-php-guide-runkit7-configuration"
language: "php"
lang: "en"
category: "guide"
name: "runkit7.configuration"
title: "Runtime Configuration"
module: "runkit7"
source_url: "https://www.php.net/manual/en/runkit7.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| runkit.superglobal | "" | `INI_PERDIR` |  |
| runkit.internal_override | "0" | `INI_SYSTEM` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$runkit.superglobal` `string`** — Comma-separated list of variable names to be treated as superglobals. This value should be set in the systemwide php.ini file, but may work in perdir configuration contexts depending on your SAPI.
  **Custom Superglobals with runkit.superglobal=_FOO,_BAR in php.ini**

  ```php

        
  <?php
  function show_values() {
    echo "Foo is $_FOO\n";
    echo "Bar is $_BAR\n";
    echo "Baz is $_BAZ\n";
  }

  $_FOO = 'foo';
  $_BAR = 'bar';
  $_BAZ = 'baz';

  /* Displays foo and bar, but not baz */
  show_values();
  ?>

       
  ```


- **`$runkit.internal_override` `bool`** — Enables ability to modify/rename/remove internal functions.
