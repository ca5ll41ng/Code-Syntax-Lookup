---
id: "python-en-function-asyncio-task-timeout_at"
language: "python"
lang: "en"
category: "function"
name: "timeout_at"
signature: "timeout_at(when)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.timeout_at"
license: "PSF"
updated: "2026-10-01"
---

# timeout_at

Similar to `asyncio.timeout`, except *when* is the absolute time
to stop waiting, or `None`.

Example::

   async def main():
       loop = get_running_loop()
       deadline = loop.time() + 20
       try:
           async with asyncio.timeout_at(deadline):
               await long_running_task()
       except TimeoutError:
           print("The long operation timed out, but we've handled it.")

       print("This statement will run regardless.")

> *Added in 3.11*
