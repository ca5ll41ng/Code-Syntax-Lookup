---
id: "en-php-guide-event-constructing-signal-events"
language: "php"
lang: "en"
category: "guide"
name: "event.constructing.signal.events"
title: "Constructing signal events"
module: "event"
source_url: "https://www.php.net/manual/en/event.constructing.signal.events.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructing signal events

Event can also watch for POSIX-style signals. To construct a handler for a signal, use `Event::__construct()` constructor with `Event::SIGNAL` flag, or `Event::signal()` factory method.

**Handling `SIGTERM` signal**

```php


<?php
/*
Launch it in a terminal window:

$ php examples/signal.php

In another terminal window find out the pid and send SIGTERM, e.g.:

$ ps aux | grep examp
ruslan    3976  0.2  0.0 139896 11256 pts/1    S+   10:25   0:00 php examples/signal.php
ruslan    3978  0.0  0.0   9572   864 pts/2    S+   10:26   0:00 grep --color=auto examp
$ kill -TERM 3976

At the first terminal window you should catch the following:

Caught signal 15
*/
class MyEventSignal {
    private $base, $ev;

    public function __construct($base) {
        $this->base = $base;
        $this->ev = Event::signal($base, SIGTERM, array($this, 'eventSighandler'));
        $this->ev->add();
    }

    public function eventSighandler($no, $c) {
        echo "Caught signal $no\n";
        $this->base->exit();
    }
}

$base = new EventBase();
$c    = new MyEventSignal($base);

$base->loop();
?>

  
```

Note that signal callbacks are run in the event loop after the signal occurs, so it is safe for them to call functions that you are not supposed to call from a regular POSIX signal handler.

See also [Fast portable non-blocking network programming with Libevent, Constructing Signal Events](http://www.wangafu.net/~nickm/libevent-book/Ref4_event.html#_constructing_signal_events).
