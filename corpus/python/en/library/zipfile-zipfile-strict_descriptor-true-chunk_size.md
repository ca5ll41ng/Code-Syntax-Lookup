---
id: "python-en-function-zipfile-strict_descriptor-true-chunk_size"
language: "python"
lang: "en"
category: "function"
name: "strict_descriptor=True[, chunk_size])"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.strict_descriptor=True[, chunk_size])"
license: "PSF"
updated: "2026-10-01"
---

# strict_descriptor=True[, chunk_size])

Rewrites the archive to remove unreferenced local file entries, shrinking
its file size.  The archive must be opened with mode `'a'`, and any file
object returned by `ZipFile.open` must be closed first, since
repacking moves the member data such objects refer to.

If *removed* is provided, it must be a sequence of `ZipInfo` objects
representing the recently removed members, and only their corresponding
local file entries will be removed.  Otherwise, the archive is scanned to
locate and remove local file entries that are no longer referenced in the
central directory.

Passing *removed* is the most reliable way to reclaim space: the
corresponding local file entries are located directly from the central
directory and removed regardless of how they were written, whereas the scan
used when *removed* is omitted may leave some entries in place (see
*strict_descriptor* below).  To remove members and reclaim their space in a
single step::

   with ZipFile('spam.zip', 'a') as myzip:
       removed = [myzip.remove(name) for name in ('ham.txt', 'eggs.txt')]
       myzip.repack(removed)

When scanning, *strict_descriptor* controls how entries written with an
unsigned *data descriptor* are handled.  A data descriptor is an optional
record holding an entry's CRC and sizes, stored just after the entry's data;
it is used when the archive is written to a non-seekable stream, and is
*signed* when it begins with a marker signature or *unsigned* otherwise.
Unsigned descriptors have been deprecated by the `PKZIP Application Note`_
since version 6.3.0 (released in 2006) and are written only by some legacy
tools; signed descriptors—written by Python and other modern tools—are always
detected.  When *strict_descriptor* is true (the default), only signed data
descriptors are detected, so an unreferenced entry written with an unsigned
descriptor is not located and its space is not reclaimed by the scan.
Setting `strict_descriptor=False` additionally detects unsigned
descriptors, at the cost of a significantly slower scan—around 100 to 1000
times in the worst case—which may be exploitable as a denial-of-service
vector on untrusted input.  This does not affect entries without a data
descriptor, and is not needed when *removed* is provided.

*chunk_size* may be specified to control the buffer size when moving
entry data (default is 1 MiB).

Calling `repack` on a closed ZipFile will raise a `ValueError`.

> **Note**
>
> The scanning algorithm is heuristic-based and assumes that the ZIP file
> is normally structured—for example, with local file entries stored
> consecutively, without overlap or interleaved binary data.  Prepended
> binary data, such as a self-extractor stub, is recognized and preserved
> unless it happens to contain bytes that coincidentally resemble a valid
> local file entry in multiple respects—an extremely rare case. Embedded
> ZIP payloads are also handled correctly, as long as they follow normal
> structure.  However, the algorithm does not guarantee correctness or
> safety on untrusted or intentionally crafted input.  It is generally
> recommended to provide the *removed* argument for better reliability and
> performance.
>

> *Added in next*
