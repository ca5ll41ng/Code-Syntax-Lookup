---
id: "python-en-function-pyexpat-xmlparser-setalloctrackeractivationthreshold"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SetAllocTrackerActivationThreshold"
signature: "xmlparser.SetAllocTrackerActivationThreshold(threshold, /)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SetAllocTrackerActivationThreshold"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SetAllocTrackerActivationThreshold

Sets the number of allocated bytes of dynamic memory needed to activate
protection against disproportionate use of RAM.

Parser objects usually have an allocation activation threshold of 64 MiB,
but the actual default value depends on the underlying Expat library.

An `ExpatError` is raised if this method is called on a
xml-non-root-parser parser.
The corresponding `~ExpatError.lineno` and `~ExpatError.offset`
should not be used as they may have no special meaning.

`SetAllocTrackerActivationThreshold`
has been backported to some prior releases of CPython as a security fix.
Check for availability using `hasattr` if used in code running
across a variety of Python versions.

> *Added in 3.15*
