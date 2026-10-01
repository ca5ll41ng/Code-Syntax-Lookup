---
id: "en-php-guide-event-persistence"
language: "php"
lang: "en"
category: "guide"
name: "event.persistence"
title: "About event persistence"
module: "event"
source_url: "https://www.php.net/manual/en/event.persistence.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# About event persistence

By default, whenever a pending event becomes active (because its file descriptor is ready to read or write, or because its timeout expires), it becomes non-pending right before its callback is executed. Thus, to make the event pending again one may call `Event::add()` on it again from inside the callback function.

If the `Event::PERSIST` flag is set on an event, however, the event is *persistent*. This means that event remains pending even when its callback is activated. `Event::del()` method can be called to make it non-pending.

The timeout on a persistent event resets whenever the event's callback runs. Thus, if one has an event with flags `Event::READ` `|` `Event::PERSIST` and a timeout of five seconds, the event will become active:

1. Whenever the socket or file descriptor is ready for reading.
2. Whenever five seconds have passed since the event last became active.

See also [Fast portable non-blocking network programming with Libevent, About Event Persistence](http://www.wangafu.net/~nickm/libevent-book/Ref4_event.html#_about_event_persistence)
