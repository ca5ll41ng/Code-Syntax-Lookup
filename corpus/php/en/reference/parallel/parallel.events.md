---
id: "en-php-guide-class-parallel-events"
language: "php"
lang: "en"
category: "guide"
name: "class.parallel-events"
title: "The parallel\\Events class"
module: "parallel"
source_url: "https://www.php.net/manual/en/class.parallel-events.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The parallel\Events class

parallel\Events

  The Event Loop  The Event loop monitors the state of sets of futures and or channels (targets) in order to perform read (`parallel\Future::value()`, `parallel\Channel::recv()`) and write (`parallel\Channel::send()`) operations as the targets become available and the operations may be performed without blocking the event loop.     Class Synopsis   `parallel\Events`    `final` `parallel\Events`   Countable   Traversable    Input  Targets  Behaviour  Polling
