---
id: "python-en-function-urllib-parse-urllib-parse-splitresult-geturl"
language: "python"
lang: "en"
category: "function"
name: "urllib.parse.SplitResult.geturl"
signature: "urllib.parse.SplitResult.geturl()"
directive: "method"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.SplitResult.geturl"
license: "PSF"
updated: "2026-10-01"
---

# urllib.parse.SplitResult.geturl

Return the re-combined version of the original URL as a string. This may
differ from the original URL in that the scheme may be normalized to lower
case and empty components may be dropped. Specifically, empty parameters,
queries, and fragment identifiers will be removed unless the URL was parsed
with `missing_as_none=True`.

For `urldefrag` results, only empty fragment identifiers will be removed.
For `urlsplit` and `urlparse` results, all noted changes will be
made to the URL returned by this method.

The result of this method remains unchanged if passed back through the original
parsing function:

   >>> from urllib.parse import urlsplit
   >>> url = 'HTTP://www.Python.org/doc/#'
   >>> r1 = urlsplit(url)
   >>> r1.geturl()
   'http://www.Python.org/doc/'
   >>> r2 = urlsplit(r1.geturl())
   >>> r2.geturl()
   'http://www.Python.org/doc/'
   >>> r3 = urlsplit(url, missing_as_none=True)
   >>> r3.geturl()
   'http://www.Python.org/doc/#'
