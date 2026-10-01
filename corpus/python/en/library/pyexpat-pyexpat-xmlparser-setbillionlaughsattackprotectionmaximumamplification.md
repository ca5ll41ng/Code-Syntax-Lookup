---
id: "python-en-function-pyexpat-xmlparser-setbillionlaughsattackprotectionmaximumamplification"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SetBillionLaughsAttackProtectionMaximumAmplification"
signature: "xmlparser.SetBillionLaughsAttackProtectionMaximumAmplification(max_factor, /)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SetBillionLaughsAttackProtectionMaximumAmplification"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SetBillionLaughsAttackProtectionMaximumAmplification

Sets the maximum tolerated amplification factor for protection against
`billion laughs`_ attacks.

The amplification factor is calculated as `(direct + indirect) / direct`
while parsing, where `direct` is the number of bytes read from
the primary document in parsing and `indirect` is the number of
bytes added by expanding entities and reading of external DTD files.

The *max_factor* value must be a non-NaN `float` value greater than
or equal to 1.0. Peak amplifications of factor 15,000 for the entire payload
and of factor 30,000 in the middle of parsing have been observed with small
benign files in practice. In particular, the activation threshold should be
carefully chosen to avoid false positives.

Parser objects usually have a maximum amplification factor of 100,
but the actual default value depends on the underlying Expat library.

An `ExpatError` is raised if this method is called on a
xml-non-root-parser parser or if *max_factor* is outside the valid range.
The corresponding `~ExpatError.lineno` and `~ExpatError.offset`
should not be used as they may have no special meaning.

`SetBillionLaughsAttackProtectionMaximumAmplification`
has been backported to some prior releases of CPython as a security fix.
Check for availability using `hasattr` if used in code running
across a variety of Python versions.

> **Note**
>
> The maximum amplification factor is only considered if the threshold
> that can be adjusted by `.SetBillionLaughsAttackProtectionActivationThreshold`
> is exceeded.
>

> *Added in 3.15*
