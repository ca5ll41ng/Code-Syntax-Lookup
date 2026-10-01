---
id: "python-en-function-weakref-proxy"
language: "python"
lang: "en"
category: "function"
name: "proxy"
signature: "proxy(object[, callback])"
directive: "function"
module: "weakref"
source_url: "https://docs.python.org/3/library/weakref.html#weakref.proxy"
license: "PSF"
updated: "2026-10-01"
---

# proxy

Return a proxy to *object* which uses a weak reference.  This supports use of
the proxy in most contexts instead of requiring the explicit dereferencing used
with weak reference objects.  The returned object will have a type of either
`ProxyType` or `CallableProxyType`, depending on whether *object* is
callable.  Proxy objects are not `hashable` regardless of the referent; this
avoids a number of problems related to their fundamentally mutable nature, and
prevents their use as dictionary keys.  *callback* is the same as the parameter
of the same name to the `ref` function.

Accessing an attribute of the proxy object after the referent is
garbage collected raises `ReferenceError`.

> *Changed in 3.8*: Extended the operator support on proxy objects to include the matrix multiplication operators ``@`` and ``@=``.

> *Changed in next*: Raise :exc:`!TypeError` if *callback* is not callable or ``None``.
