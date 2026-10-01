---
id: "python-en-function-pyexpat-xmlparser-setreparsedeferralenabled"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SetReparseDeferralEnabled"
signature: "xmlparser.SetReparseDeferralEnabled(enabled)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SetReparseDeferralEnabled"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SetReparseDeferralEnabled

> **Warning**
>
> Calling `SetReparseDeferralEnabled(False)` has security implications,
> as detailed below; please make sure to understand these consequences
> prior to using the `SetReparseDeferralEnabled` method.
>

Expat 2.6.0 introduced a security mechanism called "reparse deferral"
where instead of causing denial of service through quadratic runtime
from reparsing large tokens, reparsing of unfinished tokens is now delayed
by default until a sufficient amount of input is reached.
Due to this delay, registered handlers may — depending of the sizing of
input chunks pushed to Expat — no longer be called right after pushing new
input to the parser.  Where immediate feedback and taking over responsibility
of protecting against denial of service from large tokens are both wanted,
calling `SetReparseDeferralEnabled(False)` disables reparse deferral
for the current Expat parser instance, temporarily or altogether.
Calling `SetReparseDeferralEnabled(True)` allows re-enabling reparse
deferral.

`SetReparseDeferralEnabled`
has been backported to some prior releases of CPython as a security fix.
Check for availability using `hasattr` if used in code running
across a variety of Python versions.

> *Added in 3.13*
