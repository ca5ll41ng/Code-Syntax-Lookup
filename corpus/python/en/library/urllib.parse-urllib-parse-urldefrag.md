---
id: "python-en-function-urllib-parse-urldefrag"
language: "python"
lang: "en"
category: "function"
name: "urldefrag"
signature: "urldefrag(url, *, missing_as_none=False)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urldefrag"
license: "PSF"
updated: "2026-10-01"
---

# urldefrag

If *url* contains a fragment identifier, return a modified version of *url*
with no fragment identifier, and the fragment identifier as a separate
string.  If there is no fragment identifier in *url*, return *url* unmodified
and an empty string (by default) or `None` if *missing_as_none* is true.

The return value is a `named tuple`, its items can be accessed by index
or as named attributes:

+------------------+-------+-------------------------+-------------------------------+
 Attribute         Index  Value                    Value if not present          
+==================+=======+=========================+===============================+
 `url`       0      URL with no fragment     empty string                  
+------------------+-------+-------------------------+-------------------------------+
 `fragment`  1      Fragment identifier      `None` or empty string [3]_ |
+------------------+-------+-------------------------+-------------------------------+

.. [3] Depending on the value of the *missing_as_none* argument.

See section `urlparse-result-object` for more information on the result
object.

> *Changed in 3.2*: Result is a structured object rather than a simple 2-tuple.

> *Changed in 3.15*: Added the *missing_as_none* parameter.
