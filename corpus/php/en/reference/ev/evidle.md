---
id: "en-php-guide-class-evidle"
language: "php"
lang: "en"
category: "guide"
name: "class.evidle"
title: "The EvIdle class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evidle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvIdle class

EvIdle

   Introduction  `EvIdle` watchers trigger events when no other events of the same or higher priority are pending ( `EvPrepare`, `EvCheck` and other `EvIdle` watchers do not count as receiving *events* ).    Thus, as long as the process is busy handling sockets or timeouts(or even signals) of the same or higher priority it will not be triggered. But when the process is in idle(or only lower-priority watchers are pending), the `EvIdle` watchers are being called once per event loop iteration - until stopped, that is, or the process receives more events and becomes busy again with higher priority stuff.    Apart from keeping the process non-blocking(which is a useful on its own sometimes), `EvIdle` watchers are a good place to do *"pseudo-background processing"*, or delay processing stuff to after the event loop has handled all outstanding events.    The most noticeable effect is that as long as any *idle* watchers are active, the process will *not* block when waiting for new events.      Class Synopsis    `EvIdle`     `EvIdle`   `extends` `EvWatcher`
