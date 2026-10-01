---
id: "python-en-function-contextlib-closing"
language: "python"
lang: "en"
category: "function"
name: "closing"
signature: "closing(thing)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.closing"
license: "PSF"
updated: "2026-10-01"
---

# closing

Return a context manager that closes *thing* upon completion of the block.  This
is basically equivalent to::

   from contextlib import contextmanager

   @contextmanager
   def closing(thing):
       try:
           yield thing
       finally:
           thing.close()

And lets you write code like this::

   from contextlib import closing
   from urllib.request import urlopen

   with closing(urlopen('https://www.python.org')) as page:
       for line in page:
           print(line)

without needing to explicitly close `page`.  Even if an error occurs,
`page.close()` will be called when the `with` block is exited.

> **Note**
>
> Most types managing resources support the `context manager` protocol,
> which closes *thing* on leaving the `with` statement.
> As such, `closing` is most useful for third party types that don't
> support context managers.
> This example is purely for illustration purposes,
> as `~urllib.request.urlopen` would normally be used in a context manager.
>
