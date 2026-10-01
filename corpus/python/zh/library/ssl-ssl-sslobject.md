---
id: "python-zh-function-ssl-sslobject"
language: "python"
lang: "zh"
category: "function"
name: "SSLObject"
directive: "class"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.SSLObject"
license: "PSF"
updated: "2026-10-01"
---

# SSLObject

A reduced-scope variant of `SSLSocket` representing an SSL protocol
instance that does not contain any network IO methods. This class is
typically used by framework authors that want to implement asynchronous IO
for SSL through memory buffers.

This class implements an interface on top of a low-level SSL object as
implemented by OpenSSL. This object captures the state of an SSL connection
but does not provide any network IO itself. IO needs to be performed through
separate "BIO" objects which are OpenSSL's IO abstraction layer.

This class has no public constructor.  An `SSLObject` instance
must be created using the `~SSLContext.wrap_bio` method. This
method will create the `SSLObject` instance and bind it to a
pair of BIOs. The *incoming* BIO is used to pass data from Python to the
SSL protocol instance, while the *outgoing* BIO is used to pass data the
other way around.

可以使用以下方法：

- `~SSLSocket.context`
- `~SSLSocket.server_side`
- `~SSLSocket.server_hostname`
- `~SSLSocket.session`
- `~SSLSocket.session_reused`
- `~SSLSocket.read`
- `~SSLSocket.write`
- `~SSLSocket.getpeercert`
- `~SSLSocket.get_verified_chain`
- `~SSLSocket.get_unverified_chain`
- `~SSLSocket.selected_alpn_protocol`
- `~SSLSocket.selected_npn_protocol`
- `~SSLSocket.cipher`
- `~SSLSocket.shared_ciphers`
- `~SSLSocket.compression`
- `~SSLSocket.pending`
- `~SSLSocket.do_handshake`
- `~SSLSocket.verify_client_post_handshake`
- `~SSLSocket.unwrap`
- `~SSLSocket.get_channel_binding`
- `~SSLSocket.version`

When compared to `SSLSocket`, this object lacks the following
features:

- Any form of network IO; `recv()` and `send()` read and write only to
  the underlying `MemoryBIO` buffers.

- There is no *do_handshake_on_connect* machinery. You must always manually
  call `~SSLSocket.do_handshake` to start the handshake.

- There is no handling of *suppress_ragged_eofs*. All end-of-file conditions
  that are in violation of the protocol are reported via the
  `SSLEOFError` exception.

- The method `~SSLSocket.unwrap` call does not return anything,
  unlike for an SSL socket where it returns the underlying socket.

- The *server_name_callback* callback passed to
  `SSLContext.set_servername_callback` will get an `SSLObject`
  instance instead of a `SSLSocket` instance as its first parameter.

有关 :class:`SSLObject` 用法的一些说明：

- All IO on an `SSLObject` is `non-blocking`.
  This means that for example `~SSLSocket.read` will raise an
  `SSLWantReadError` if it needs more data than the incoming BIO has
  available.

> *Changed in 3.7*: :class:`SSLObject` instances must be created with :meth:`~SSLContext.wrap_bio`. In earlier versions, it was possible to create instances directly. This was never documented or officially supported.
