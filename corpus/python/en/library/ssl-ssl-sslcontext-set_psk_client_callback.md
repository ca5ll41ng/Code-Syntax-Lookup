---
id: "python-en-function-ssl-sslcontext-set_psk_client_callback"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_psk_client_callback"
signature: "SSLContext.set_psk_client_callback(callback)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_psk_client_callback"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_psk_client_callback

Enables TLS-PSK (pre-shared key) authentication on a client-side connection.

In general, certificate based authentication should be preferred over this method.

The parameter `callback` is a callable object with the signature:
`def callback(hint: str  None) -> tuple[str  None, bytes]`.
The `hint` parameter is an optional identity hint sent by the server.
The return value is a tuple in the form (client-identity, psk).
Client-identity is an optional string which may be used by the server to
select a corresponding PSK for the client. The string must be less than or
equal to `256` octets when UTF-8 encoded. PSK is a
`bytes-like object` representing the pre-shared key. Return a zero
length PSK to reject the connection.

Setting `callback` to `None` removes any existing callback.

> **Note**
>
> When using TLS 1.3:
>
> - the `hint` parameter is always `None`.
> - client-identity must be a non-empty string.
>

Example usage::

   context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
   context.check_hostname = False
   context.verify_mode = ssl.CERT_NONE
   context.maximum_version = ssl.TLSVersion.TLSv1_2
   context.set_ciphers('PSK')

   # A simple lambda:
   psk = bytes.fromhex('c0ffee')
   context.set_psk_client_callback(lambda hint: (None, psk))

   # A table using the hint from the server:
   psk_table = { 'ServerId_1': bytes.fromhex('c0ffee'),
                 'ServerId_2': bytes.fromhex('facade')
   }
   def callback(hint):
       return 'ClientId_1', psk_table.get(hint, b'')
   context.set_psk_client_callback(callback)

This method will raise `NotImplementedError` if `HAS_PSK` is
`False`.

> *Added in 3.13*
