---
id: "python-en-function-contextlib-nullcontext"
language: "python"
lang: "en"
category: "function"
name: "nullcontext"
signature: "nullcontext(enter_result=None)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.nullcontext"
license: "PSF"
updated: "2026-10-01"
---

# nullcontext

Return a context manager that returns *enter_result* from `~object.__enter__`, but
otherwise does nothing. It is intended to be used as a stand-in for an
optional context manager, for example::

   def myfunction(arg, ignore_exceptions=False):
       if ignore_exceptions:
           # Use suppress to ignore all exceptions.
           cm = contextlib.suppress(Exception)
       else:
           # Do not ignore any exceptions, cm has no effect.
           cm = contextlib.nullcontext()
       with cm:
           # Do something

An example using *enter_result*::

   def process_file(file_or_path):
       if isinstance(file_or_path, str):
           # If string, open file
           cm = open(file_or_path)
       else:
           # Caller is responsible for closing file
           cm = nullcontext(file_or_path)

       with cm as file:
           # Perform processing on the file

It can also be used as a stand-in for
`asynchronous context managers`::

    async def send_http(session=None):
        if not session:
            # If no http session, create it with aiohttp
            cm = aiohttp.ClientSession()
        else:
            # Caller is responsible for closing the session
            cm = nullcontext(session)

        async with cm as session:
            # Send http requests with session

> *Added in 3.7*

> *Changed in 3.10*: :term:`asynchronous context manager` support was added.
