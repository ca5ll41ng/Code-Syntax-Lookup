---
id: "en-php-function-evembed-sweep"
language: "php"
lang: "en"
category: "function"
name: "EvEmbed::sweep"
title: "Make a single, non-blocking sweep over the embedded loop"
signature: "public void EvEmbed::sweep()"
module: "ev"
source_url: "https://www.php.net/manual/en/evembed.sweep.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make a single, non-blocking sweep over the embedded loop

## Description

```php
public void EvEmbed::sweep()
```

Make a single, non-blocking sweep over the embedded loop. Works similarly to the following, but in the most appropriate way for embedded loops:

```php


<?php
$other->start(Ev::RUN_NOWAIT);
?>

   
```

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## See Also

  `EvWatcher::start()`
