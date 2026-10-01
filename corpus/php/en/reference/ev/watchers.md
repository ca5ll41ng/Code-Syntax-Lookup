---
id: "en-php-guide-ev-watchers"
language: "php"
lang: "en"
category: "guide"
name: "ev.watchers"
title: "Watchers"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.watchers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Watchers

A watcher is an object that gets created to record interest in some event. For instance, the following code waits for `STDIN` to become readable:

```php


<?php
// Wait until STDIN is readable
$w = new EvIo(STDIN, Ev::READ, function ($watcher, $revents) {
 echo "STDIN is readable\n";
});
Ev::run(Ev::RUN_ONCE);
?>

  
```

All the watcher constructors automatically start the watchers. `createStopped` methods create stopped watchers(e.g. `EvIo::createStopped()`)

Note that a watcher will automatically be stopped when the watcher object is destroyed. Therefore, the watcher objects returned by the constructors or factory methods should be kept.

Note also that all methods changing some watcher property( *set*, `priority` etc.) automatically stop and start it again if it is active, which means pending events get lost.

See also: Watcher callbacks.
