---
id: "python-en-function-asyncio-graph-print_call_graph"
language: "python"
lang: "en"
category: "function"
name: "print_call_graph"
signature: "print_call_graph(future=None, /, *, file=None, depth=1, limit=None)"
directive: "function"
module: "asyncio-graph"
source_url: "https://docs.python.org/3/library/asyncio-graph.html#asyncio-graph.print_call_graph"
license: "PSF"
updated: "2026-10-01"
---

# print_call_graph

Print the async call graph for the current task or the provided
`Task` or `Future`.

This function prints entries starting from the top frame and going
down towards the invocation point.

The function receives an optional *future* argument.
If not passed, the current running task will be used.

If the function is called on *the current task*, the optional
keyword-only *depth* argument can be used to skip the specified
number of frames from top of the stack.

If the optional keyword-only *limit* argument is provided, each call stack
in the resulting graph is truncated to include at most `abs(limit)`
entries. If *limit* is positive, the entries left are the closest to
the invocation point. If *limit* is negative, the topmost entries are
left. If *limit* is omitted or `None`, all entries are present.
If *limit* is `0`, the call stack is not printed at all, only
"awaited by" information is printed.

If *file* is omitted or `None`, the function will print
to `sys.stdout`.

**Example:**

The following Python code:

```python

import asyncio

async def test():
    asyncio.print_call_graph()

async def main():
    async with asyncio.TaskGroup() as g:
        g.create_task(test(), name='test')

asyncio.run(main())
```

will print::

   * Task(name='test', id=0x1039f0fe0)
   + Call stack:
      File 't2.py', line 4, in async test()
   + Awaited by:
      * Task(name='Task-1', id=0x103a5e060)
         + Call stack:
            File 'taskgroups.py', line 107, in async TaskGroup.__aexit__()
         |   File 't2.py', line 7, in async main()
