---
id: "en-php-guide-class-event"
language: "php"
lang: "en"
category: "guide"
name: "class.event"
title: "The Event class"
module: "event"
source_url: "https://www.php.net/manual/en/class.event.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Event class

Event

   Introduction  `Event` class represents and event firing on a file descriptor being ready to read from or write to; a file descriptor becoming ready to read from or write to(edge-triggered I/O only); a timeout expiring; a signal occurring; a user-triggered event.    Every event is associated with `EventBase`. However, event will never fire until it is *added* (via `Event::add()` ). An added event remains in *pending* state until the registered event occurs, thus turning it to *active* state. To handle events user may register a callback which is called when event becomes active. If event is configured *persistent*, it remains pending. If it is not persistent, it stops being pending when it's callback runs. `Event::del()` method *deletes* event, thus making it non-pending. By means of `Event::add()` method it could be added again.      Class Synopsis    `Event`     `final` `Event`      `const` `int` `Event::ET` 32   `const` `int` `Event::PERSIST` 16   `const` `int` `Event::READ` 2   `const` `int` `Event::WRITE` 4   `const` `int` `Event::SIGNAL` 8   `const` `int` `Event::TIMEOUT` 1    `public` `readonly` `bool` `pending`         Properties 
- **`pending`** — Whether event is pending. See About event persistence.

     Predefined Constants 
- **`Event::ET`** — Indicates that the event should be edge-triggered, if the underlying event base backend supports edge-triggered events. This affects the semantics of `Event::READ` and `Event::WRITE`.
- **`Event::PERSIST`** — Indicates that the event is persistent. See About event persistence.
- **`Event::READ`** — This flag indicates an event that becomes active when the provided file descriptor(usually a stream resource, or socket) is ready for reading.
- **`Event::WRITE`** — This flag indicates an event that becomes active when the provided file descriptor(usually a stream resource, or socket) is ready for writing.
- **`Event::SIGNAL`** — Used to implement signal detection. See "Constructing signal events" below.
- **`Event::TIMEOUT`** — This flag indicates an event that becomes active after a timeout elapses. — The `Event::TIMEOUT` flag is ignored when constructing an event: one can either set a timeout when event is *added*, or not. It is set in the `$what` argument to the callback function when a timeout has occurred.
