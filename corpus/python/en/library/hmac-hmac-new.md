---
id: "python-en-function-hmac-new"
language: "python"
lang: "en"
category: "function"
name: "new"
signature: "new(key, msg=None, digestmod)"
directive: "function"
module: "hmac"
source_url: "https://docs.python.org/3/library/hmac.html#hmac.new"
license: "PSF"
updated: "2026-10-01"
---

# new

Return a new hmac object.  *key* is a bytes or bytearray object giving the
secret key.  If *msg* is present, the method call `update(msg)` is made.
*digestmod* is the digest name, digest constructor or module for the HMAC
object to use.  It may be any name suitable to `hashlib.new`.
Despite its argument position, it is required.

> *Changed in 3.4*: Parameter *key* can be a bytes or bytearray object. Parameter *msg* can be of any type supported by :mod:`hashlib`. Parameter *digestmod* can be the name of a hash algorithm.

> *Changed in 3.8*: The *digestmod* argument is now required.  Pass it as a keyword argument to avoid awkwardness when you do not have an initial *msg*.
