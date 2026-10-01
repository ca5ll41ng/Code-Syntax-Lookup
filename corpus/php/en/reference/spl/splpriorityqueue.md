---
id: "en-php-guide-class-splpriorityqueue"
language: "php"
lang: "en"
category: "guide"
name: "class.splpriorityqueue"
title: "The SplPriorityQueue class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.splpriorityqueue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SplPriorityQueue class

SplPriorityQueue

   Introduction  The SplPriorityQueue class provides the main functionalities of a prioritized queue, implemented using a max heap.   
> The order of elements with identical priority is *undefined*. It may differ from the order in which they have been inserted.

    Class Synopsis    `SplPriorityQueue`   `implements` Iterator   Countable    `public` `const` `int` `SplPriorityQueue::EXTR_BOTH`   `public` `const` `int` `SplPriorityQueue::EXTR_PRIORITY`   `public` `const` `int` `SplPriorityQueue::EXTR_DATA`       Predefined Constants 
- **`SplPriorityQueue::EXTR_BOTH`**
- **`SplPriorityQueue::EXTR_PRIORITY`**
- **`SplPriorityQueue::EXTR_DATA`**

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
