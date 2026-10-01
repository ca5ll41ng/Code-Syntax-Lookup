---
id: "python-en-function-ssl-ssl"
language: "python"
lang: "en"
category: "function"
name: "ssl"
title: "Security considerations"
directive: "module"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#module-ssl"
license: "PSF"
updated: "2026-10-01"
---

# Security considerations

.. _ssl-security:

**Security considerations**

**Best defaults**

For **client use**, if you don't have any special requirements for your
security policy, it is highly recommended that you use the
`create_default_context` function to create your SSL context.
It will load the system's trusted CA certificates, enable certificate
validation and hostname checking, and try to choose reasonably secure
protocol and cipher settings.

For example, here is how you would use the `smtplib.SMTP` class to
create a trusted, secure connection to a SMTP server::

   >>> import ssl, smtplib
   >>> smtp = smtplib.SMTP("mail.python.org", port=587)
   >>> context = ssl.create_default_context()
   >>> smtp.starttls(context=context)
   (220, b'2.0.0 Ready to start TLS')

If a client certificate is needed for the connection, it can be added with
`SSLContext.load_cert_chain`.

By contrast, if you create the SSL context by calling the `SSLContext`
constructor yourself, it will not have certificate validation nor hostname
checking enabled by default.  If you do so, please read the paragraphs below
to achieve a good security level.

**Manual settings**

Verifying certificates
''''''''''''''''''''''

When calling the `SSLContext` constructor directly,
`CERT_NONE` is the default.  Since it does not authenticate the other
peer, it can be insecure, especially in client mode where most of the time you
would like to ensure the authenticity of the server you're talking to.
Therefore, when in client mode, it is highly recommended to use
`CERT_REQUIRED`.  However, it is in itself not sufficient; you also
have to check that the server certificate, which can be obtained by calling
`SSLSocket.getpeercert`, matches the desired service.  For many
protocols and applications, the service can be identified by the hostname.
This common check is automatically performed when
`SSLContext.check_hostname` is enabled.

> *Changed in 3.7*: Hostname matchings is now performed by OpenSSL. Python no longer uses :func:`!match_hostname`.

In server mode, if you want to authenticate your clients using the SSL layer
(rather than using a higher-level authentication mechanism), you'll also have
to specify `CERT_REQUIRED` and similarly check the client certificate.

Protocol versions
'''''''''''''''''

SSL versions 2 and 3 are considered insecure and are therefore dangerous to
use.  If you want maximum compatibility between clients and servers, it is
recommended to use `PROTOCOL_TLS_CLIENT` or
`PROTOCOL_TLS_SERVER` as the protocol version. SSLv2 and SSLv3 are
disabled by default.

::

   >>> client_context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
   >>> client_context.minimum_version = ssl.TLSVersion.TLSv1_2
   >>> client_context.maximum_version = ssl.TLSVersion.TLSv1_3

The SSL client context created above will only allow TLSv1.2 and TLSv1.3 (if
supported by your system) connections to a server. `PROTOCOL_TLS_CLIENT`
implies certificate validation and hostname checks by default. You have to
load certificates into the context.

Cipher selection
''''''''''''''''

If you have advanced security requirements, fine-tuning of the ciphers
enabled when negotiating a SSL session is possible through the
`SSLContext.set_ciphers` method.  Starting from Python 3.2.3, the
ssl module disables certain weak ciphers by default, but you may want
to further restrict the cipher choice. Be sure to read OpenSSL's documentation
about the [cipher list format](https://docs.openssl.org/1.1.1/man1/ciphers/#cipher-list-format).
If you want to check which ciphers are enabled by a given cipher list, use
`SSLContext.get_ciphers` or the `openssl ciphers` command on your
system.

**Multi-processing**

If using this module as part of a multi-processed application (using,
for example the `multiprocessing` or `concurrent.futures` modules),
be aware that OpenSSL's internal random number generator does not properly
handle forked processes.  Applications must change the PRNG state of the
parent process if they use any SSL feature with `os.fork`.  Any
successful call of `~ssl.RAND_add` or `~ssl.RAND_bytes` is
sufficient.

.. _ssl-tlsv1_3:

**TLS 1.3**

> *Added in 3.7*

The TLS 1.3 protocol behaves slightly differently than previous version
of TLS/SSL. Some new TLS 1.3 features are not yet available.

- TLS 1.3 uses a disjunct set of cipher suites.  All AES-GCM and ChaCha20
  cipher suites are enabled by default.  To restrict which TLS 1.3 ciphers
  are allowed, the `SSLContext.set_ciphersuites` method should be
  called instead of `SSLContext.set_ciphers`, which only affects
  ciphers in older TLS versions.  The `SSLContext.get_ciphers` method
  returns information about ciphers for both TLS 1.3 and earlier versions
  and the method `SSLSocket.cipher` returns information about the
  negotiated cipher for both TLS 1.3 and earlier versions once a connection
  is established.
- Session tickets are no longer sent as part of the initial handshake and
  are handled differently.  `SSLSocket.session` and `SSLSession`
  are not compatible with TLS 1.3.
- Client-side certificates are also no longer verified during the initial
  handshake.  A server can request a certificate at any time.  Clients
  process certificate requests while they send or receive application data
  from the server.
- TLS 1.3 features like early data, deferred TLS client cert request,
  and rekeying are not supported yet.

> **Seealso**
>
> Class `socket.socket`
>     Documentation of underlying `socket` class
>
> [SSL/TLS Strong Encryption: An Introduction](https://httpd.apache.org/docs/trunk/en/ssl/ssl_intro.html)
>     Intro from the Apache HTTP Server documentation
>
> RFC RFC 1422: Privacy Enhancement for Internet Electronic Mail: Part II: Certificate-Based Key Management <1422>
>     Steve Kent
>
> RFC RFC 4086: Randomness Requirements for Security <4086>
>     Donald E. Eastlake, Jeffrey I. Schiller, Steve Crocker
>
> RFC RFC 5280: Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL) Profile <5280>
>     David Cooper et al.
>
> RFC RFC 5246: The Transport Layer Security (TLS) Protocol Version 1.2 <5246>
>     Tim Dierks and Eric Rescorla.
>
> RFC RFC 6066: Transport Layer Security (TLS) Extensions <6066>
>     Donald E. Eastlake
>
> [IANA TLS: Transport Layer Security (TLS) Parameters](https://www.iana.org/assignments/tls-parameters/tls-parameters.xml)
>     IANA
>
> RFC RFC 7525: Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS) <7525>
>     IETF
>
> [Mozilla's Server Side TLS recommendations](https://wiki.mozilla.org/Security/Server_Side_TLS)
>     Mozilla
>
