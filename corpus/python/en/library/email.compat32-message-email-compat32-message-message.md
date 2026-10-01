---
id: "python-en-function-email-compat32-message-message"
language: "python"
lang: "en"
category: "function"
name: "Message"
signature: "Message(policy=compat32)"
directive: "class"
module: "email.compat32-message"
source_url: "https://docs.python.org/3/library/email.compat32-message.html#email.compat32-message.Message"
license: "PSF"
updated: "2026-10-01"
---

# Message

If *policy* is specified (it must be an instance of a `~email.policy`
class) use the rules it specifies to update and serialize the representation
of the message.  If *policy* is not set, use the `compat32` policy, which maintains backward compatibility with
the Python 3.2 version of the email package.  For more information see the
`~email.policy` documentation.

> *Changed in 3.3 The *policy* keyword argument was added.*

method:: as_string(unixfrom=False, maxheaderlen=0, policy=None)

method:: __str__()

method:: as_bytes(unixfrom=False, policy=None)

method:: __bytes__()

method:: is_multipart()

method:: set_unixfrom(unixfrom)

method:: get_unixfrom()

method:: attach(payload)

method:: get_payload(i=None, decode=False)

method:: set_payload(payload, charset=None)

method:: set_charset(charset)

method:: get_charset()

The following methods implement a mapping-like interface for accessing the
message's RFC 2822 headers.  Note that there are some semantic differences
between these methods and a normal mapping (i.e. dictionary) interface.  For
example, in a dictionary there are no duplicate keys, but here there may be
duplicate message headers.  Also, in dictionaries there is no guaranteed
order to the keys returned by `keys`, but in a `Message` object,
headers are always returned in the order they appeared in the original
message, or were added to the message later.  Any header deleted and then
re-added are always appended to the end of the header list.

These semantic differences are intentional and are biased toward maximal
convenience.

Note that in all cases, any envelope header present in the message is not
included in the mapping interface.

In a model generated from bytes, any header values that (in contravention of
the RFCs) contain non-ASCII bytes will, when retrieved through this
interface, be represented as `~email.header.Header` objects with
a charset of `unknown-8bit`.

method:: __len__()

method:: __contains__(name)

method:: __getitem__(name)

method:: __setitem__(name, val)

method:: __delitem__(name)

method:: keys()

method:: values()

method:: items()

method:: get(name, failobj=None)

Here are some additional useful methods:

method:: get_all(name, failobj=None)

method:: add_header(_name, _value, **_params)

method:: replace_header(_name, _value)

method:: get_content_type()

method:: get_content_maintype()

method:: get_content_subtype()

method:: get_default_type()

method:: set_default_type(ctype)

method:: get_params(failobj=None, header='content-type', unquote=True)

method:: get_param(param, failobj=None, header='content-type', unquote=True)

method:: set_param(param, value, header='Content-Type', requote=True, \

method:: del_param(param, header='content-type', requote=True)

method:: set_type(type, header='Content-Type', requote=True)

method:: get_filename(failobj=None)

method:: get_boundary(failobj=None)

method:: set_boundary(boundary)

method:: get_content_charset(failobj=None)

method:: get_charsets(failobj=None)

method:: get_content_disposition()

method:: walk()

`Message` objects can also optionally contain two instance attributes,
which can be used when generating the plain text of a MIME message.

attribute:: preamble

attribute:: epilogue

attribute:: defects
