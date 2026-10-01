---
id: "python-en-function-compression-zstd-finalize_dict"
language: "python"
lang: "en"
category: "function"
name: "finalize_dict"
signature: "finalize_dict(zstd_dict, /, samples, dict_size, level)"
directive: "function"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.finalize_dict"
license: "PSF"
updated: "2026-10-01"
---

# finalize_dict

An advanced function for converting a "raw content" Zstandard dictionary into
a regular Zstandard dictionary. "Raw content" dictionaries are a sequence of
bytes that do not need to follow the structure of a normal Zstandard
dictionary.

The *zstd_dict* argument is a `ZstdDict` instance with
the `~ZstdDict.dict_content` containing the raw dictionary contents.

The *samples* argument (an iterable of `bytes` objects), contains
sample data for generating the Zstandard dictionary.

The *dict_size* argument, an integer, is the maximum size (in bytes) the
Zstandard dictionary should be. See `train_dict` for
suggestions on the maximum dictionary size.

The *level* argument (an integer) is the compression level expected to be
passed to the compressors using this dictionary. The dictionary information
varies for each compression level, so tuning for the proper compression
level can make compression more efficient.
