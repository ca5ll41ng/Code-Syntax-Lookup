---
id: "python-en-function-compression-zstd-train_dict"
language: "python"
lang: "en"
category: "function"
name: "train_dict"
signature: "train_dict(samples, dict_size)"
directive: "function"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.train_dict"
license: "PSF"
updated: "2026-10-01"
---

# train_dict

Train a Zstandard dictionary, returning a `ZstdDict` instance.
Zstandard dictionaries enable more efficient compression of smaller sizes
of data, which is traditionally difficult to compress due to less
repetition. If you are compressing multiple similar groups of data (such as
similar files), Zstandard dictionaries can improve compression ratios and
speed significantly.

The *samples* argument (an iterable of `bytes` objects), is the
population of samples used to train the Zstandard dictionary.

The *dict_size* argument, an integer, is the maximum size (in bytes) the
Zstandard dictionary should be. The Zstandard documentation suggests an
absolute maximum of no more than 100 KB, but the maximum can often be smaller
depending on the data. Larger dictionaries generally slow down compression,
but improve compression ratios. Smaller dictionaries lead to faster
compression, but reduce the compression ratio.
