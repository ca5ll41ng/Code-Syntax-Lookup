---
id: "en-php-guide-class-ds-queue"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-queue"
title: "The Queue class"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-queue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Queue class

Ds\Queue

  Introduction  A Queue is a “first in, first out” or “FIFO” collection that only allows access to the value at the front of the queue and iterates in that order, destructively.     Class Synopsis  `Ds\Queue`   `Ds\Queue`   Ds\Collection   ArrayAccess     `const` `int` `Ds\Queue::MIN_CAPACITY` 8       Predefined Constants 
- **`Ds\Queue::MIN_CAPACITY`**

   Changelog  
|  |  |
| --- | --- |
| PECL ds 1.3.0 | The class now implements `ArrayAccess`. |
