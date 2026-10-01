---
id: "python-zh-function-email-message-emailmessage"
language: "python"
lang: "zh"
category: "function"
name: "EmailMessage"
signature: "EmailMessage(policy=default)"
directive: "class"
module: "email.message"
source_url: "https://docs.python.org/zh-cn/3/library/email.message.html#email.message.EmailMessage"
license: "PSF"
updated: "2026-10-01"
---

# EmailMessage

If *policy* is specified use the rules it specifies to update and serialize
the representation of the message.  If *policy* is not set, use the
`~email.policy.default` policy, which follows the rules of the email
RFCs except for line endings (instead of the RFC mandated `\r\n`, it uses
the Python standard `\n` line endings).  For more information see the
`~email.policy` documentation. [2]_

method:: as_string(unixfrom=False, maxheaderlen=None, policy=None)

method:: __str__()

method:: as_bytes(unixfrom=False, policy=None)

method:: __bytes__()

method:: is_multipart()

method:: set_unixfrom(unixfrom)

method:: get_unixfrom()

The following methods implement the mapping-like interface for accessing the
message's headers.  Note that there are some semantic differences
between these methods and a normal mapping (i.e. dictionary) interface.  For
example, in a dictionary there are no duplicate keys, but here there may be
duplicate message headers.  Also, in dictionaries there is no guaranteed
order to the keys returned by `keys`, but in an `EmailMessage`
object, headers are always returned in the order they appeared in the
original message, or in which they were added to the message later.  Any
header deleted and then re-added is always appended to the end of the
header list.

These semantic differences are intentional and are biased toward
convenience in the most common use cases.

Note that in all cases, any envelope header present in the message is not
included in the mapping interface.

method:: __len__()

method:: __contains__(name)

method:: __getitem__(name)

method:: __setitem__(name, val)

method:: __delitem__(name)

method:: keys()

method:: values()

method:: items()

method:: get(name, failobj=None)

以下是一些与头有关的更多有用方法：

method:: get_all(name, failobj=None)

method:: add_header(_name, _value, **_params)

method:: replace_header(_name, _value)

method:: get_content_type()

method:: get_content_maintype()

method:: get_content_subtype()

method:: get_default_type()

method:: set_default_type(ctype)

method:: set_param(param, value, header='Content-Type', requote=True, \

method:: del_param(param, header='content-type', requote=True)

method:: get_filename(failobj=None)

method:: get_boundary(failobj=None)

method:: set_boundary(boundary)

method:: get_content_charset(failobj=None)

method:: get_charsets(failobj=None)

method:: is_attachment

method:: get_content_disposition()

The following methods relate to interrogating and manipulating the content
(payload) of the message.

method:: walk()

method:: get_body(preferencelist=('related', 'html', 'plain'))

method:: iter_attachments()

method:: iter_parts()

method:: get_content(*args, content_manager=None, **kw)

method:: set_content(*args, content_manager=None, **kw)

method:: make_related(boundary=None)

method:: make_alternative(boundary=None)

method:: make_mixed(boundary=None)

method:: add_related(*args, content_manager=None, **kw)

method:: add_alternative(*args, content_manager=None, **kw)

method:: add_attachment(*args, content_manager=None, **kw)

method:: clear()

method:: clear_content()

:class:`EmailMessage` 对象具有下列实例属性：

attribute:: preamble

attribute:: epilogue

attribute:: defects
