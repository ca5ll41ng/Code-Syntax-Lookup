---
id: "python-en-function-multiprocessing-shared_memory-sharedmemory"
language: "python"
lang: "en"
category: "function"
name: "SharedMemory"
signature: "SharedMemory(name=None, create=False, size=0, *, track=True)"
directive: "class"
module: "multiprocessing.shared_memory"
source_url: "https://docs.python.org/3/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory"
license: "PSF"
updated: "2026-10-01"
---

# SharedMemory

Create an instance of the `SharedMemory` class for either
creating a new shared memory block or attaching to an existing shared
memory block.  Each shared memory block is assigned a unique name.
In this way, one process can create a shared memory block with a
particular name and a different process can attach to that same shared
memory block using that same name.

As a resource for sharing data across processes, shared memory blocks
may outlive the original process that created them.  When one process
no longer needs access to a shared memory block that might still be
needed by other processes, the `close` method should be called.
When a shared memory block is no longer needed by any process, the
`unlink` method should be called to ensure proper cleanup.

:param name:
   The unique name for the requested shared memory, specified as a string.
   When creating a new shared memory block, if `None` (the default)
   is supplied for the name, a novel name will be generated.
:type name: str | None

:param bool create:
   Control whether a new shared memory block is created (`True`)
   or an existing shared memory block is attached (`False`).

:param int size:
   The requested number of bytes when creating a new shared memory block.
   Because some platforms choose to allocate chunks of memory
   based upon that platform's memory page size, the exact size of the shared
   memory block may be larger or equal to the size requested.
   When attaching to an existing shared memory block,
   the *size* parameter is ignored.

:param bool track:
   When `True`, register the shared memory block with a resource
   tracker process on platforms where the OS does not do this automatically.
   The resource tracker ensures proper cleanup of the shared memory even
   if all other processes with access to the memory exit without doing so.
   Python processes created from a common ancestor using `multiprocessing`
   facilities share a single resource tracker process, and the lifetime of
   shared memory segments is handled automatically among these processes.
   Python processes created in any other way will receive their own
   resource tracker when accessing shared memory with *track* enabled.
   This will cause the shared memory to be deleted by the resource tracker
   of the first process that terminates.
   To avoid this issue, users of `subprocess` or standalone Python
   processes should set *track* to `False` when there is already another
   process in place that does the bookkeeping.
   *track* is ignored on Windows, which has its own tracking and
   automatically deletes shared memory when all handles to it have been closed.

> *Changed in 3.13*: Added the *track* parameter.

method:: close()

method:: unlink()

attribute:: buf

attribute:: name

attribute:: size
