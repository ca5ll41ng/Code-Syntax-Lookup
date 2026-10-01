---
id: "python-en-function-asyncio-eventloop-eventloop"
language: "python"
lang: "en"
category: "function"
name: "EventLoop"
directive: "class"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.EventLoop"
license: "PSF"
updated: "2026-10-01"
---

# EventLoop

An alias to the most efficient available subclass of `AbstractEventLoop` for the given
 platform.

 It is an alias to `SelectorEventLoop` on Unix and `ProactorEventLoop` on Windows.

> *Added in 3.13*
