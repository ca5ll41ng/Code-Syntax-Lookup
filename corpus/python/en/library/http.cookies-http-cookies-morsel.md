---
id: "python-en-function-http-cookies-morsel"
language: "python"
lang: "en"
category: "function"
name: "Morsel"
directive: "class"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.Morsel"
license: "PSF"
updated: "2026-10-01"
---

# Morsel

Abstract a key/value pair, which has some RFC 2109 attributes.

Morsels are dictionary-like objects, whose set of keys is constant --- the valid
RFC 2109 attributes, which are:

  attribute:: expires

The attribute `httponly` specifies that the cookie is only transferred
in HTTP requests, and is not accessible through JavaScript. This is intended
to mitigate some forms of cross-site scripting.

The attribute `samesite` controls when the browser sends the cookie with
cross-site requests. This helps to mitigate CSRF attacks. Valid values are
"Strict" (only sent with same-site requests), "Lax" (sent with same-site
requests and top-level navigations), and "None" (sent with same-site and
cross-site requests). When using "None", the "secure" attribute must also
be set, as required by modern browsers.

The attribute `partitioned` indicates to user agents that these
cross-site cookies *should* only be available in the same top-level context
that the cookie was first set in. For this to be accepted by the user agent,
you **must** also set `Secure`.

In addition, it is recommended to use the `__Host` prefix when setting
partitioned cookies to make them bound to the hostname and not the
registrable domain. Read
`CHIPS (Cookies Having Independent Partitioned State)`_
for full details and examples.

.. _CHIPS (Cookies Having Independent Partitioned State): https://github.com/privacycg/CHIPS/blob/main/README.md

The keys are case-insensitive and their default value is `''`.

> *Changed in 3.5*: :meth:`!__eq__` now takes :attr:`~Morsel.key` and :attr:`~Morsel.value` into account.

> *Changed in 3.7*: Attributes :attr:`~Morsel.key`, :attr:`~Morsel.value` and :attr:`~Morsel.coded_value` are read-only.  Use :meth:`~Morsel.set` for setting them.

> *Changed in 3.8*: Added support for the :attr:`samesite` attribute.

> *Changed in 3.14*: Added support for the :attr:`partitioned` attribute.
