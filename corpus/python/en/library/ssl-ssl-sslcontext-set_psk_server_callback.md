---
id: "python-en-function-ssl-sslcontext-set_psk_server_callback"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_psk_server_callback"
signature: "SSLContext.set_psk_server_callback(callback, identity_hint=None)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_psk_server_callback"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_psk_server_callback

Enables TLS-PSK (pre-shared key) authentication on a server-side connection.

In general, certificate based authentication should be preferred over this method.

The parameter `callback` is a callable object with the signature:
`def callback(identity: str | None) -> bytes`.
The `identity` parameter is an optional identity sent by the client which can
be used to select a corresponding PSK.
The return value is a `bytes-like object` representing the pre-shared key.
Return a zero length PSK to reject the connection.

Setting `callback` to `None` removes any existing callback.

The parameter `identity_hint` is an optional identity hint string sent to
the client. The string must be less than or equal to `256` octets when
UTF-8 encoded.

> **Note**
>
> When using TLS 1.3 the `identity_hint` parameter is not sent to the client.
>

Example usage::

   context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
   context.maximum_version = ssl.TLSVersion.TLSv1_2
   context.set_ciphers('PSK')

   # A simple lambda:
   psk = bytes.fromhex('c0ffee')
   context.set_psk_server_callback(lambda identity: psk)

   # A table using the identity of the client:
   psk_table = { 'ClientId_1': bytes.fromhex('c0ffee'),
                 'ClientId_2': bytes.fromhex('facade')
   }
   def callback(identity):
       return psk_table.get(identity, b'')
   context.set_psk_server_callback(callback, 'ServerId_1')

This method will raise `NotImplementedError` if `HAS_PSK` is
`False`.

> *Added in 3.13*
