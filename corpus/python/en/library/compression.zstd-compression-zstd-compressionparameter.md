---
id: "python-en-function-compression-zstd-compressionparameter"
language: "python"
lang: "en"
category: "function"
name: "CompressionParameter"
signature: "CompressionParameter()"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.CompressionParameter"
license: "PSF"
updated: "2026-10-01"
---

# CompressionParameter

An `~enum.IntEnum` containing the advanced compression parameter
keys that can be used when compressing data.

The `~.bounds` method can be used on any attribute to get the valid
values for that parameter.

Parameters are optional; any omitted parameter will have its value selected
automatically.

Example getting the lower and upper bound of `~.compression_level`::

   lower, upper = CompressionParameter.compression_level.bounds()

Example setting the `~.window_log` to the maximum size::

   _lower, upper = CompressionParameter.window_log.bounds()
   options = {CompressionParameter.window_log: upper}
   compress(b'venezuelan beaver cheese', options=options)

method:: bounds()

attribute:: compression_level

attribute:: window_log

attribute:: hash_log

attribute:: chain_log

attribute:: search_log

attribute:: min_match

attribute:: target_length

attribute:: strategy

attribute:: enable_long_distance_matching

attribute:: ldm_hash_log

attribute:: ldm_min_match

attribute:: ldm_bucket_size_log

attribute:: ldm_hash_rate_log

attribute:: content_size_flag

attribute:: checksum_flag

attribute:: dict_id_flag

attribute:: nb_workers

attribute:: job_size

attribute:: overlap_log
