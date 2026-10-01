---
id: "python-en-function-sqlite3-blob"
language: "python"
lang: "en"
category: "function"
name: "Blob"
directive: "class"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.Blob"
license: "PSF"
updated: "2026-10-01"
---

# Blob

> *Added in 3.11*

> *Changed in next*: :class:`Blob` now supports negative-step slices (e.g. ``blob[9:0:-2]``) for both reading and writing.

A `Blob` instance is a `file-like object`
that can read and write data in an SQLite `BLOB (Binary Large OBject)`.
Call `len(blob)` to get the size (number of bytes) of the blob.
Use indices and `slices` for direct access to the blob data.

Use the `Blob` as a `context manager` to ensure that the blob
handle is closed after use.

```python

con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE test(blob_col blob)")
con.execute("INSERT INTO test(blob_col) VALUES(zeroblob(13))")

# Write to our blob, using two write operations:
with con.blobopen("test", "blob_col", 1) as blob:
    blob.write(b"hello, ")
    blob.write(b"world.")
    # Modify the first and last bytes of our blob
    blob[0] = ord("H")
    blob[-1] = ord("!")

# Read the contents of our blob
with con.blobopen("test", "blob_col", 1) as blob:
    greeting = blob.read()

print(greeting)  # outputs "b'Hello, world!'"
con.close()
```

testoutput::

method:: close()

method:: read(length=-1, /)

method:: write(data, /)

method:: tell()

method:: seek(offset, origin=os.SEEK_SET, /)
