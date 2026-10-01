---
id: "python-zh-function-ssl-sslcontext-set_psk_client_callback"
language: "python"
lang: "zh"
category: "function"
name: "SSLContext.set_psk_client_callback"
signature: "SSLContext.set_psk_client_callback(callback)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.SSLContext.set_psk_client_callback"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_psk_client_callback

在客户端连接上启用 TLS-PSK（预共享密钥）验证。

一般来说，基于证书的身份验证应当优先于此方法。

The parameter `callback` is a callable object with the signature:
`def callback(hint: str  None) -> tuple[str  None, bytes]`.
The `hint` parameter is an optional identity hint sent by the server.
The return value is a tuple in the form (client-identity, psk).
Client-identity is an optional string which may be used by the server to
select a corresponding PSK for the client. The string must be less than or
equal to `256` octets when UTF-8 encoded. PSK is a
`bytes-like object` representing the pre-shared key. Return a zero
length PSK to reject the connection.

将 ``callback`` 设为 :const:`None` 将移除任何现有的回调。

> **Note**
>
> 当使用 TLS 1.3 时：
>
> - the `hint` parameter is always `None`.
> - client-identity must be a non-empty string.
>

用法示例::

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
