---
id: "python-en-function-multiprocessing-shared_memory-sharedmemorymanager"
language: "python"
lang: "en"
category: "function"
name: "SharedMemoryManager"
signature: "SharedMemoryManager([address[, authkey]])"
directive: "class"
module: "multiprocessing.shared_memory"
source_url: "https://docs.python.org/3/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemoryManager"
license: "PSF"
updated: "2026-10-01"
---

# SharedMemoryManager

A subclass of `multiprocessing.managers.BaseManager` which can be
used for the management of shared memory blocks across processes.

A call to `~multiprocessing.managers.BaseManager.start` on a
`SharedMemoryManager` instance causes a new process to be started.
This new process's sole purpose is to manage the life cycle
of all shared memory blocks created through it.  To trigger the release
of all shared memory blocks managed by that process, call
`~multiprocessing.managers.BaseManager.shutdown` on the instance.
This triggers a `~multiprocessing.shared_memory.SharedMemory.unlink` call
on all of the `SharedMemory` objects managed by that process and then
stops the process itself.  By creating `SharedMemory` instances
through a `SharedMemoryManager`, we avoid the need to manually track
and trigger the freeing of shared memory resources.

This class provides methods for creating and returning `SharedMemory`
instances and for creating a list-like object (`ShareableList`)
backed by shared memory.

Refer to `~multiprocessing.managers.BaseManager` for a description
of the inherited *address* and *authkey* optional input arguments and how
they may be used to connect to an existing `SharedMemoryManager` service
from other processes.

method:: SharedMemory(size)

method:: ShareableList(sequence)
