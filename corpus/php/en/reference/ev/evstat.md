---
id: "en-php-guide-class-evstat"
language: "php"
lang: "en"
category: "guide"
name: "class.evstat"
title: "The EvStat class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evstat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvStat class

EvStat

   Introduction  `EvStat` monitors a file system path for attribute changes. It calls *stat()* on that path in regular intervals (or when the OS signals it changed) and sees if it changed compared to the last time, invoking the callback if it did.    The path does not need to exist: changing from "path exists" to "path does not exist" is a status change like any other. The condition "path does not exist" is signified by the `'nlink'` item being 0(returned by `EvStat::attr()` method).    The path must not end in a slash or contain special components such as `'.'` or `..`. The path should be absolute: if it is relative and the working directory changes, then the behaviour is undefined.    Since there is no portable change notification interface available, the portable implementation simply calls *stat()* regularly on the path to see if it changed somehow. For this case a recommended polling interval can be specified. If one specifies a polling interval of `0.0` (highly recommended) then a suitable, unspecified default value will be used(which could be expected to be around 5 seconds, although this might change dynamically). *libev* will also impose a minimum interval which is currently around `0.1`, but that’s usually overkill.    This watcher type is not meant for massive numbers of `EvStat` watchers, as even with OS-supported change notifications, this can be resource-intensive.      Class Synopsis    `EvStat`     `EvStat`   `extends` `EvWatcher`      `public` `path`   `public` `interval`              Properties 
- **`interval`** — *Readonly*. Hint on how quickly a change is expected to be detected and should normally be specified as `0.0` to let *libev* choose a suitable value.
- **`path`** — *Readonly*. The path to wait for status changes on.
