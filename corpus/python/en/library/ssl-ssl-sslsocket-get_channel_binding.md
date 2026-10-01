---
id: "python-en-function-ssl-sslsocket-get_channel_binding"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.get_channel_binding"
signature: "SSLSocket.get_channel_binding(cb_type=\"tls-unique\")"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.get_channel_binding"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.get_channel_binding

Get channel binding data for current connection, as a bytes object.  Returns
`None` if not connected or the handshake has not been completed.

The *cb_type* parameter allow selection of the desired channel binding
type. Valid channel binding types are listed in the
`CHANNEL_BINDING_TYPES` list.  Currently only the 'tls-unique' channel
binding, defined by RFC 5929, is supported.  `ValueError` will be
raised if an unsupported channel binding type is requested.

> *Added in 3.3*
