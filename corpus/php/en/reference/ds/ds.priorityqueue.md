---
id: "en-php-guide-class-ds-priorityqueue"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-priorityqueue"
title: "The PriorityQueue class"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-priorityqueue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The PriorityQueue class

Ds\PriorityQueue

  Introduction  A PriorityQueue is very similar to a Queue. Values are pushed into the queue with an assigned priority, and the value with the highest priority will always be at the front of the queue.    Implemented using a max heap.   
> "First in, first out" ordering is preserved for values with the same priority.

 
> Iterating over a PriorityQueue is destructive, equivalent to successive pop operations until the queue is empty.

   Class Synopsis  `Ds\PriorityQueue`   `Ds\PriorityQueue`   Ds\Collection     `const` `int` `Ds\PriorityQueue::MIN_CAPACITY` 8       Predefined Constants 
- **`Ds\PriorityQueue::MIN_CAPACITY`**
