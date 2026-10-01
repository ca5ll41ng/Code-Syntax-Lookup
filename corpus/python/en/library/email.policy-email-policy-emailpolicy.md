---
id: "python-en-function-email-policy-emailpolicy"
language: "python"
lang: "en"
category: "function"
name: "EmailPolicy"
signature: "EmailPolicy(**kw)"
directive: "class"
module: "email.policy"
source_url: "https://docs.python.org/3/library/email.policy.html#email.policy.EmailPolicy"
license: "PSF"
updated: "2026-10-01"
---

# EmailPolicy

This concrete `Policy` provides behavior that is intended to be fully
compliant with the current email RFCs.  These include (but are not limited
to) RFC 5322, RFC 2047, and the current MIME RFCs.

This policy adds new header parsing and folding algorithms.  Instead of
simple strings, headers are `str` subclasses with attributes that depend
on the type of the field.  The parsing and folding algorithm fully implement
RFC 2047 and RFC 5322.

The default value for the `~email.policy.Policy.message_factory`
attribute is `~email.message.EmailMessage`.

In addition to the settable attributes listed above that apply to all
policies, this policy adds the following additional attributes:

> *Added in 3.6 [1]_*

attribute:: utf8

attribute:: refold_source

attribute:: header_factory

attribute:: content_manager

The class provides the following concrete implementations of the abstract
methods of `Policy`:

method:: header_max_count(name)

method:: header_source_parse(sourcelines)

method:: header_store_parse(name, value)

method:: header_fetch_parse(name, value)

method:: fold(name, value)

method:: fold_binary(name, value)
