---
id: "python-en-function-multiprocessing-shared_memory-shareablelist"
language: "python"
lang: "en"
category: "function"
name: "ShareableList"
signature: "ShareableList(sequence=None, *, name=None)"
directive: "class"
module: "multiprocessing.shared_memory"
source_url: "https://docs.python.org/3/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.ShareableList"
license: "PSF"
updated: "2026-10-01"
---

# ShareableList

Provide a mutable list-like object where all values stored within are
stored in a shared memory block.
This constrains storable values to the following built-in data types:

* `int` (signed 64-bit)
* `float`
* `bool`
* `str` (less than 10M bytes each when encoded as UTF-8)
* `bytes` (less than 10M bytes each)
* `None`

It also notably differs from the built-in `list` type
in that these lists can not change their overall length
(i.e. no `append`, `insert`, etc.) and do not
support the dynamic creation of new `ShareableList` instances
via slicing.

*sequence* is used in populating a new `ShareableList` full of values.
Set to `None` to instead attach to an already existing
`ShareableList` by its unique shared memory name.

*name* is the unique name for the requested shared memory, as described
in the definition for `SharedMemory`.  When attaching to an
existing `ShareableList`, specify its shared memory block's unique
name while leaving *sequence* set to `None`.

> **Note**
>
> A known issue exists for `bytes` and `str` values.
> If they end with `\x00` nul bytes or characters, those may be
> *silently stripped* when fetching them by index from the
> `ShareableList`. This `.rstrip(b'\x00')` behavior is
> considered a bug and may go away in the future. See `106939`.
>

For applications where rstripping of trailing nulls is a problem,
work around it by always unconditionally appending an extra non-0
byte to the end of such values when storing and unconditionally
removing it when fetching:

```python

>>> from multiprocessing import shared_memory
>>> nul_bug_demo = shared_memory.ShareableList(['?\x00', b'\x03\x02\x01\x00\x00\x00'])
>>> nul_bug_demo[0]
'?'
>>> nul_bug_demo[1]
b'\x03\x02\x01'
>>> nul_bug_demo.shm.unlink()
>>> padded = shared_memory.ShareableList(['?\x00\x07', b'\x03\x02\x01\x00\x00\x00\x07'])
>>> padded[0][:-1]
'?\x00'
>>> padded[1][:-1]
b'\x03\x02\x01\x00\x00\x00'
>>> padded.shm.unlink()
```

method:: count(value)

method:: index(value)

attribute:: format

attribute:: shm
