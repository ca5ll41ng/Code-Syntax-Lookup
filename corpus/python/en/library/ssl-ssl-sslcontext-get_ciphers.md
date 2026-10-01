---
id: "python-en-function-ssl-sslcontext-get_ciphers"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.get_ciphers"
signature: "SSLContext.get_ciphers()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.get_ciphers"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.get_ciphers

Get a list of enabled ciphers. The list is in order of cipher priority.
See `SSLContext.set_ciphers`.

Example::

    >>> ctx = ssl.SSLContext(ssl.PROTOCOL_SSLv23)
    >>> ctx.set_ciphers('ECDHE+AESGCM:!ECDSA')
    >>> ctx.get_ciphers()
    [{'aead': True,
      'alg_bits': 256,
      'auth': 'auth-rsa',
      'description': 'ECDHE-RSA-AES256-GCM-SHA384 TLSv1.2 Kx=ECDH     Au=RSA  '
                     'Enc=AESGCM(256) Mac=AEAD',
      'digest': None,
      'id': 50380848,
      'kea': 'kx-ecdhe',
      'name': 'ECDHE-RSA-AES256-GCM-SHA384',
      'protocol': 'TLSv1.2',
      'strength_bits': 256,
      'symmetric': 'aes-256-gcm'},
     {'aead': True,
      'alg_bits': 128,
      'auth': 'auth-rsa',
      'description': 'ECDHE-RSA-AES128-GCM-SHA256 TLSv1.2 Kx=ECDH     Au=RSA  '
                     'Enc=AESGCM(128) Mac=AEAD',
      'digest': None,
      'id': 50380847,
      'kea': 'kx-ecdhe',
      'name': 'ECDHE-RSA-AES128-GCM-SHA256',
      'protocol': 'TLSv1.2',
      'strength_bits': 128,
      'symmetric': 'aes-128-gcm'}]

> *Added in 3.6*
