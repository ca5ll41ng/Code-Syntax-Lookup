---
id: "python-en-function-email-generator-policy-none"
language: "python"
lang: "en"
category: "function"
name: "policy=None)"
directive: "class"
module: "email.generator"
source_url: "https://docs.python.org/3/library/email.generator.html#email.generator.policy=None)"
license: "PSF"
updated: "2026-10-01"
---

# policy=None)

Return a `BytesGenerator` object that will write any message provided
to the `flatten` method, or any surrogateescape encoded text provided
to the `write` method, to the `file-like object` *outfp*.
*outfp* must support a `write` method that accepts binary data.

If optional *mangle_from_* is `True`, put a `>` character in front of
any line in the body that starts with the exact string `"From "`, that is
`From` followed by a space at the beginning of a line.  *mangle_from_*
defaults to the value of the `~email.policy.Policy.mangle_from_`
setting of the *policy* (which is `True` for the
`~email.policy.compat32` policy and `False` for all others).
*mangle_from_* is intended for use when messages are stored in Unix mbox
format (see `mailbox` and `WHY THE CONTENT-LENGTH FORMAT IS BAD
<https://www.jwz.org/doc/content-length.html>`_).

If *maxheaderlen* is not `None`, refold any header lines that are longer
than *maxheaderlen*, or if `0`, do not rewrap any headers.  If
*manheaderlen* is `None` (the default), wrap headers and other message
lines according to the *policy* settings.

If *policy* is specified, use that policy to control message generation.  If
*policy* is `None` (the default), use the policy associated with the
`~email.message.Message` or `~email.message.EmailMessage`
object passed to `flatten` to control the message generation.  See
`email.policy` for details on what *policy* controls.

> *Added in 3.2*

> *Changed in 3.3 Added the *policy* keyword.*

> *Changed in 3.6 The default behavior of the *mangle_from_**: and *maxheaderlen* parameters is to follow the policy.

method:: flatten(msg, unixfrom=False, linesep=None)

method:: clone(fp)

method:: write(s)
