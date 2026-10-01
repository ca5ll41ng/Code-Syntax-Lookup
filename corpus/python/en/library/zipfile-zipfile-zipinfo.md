---
id: "python-en-function-zipfile-zipinfo"
language: "python"
lang: "en"
category: "function"
name: "ZipInfo"
signature: "ZipInfo(filename='NoName', date_time=(1980,1,1,0,0,0))"
directive: "class"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipInfo"
license: "PSF"
updated: "2026-10-01"
---

# ZipInfo

Class used to represent information about a member of an archive. Instances
of this class are returned by the `.getinfo` and `.infolist`
methods of `ZipFile` objects.  Most users of the `zipfile` module
will not need to create these, but only use those created by this
module. *filename* should be the full name of the archive member, and
*date_time* should be a tuple containing six fields which describe the time
of the last modification to the file; the fields are described in section
`zipinfo-objects`.

> *Changed in 3.13*: A public :attr:`!compress_level` attribute has been added to expose the formerly protected :attr:`!_compresslevel`.  The older protected name continues to work as a property for backwards compatibility.

method:: _for_archive(archive)
