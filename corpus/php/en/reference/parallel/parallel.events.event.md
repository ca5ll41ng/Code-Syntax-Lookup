---
id: "en-php-guide-class-parallel-events-event"
language: "php"
lang: "en"
category: "guide"
name: "class.parallel-events-event"
title: "The parallel\\Events\\Event class"
module: "parallel"
source_url: "https://www.php.net/manual/en/class.parallel-events-event.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The parallel\Events\Event class

parallel\Events\Event

  Event Objects  When an Event is returned, `Event::$object` shall be removed from the loop that returned it, should the event be a write event the `Input` for `Event::$source` shall also be removed.     Class Synopsis   `parallel\Events\Event`    `final` `parallel\Events\Event`    Shall be one of `Event\Type` constants  `public` `int` `type`  Shall be the source of the event (target name)  `public` `string` `source`  Shall be either Future or Channel  `public` `object` `object`  Shall be set for Read/Error events  `public` `value`
