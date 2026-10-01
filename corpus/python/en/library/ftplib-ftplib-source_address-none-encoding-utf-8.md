---
id: "python-en-function-ftplib-source_address-none-encoding-utf-8"
language: "python"
lang: "en"
category: "function"
name: "source_address=None, *, encoding='utf-8')"
directive: "class"
module: "ftplib"
source_url: "https://docs.python.org/3/library/ftplib.html#ftplib.source_address=None, *, encoding='utf-8')"
license: "PSF"
updated: "2026-10-01"
---

# source_address=None, *, encoding='utf-8')

Return a new instance of the `FTP` class.

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

:param timeout:
   A timeout in seconds for blocking operations like `connect`
   (default: the global default timeout setting).
:type timeout: float | None

:param source_address:
   param_doc_source_address
:type source_address: tuple | None

:param str encoding:
   param_doc_encoding

The `FTP` class supports the `with` statement, e.g.:

 >>> from ftplib import FTP
 >>> with FTP("ftp1.at.proftpd.org") as ftp:
 ...     ftp.login()
 ...     ftp.dir()
 ... # doctest: +SKIP
 '230 Anonymous login ok, restrictions apply.'
 dr-xr-xr-x   9 ftp      ftp           154 May  6 10:43 .
 dr-xr-xr-x   9 ftp      ftp           154 May  6 10:43 ..
 dr-xr-xr-x   5 ftp      ftp          4096 May  6 10:43 CentOS
 dr-xr-xr-x   3 ftp      ftp            18 Jul 10  2008 Fedora
 >>>

> *Changed in 3.2*: Support for the :keyword:`with` statement was added.

> *Changed in 3.3*: *source_address* parameter was added.

> *Changed in 3.9*: If the *timeout* parameter is set to be zero, it will raise a :class:`ValueError` to prevent the creation of a non-blocking socket. The *encoding* parameter was added, and the default was changed from Latin-1 to UTF-8 to follow :rfc:`2640`.

Several `FTP` methods are available in two flavors:
one for handling text files and another for binary files.
The methods are named for the command which is used followed by
`lines` for the text version or `binary` for the binary version.

`FTP` instances have the following methods:

method:: FTP.set_debuglevel(level)

method:: FTP.connect(host='', port=0, timeout=None, source_address=None)

method:: FTP.getwelcome()

method:: FTP.login(user='anonymous', passwd='', acct='')

method:: FTP.abort()

method:: FTP.sendcmd(cmd)

method:: FTP.voidcmd(cmd)

method:: FTP.retrbinary(cmd, callback, blocksize=8192, rest=None)

method:: FTP.retrlines(cmd, callback=None)

method:: FTP.set_pasv(val)

method:: FTP.storbinary(cmd, fp, blocksize=8192, callback=None, rest=None)

method:: FTP.storlines(cmd, fp, callback=None)

method:: FTP.transfercmd(cmd, rest=None)

method:: FTP.ntransfercmd(cmd, rest=None)

method:: FTP.mlsd(path="", facts=[])

method:: FTP.nlst(argument[, ...])

method:: FTP.dir(argument[, ...])

method:: FTP.rename(fromname, toname)

method:: FTP.delete(filename)

method:: FTP.cwd(pathname)

method:: FTP.mkd(pathname)

method:: FTP.pwd()

method:: FTP.rmd(dirname)

method:: FTP.size(filename)

method:: FTP.quit()

method:: FTP.close()
