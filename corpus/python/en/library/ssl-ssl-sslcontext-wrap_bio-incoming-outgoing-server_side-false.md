---
id: "python-en-function-ssl-sslcontext-wrap_bio-incoming-outgoing-server_side-false"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.wrap_bio(incoming, outgoing, server_side=False, \\"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.wrap_bio(incoming, outgoing, server_side=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.wrap_bio(incoming, outgoing, server_side=False, \

Wrap the BIO objects *incoming* and *outgoing* and return an instance of
`SSLContext.sslobject_class` (default `SSLObject`). The SSL
routines will read input data from the incoming BIO and write data to the
outgoing BIO.

The *server_side*, *server_hostname* and *session* parameters have the
same meaning as in `SSLContext.wrap_socket`, and are validated in
the same way: in particular a `ValueError` is raised when
`~SSLContext.check_hostname` is enabled but no *server_hostname* is
given, since there would be no name to match the peer's certificate
against.

> *Changed in 3.6*: *session* argument was added.

> *Changed in 3.7*: The method returns an instance of :attr:`SSLContext.sslobject_class` instead of hard-coded :class:`SSLObject`.

> *Changed in next*: The *server_side*, *server_hostname* and *session* parameters are now validated as :meth:`SSLContext.wrap_socket` validates them. Previously a context with :attr:`~SSLContext.check_hostname` enabled and no *server_hostname* was accepted, and verified the certificate chain but never the peer's identity.
