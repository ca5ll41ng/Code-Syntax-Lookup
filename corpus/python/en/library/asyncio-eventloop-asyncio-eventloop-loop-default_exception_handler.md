---
id: "python-en-function-asyncio-eventloop-loop-default_exception_handler"
language: "python"
lang: "en"
category: "function"
name: "loop.default_exception_handler"
signature: "loop.default_exception_handler(context)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.default_exception_handler"
license: "PSF"
updated: "2026-10-01"
---

# loop.default_exception_handler

Default exception handler.

This is called when an exception occurs and no exception
handler is set. This can be called by a custom exception
handler that wants to defer to the default handler behavior.

*context* parameter has the same meaning as in
`call_exception_handler`.
