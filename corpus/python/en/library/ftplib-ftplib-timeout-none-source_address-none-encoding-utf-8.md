---
id: "python-en-function-ftplib-timeout-none-source_address-none-encoding-utf-8"
language: "python"
lang: "en"
category: "function"
name: "timeout=None, source_address=None, encoding='utf-8')"
directive: "class"
module: "ftplib"
source_url: "https://docs.python.org/3/library/ftplib.html#ftplib.timeout=None, source_address=None, encoding='utf-8')"
license: "PSF"
updated: "2026-10-01"
---

# timeout=None, source_address=None, encoding='utf-8')

An `FTP` subclass which adds TLS support to FTP as described in
RFC 4217.
Connect to port 21 implicitly securing the FTP control connection
before authenticating.

> **Note**
>
> The user must explicitly secure the data connection
> by calling the `prot_p` method.
>

:param str host:
   The hostname to connect to.
   If given, `connect(host)` is implicitly called by the constructor.

:param str user:
   param_doc_user
   If given, `login(host, passwd, acct)` is implicitly called
   by the constructor.

:param str passwd:
   param_doc_passwd

:param str acct:
   param_doc_acct

:param context:
   An SSL context object which allows bundling SSL configuration options,
   certificates and private keys into a single, potentially long-lived,
   structure.
   Please read `ssl-security` for best practices.
:type context: `ssl.SSLContext`

:param timeout:
   A timeout in seconds for blocking operations like `~FTP.connect`
   (default: the global default timeout setting).
:type timeout: float | None

:param source_address:
   param_doc_source_address
:type source_address: tuple | None

:param str encoding:
   param_doc_encoding

> *Added in 3.2*

> *Changed in 3.3*: Added the *source_address* parameter.

> *Changed in 3.4*: The class now supports hostname check with :attr:`ssl.SSLContext.check_hostname` and *Server Name Indication* (see :const:`ssl.HAS_SNI`).

> *Changed in 3.9*: If the *timeout* parameter is set to be zero, it will raise a :class:`ValueError` to prevent the creation of a non-blocking socket. The *encoding* parameter was added, and the default was changed from Latin-1 to UTF-8 to follow :rfc:`2640`.

> *Changed in 3.12*: The deprecated *keyfile* and *certfile* parameters have been removed.

Here's a sample session using the `FTP_TLS` class::

   >>> ftps = FTP_TLS('ftp.pureftpd.org')
   >>> ftps.login()
   '230 Anonymous user logged in'
   >>> ftps.prot_p()
   '200 Data protection level set to "private"'
   >>> ftps.nlst()
   ['6jack', 'OpenBSD', 'antilink', 'blogbench', 'bsdcam', 'clockspeed', 'djbdns-jedi', 'docs', 'eaccelerator-jedi', 'favicon.ico', 'francotone', 'fugu', 'ignore', 'libpuzzle', 'metalog', 'minidentd', 'misc', 'mysql-udf-global-user-variables', 'php-jenkins-hash', 'php-skein-hash', 'php-webdav', 'phpaudit', 'phpbench', 'pincaster', 'ping', 'posto', 'pub', 'public', 'public_keys', 'pure-ftpd', 'qscan', 'qtc', 'sharedance', 'skycache', 'sound', 'tmp', 'ucarp']

`FTP_TLS` class inherits from `FTP`,
defining these additional methods and attributes:

method:: FTP_TLS.auth()

method:: FTP_TLS.ccc()

method:: FTP_TLS.prot_p()

method:: FTP_TLS.prot_c()
