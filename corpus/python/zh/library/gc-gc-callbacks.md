---
id: "python-zh-function-gc-callbacks"
language: "python"
lang: "zh"
category: "function"
name: "callbacks"
directive: "data"
module: "gc"
source_url: "https://docs.python.org/zh-cn/3/library/gc.html#gc.callbacks"
license: "PSF"
updated: "2026-10-01"
---

# callbacks

A list of callbacks that will be invoked by the garbage collector before and
after collection.  The callbacks will be called with two arguments,
*phase* and *info*.

*phase* 可为以下两值之一：

   "start": The garbage collection is about to start.

   "stop": The garbage collection has finished.

*info* is a dict providing more information for the callback.  The following
keys are currently defined:

   "generation": The oldest generation being collected.

   "collected": When *phase* is "stop", the number of objects
   successfully collected.

   "uncollectable": When *phase* is "stop", the number of objects
   that could not be collected and were put in `garbage`.

   "candidates": When *phase* is "stop", the total number of objects in this
   generation which were considered for collection and traversed.

   "duration": When *phase* is "stop", the time in seconds spent in the
   collection.

Applications can add their own callbacks to this list.  The primary
use cases are:

   Gathering statistics about garbage collection, such as how often
   various generations are collected, and how long the collection
   takes.

   Allowing applications to identify and clear their own uncollectable
   types when they appear in `garbage`.

> *Added in 3.3*

> *Changed in 3.15*: Add "duration" and "candidates".
