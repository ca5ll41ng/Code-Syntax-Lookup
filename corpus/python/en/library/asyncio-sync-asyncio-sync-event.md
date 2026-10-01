---
id: "python-en-function-asyncio-sync-event"
language: "python"
lang: "en"
category: "function"
name: "Event"
signature: "Event()"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/3/library/asyncio-sync.html#asyncio-sync.Event"
license: "PSF"
updated: "2026-10-01"
---

# Event

An event object.  Not thread-safe.

An asyncio event can be used to notify multiple asyncio tasks
that some event has happened.

An Event object manages an internal flag that can be set to *true*
with the `~Event.set` method and reset to *false* with the
`clear` method.  The `~Event.wait` method blocks until the
flag is set to *true*.  The flag is set to *false* initially.

> *Changed in 3.10*: Removed the *loop* parameter.

.. _asyncio_example_sync_event:

Example::

   async def waiter(event):
       print('waiting for it ...')
       await event.wait()
       print('... got it!')

   async def main():
       # Create an Event object.
       event = asyncio.Event()

       # Spawn a Task to wait until 'event' is set.
       waiter_task = asyncio.create_task(waiter(event))

       # Sleep for 1 second and set the event.
       await asyncio.sleep(1)
       event.set()

       # Wait until the waiter task is finished.
       await waiter_task

   asyncio.run(main())

method:: wait()

method:: set()

method:: clear()

method:: is_set()
