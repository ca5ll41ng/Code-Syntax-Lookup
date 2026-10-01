---
id: "python-en-function-urllib-request-request-method"
language: "python"
lang: "en"
category: "function"
name: "Request.method"
directive: "attribute"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.Request.method"
license: "PSF"
updated: "2026-10-01"
---

# Request.method

The HTTP request method to use.  By default its value is `None`,
which means that `~Request.get_method` will do its normal computation
of the method to be used.  Its value can be set (thus overriding the default
computation in `~Request.get_method`) either by providing a default
value by setting it at the class level in a `Request` subclass, or by
passing a value in to the `Request` constructor via the *method*
argument.

> *Added in 3.3*

> *Changed in 3.4*: A default value can now be set in subclasses; previously it could only be set via the constructor argument.
