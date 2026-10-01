---
id: "python-zh-function-multiprocessing-array"
language: "python"
lang: "zh"
category: "function"
name: "Array"
signature: "Array(typecode_or_type, size_or_initializer, *, lock=True)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.Array"
license: "PSF"
updated: "2026-10-01"
---

# Array

Return a ctypes array allocated from shared memory.  By default the return
value is actually a synchronized wrapper for the array.

*typecode_or_type* determines the type of the elements of the returned array:
it is either a `ctypes type` or a one
character typecode of the kind used by the `array` module with the
exception of `'w'`, which is not supported.  In addition, the `'c'`
typecode is an alias for `ctypes.c_char`.  If *size_or_initializer*
is an integer, then it determines the length of the array, and the array
will be initially zeroed. Otherwise, *size_or_initializer* is a sequence
which is used to initialize the array and whose length determines the length
of the array.

If *lock* is `True` (the default) then a new lock object is created to
synchronize access to the value.  If *lock* is a `Lock` or
`RLock` object then that will be used to synchronize access to the
value.  If *lock* is `False` then access to the returned object will not be
automatically protected by a lock, so it will not necessarily be
"process-safe".

请注意 *lock* 是一个仅限关键字参数。

Note that an array of `ctypes.c_char` has *value* and *raw*
attributes which can both be used to store and retrieve byte strings.
While *raw* allows interaction with a `bytes` object the full size of
the array, reading *value* will terminate after a null byte, like most
programming languages handle strings.
