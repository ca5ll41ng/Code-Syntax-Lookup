---
id: "python-en-function-asyncio-eventloop-selectoreventloop"
language: "python"
lang: "en"
category: "function"
name: "SelectorEventLoop"
directive: "class"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.SelectorEventLoop"
license: "PSF"
updated: "2026-10-01"
---

# SelectorEventLoop

A subclass of `AbstractEventLoop` based on the
`selectors` module.

Uses the most efficient *selector* available for the given
platform.  It is also possible to manually configure the
exact selector implementation to be used::

   import asyncio
   import selectors

   async def main():
      ...

   loop_factory = lambda: asyncio.SelectorEventLoop(selectors.SelectSelector())
   asyncio.run(main(), loop_factory=loop_factory)

availability:: Unix, Windows.
