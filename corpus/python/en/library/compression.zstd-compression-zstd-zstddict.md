---
id: "python-en-function-compression-zstd-zstddict"
language: "python"
lang: "en"
category: "function"
name: "ZstdDict"
signature: "ZstdDict(dict_content, /, *, is_raw=False)"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.ZstdDict"
license: "PSF"
updated: "2026-10-01"
---

# ZstdDict

A wrapper around Zstandard dictionaries. Dictionaries can be used to improve
the compression of many small chunks of data. Use `train_dict` if you
need to train a new dictionary from sample data.

The *dict_content* argument (a `bytes-like object`), is the already
trained dictionary information.

The *is_raw* argument, a boolean, is an advanced parameter controlling the
meaning of *dict_content*. `True` means *dict_content* is a "raw content"
dictionary, without any format restrictions. `False` means *dict_content*
is an ordinary Zstandard dictionary, created from Zstandard functions,
for example, `train_dict` or the external `zstd` CLI.

When passing a `ZstdDict` to a function, the
`as_digested_dict` and `as_undigested_dict` attributes can
control how the dictionary is loaded by passing them as the `zstd_dict`
argument, for example, `compress(data, zstd_dict=zd.as_digested_dict)`.
Digesting a dictionary is a costly operation that occurs when loading a
Zstandard dictionary. When making multiple calls to compression or
decompression, passing a digested dictionary will reduce the overhead of
loading the dictionary.

 list-table:: Difference for compression

If passing a `ZstdDict` without any attribute, an undigested
dictionary is passed by default when compressing and a digested dictionary
is generated if necessary and passed by default when decompressing.

 attribute:: dict_content

 attribute:: dict_id

 attribute:: as_digested_dict

 attribute:: as_undigested_dict
