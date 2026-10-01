---
id: "en-php-guide-class-parallel-events-input"
language: "php"
lang: "en"
category: "guide"
name: "class.parallel-events-input"
title: "The parallel\\Events\\Input class"
module: "parallel"
source_url: "https://www.php.net/manual/en/class.parallel-events-input.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The parallel\Events\Input class

parallel\Events\Input

  Events Input  An Input object is a container for data that the `parallel\Events` object will write to `parallel\Channel` objects as they become available. Multiple event loops may share an Input container - parallel does not verify the contents of the container when it is set as the input for a `parallel\Events` object.   
> When a `parallel\Events` object performs a write, the target is removed from the input object as if `parallel\Events\Input::remove()` were called.

   Class Synopsis   `parallel\Events\Input`    `final` `parallel\Events\Input`
