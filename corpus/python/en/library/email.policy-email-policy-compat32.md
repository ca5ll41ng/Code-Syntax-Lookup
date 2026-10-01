---
id: "python-en-function-email-policy-compat32"
language: "python"
lang: "en"
category: "function"
name: "Compat32"
signature: "Compat32(**kw)"
directive: "class"
module: "email.policy"
source_url: "https://docs.python.org/3/library/email.policy.html#email.policy.Compat32"
license: "PSF"
updated: "2026-10-01"
---

# Compat32

This concrete `Policy` is the backward compatibility policy.  It
replicates the behavior of the email package in Python 3.2.  The
`policy` module also defines an instance of this class,
`compat32`, that is used as the default policy.  Thus the default
behavior of the email package is to maintain compatibility with Python 3.2.

The following attributes have values that are different from the
`Policy` default:

attribute:: mangle_from_

The class provides the following concrete implementations of the
abstract methods of `Policy`:

method:: header_source_parse(sourcelines)

method:: header_store_parse(name, value)

method:: header_fetch_parse(name, value)

method:: fold(name, value)

method:: fold_binary(name, value)
