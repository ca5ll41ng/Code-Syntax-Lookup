---
id: "python-zh-function-ssl-sslcontext-set_psk_server_callback"
language: "python"
lang: "zh"
category: "function"
name: "SSLContext.set_psk_server_callback"
signature: "SSLContext.set_psk_server_callback(callback, identity_hint=None)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.SSLContext.set_psk_server_callback"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_psk_server_callback

在服务器端连接上启用 TLS-PSK（预共享密钥验证）。

一般来说，基于证书的身份验证应当优先于此方法。

The parameter `callback` is a callable object with the signature:
`def callback(identity: str | None) -> bytes`.
The `identity` parameter is an optional identity sent by the client which can
be used to select a corresponding PSK.
The return value is a `bytes-like object` representing the pre-shared key.
Return a zero length PSK to reject the connection.

将 ``callback`` 设为 :const:`None` 将移除任何现有的回调。

The parameter `identity_hint` is an optional identity hint string sent to
the client. The string must be less than or equal to `256` octets when
UTF-8 encoded.

> **Note**
>
> 当使用 TLS 1.3 时 ``identity_hint`` 形参将不会被发送给客户端。
>

用法示例::

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
