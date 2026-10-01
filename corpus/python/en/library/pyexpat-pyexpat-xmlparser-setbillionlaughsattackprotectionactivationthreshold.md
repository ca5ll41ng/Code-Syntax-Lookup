---
id: "python-en-function-pyexpat-xmlparser-setbillionlaughsattackprotectionactivationthreshold"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SetBillionLaughsAttackProtectionActivationThreshold"
signature: "xmlparser.SetBillionLaughsAttackProtectionActivationThreshold(threshold, /)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SetBillionLaughsAttackProtectionActivationThreshold"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SetBillionLaughsAttackProtectionActivationThreshold

Sets the number of output bytes needed to activate protection against
`billion laughs`_ attacks.

The number of output bytes includes amplification from entity expansion
and reading DTD files.

Parser objects usually have a protection activation threshold of 8 MiB,
but the actual default value depends on the underlying Expat library.

An `ExpatError` is raised if this method is called on a
xml-non-root-parser parser.
The corresponding `~ExpatError.lineno` and `~ExpatError.offset`
should not be used as they may have no special meaning.

`SetBillionLaughsAttackProtectionActivationThreshold`
has been backported to some prior releases of CPython as a security fix.
Check for availability using `hasattr` if used in code running
across a variety of Python versions.

> **Note**
>
> Activation thresholds below 4 MiB are known to break support for DITA 1.3
> payload and are hence not recommended.
>

> *Added in 3.15*
