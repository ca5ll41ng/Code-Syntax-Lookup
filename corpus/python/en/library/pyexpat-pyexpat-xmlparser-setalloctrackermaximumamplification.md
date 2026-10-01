---
id: "python-en-function-pyexpat-xmlparser-setalloctrackermaximumamplification"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SetAllocTrackerMaximumAmplification"
signature: "xmlparser.SetAllocTrackerMaximumAmplification(max_factor, /)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SetAllocTrackerMaximumAmplification"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SetAllocTrackerMaximumAmplification

Sets the maximum amplification factor between direct input and bytes
of dynamic memory allocated.

The amplification factor is calculated as `allocated / direct`
while parsing, where `direct` is the number of bytes read from
the primary document in parsing and `allocated` is the number
of bytes of dynamic memory allocated in the parser hierarchy.

The *max_factor* value must be a non-NaN `float` value greater than
or equal to 1.0. Amplification factors greater than 100.0 can be observed
near the start of parsing even with benign files in practice. In particular,
the activation threshold should be carefully chosen to avoid false positives.

Parser objects usually have a maximum amplification factor of 100,
but the actual default value depends on the underlying Expat library.

An `ExpatError` is raised if this method is called on a
xml-non-root-parser parser or if *max_factor* is outside the valid range.
The corresponding `~ExpatError.lineno` and `~ExpatError.offset`
should not be used as they may have no special meaning.

`SetAllocTrackerMaximumAmplification`
has been backported to some prior releases of CPython as a security fix.
Check for availability using `hasattr` if used in code running
across a variety of Python versions.

> **Note**
>
> The maximum amplification factor is only considered if the threshold
> that can be adjusted by `.SetAllocTrackerActivationThreshold`
> is exceeded.
>

> *Added in 3.15*
