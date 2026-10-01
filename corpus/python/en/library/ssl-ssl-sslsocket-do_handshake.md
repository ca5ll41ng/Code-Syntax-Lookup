---
id: "python-en-function-ssl-sslsocket-do_handshake"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.do_handshake"
signature: "SSLSocket.do_handshake(block=False)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.do_handshake"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.do_handshake

Perform the SSL setup handshake.

If *block* is true and the timeout obtained by `~socket.socket.gettimeout`
is zero, the socket is set in blocking mode until the handshake is performed.

> *Changed in 3.4*: The handshake method also performs :func:`!match_hostname` when the :attr:`~SSLContext.check_hostname` attribute of the socket's :attr:`~SSLSocket.context` is true.

> *Changed in 3.5*: The socket timeout is no longer reset each time bytes are received or sent. The socket timeout is now the maximum total duration of the handshake.

> *Changed in 3.7*: Hostname or IP address is matched by OpenSSL during handshake. The function :func:`!match_hostname` is no longer used. In case OpenSSL refuses a hostname or IP address, the handshake is aborted early and a TLS alert message is sent to the peer.
