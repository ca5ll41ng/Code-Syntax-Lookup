---
id: "python-en-function-wsgiref-basecgihandler"
language: "python"
lang: "en"
category: "function"
name: "BaseCGIHandler"
signature: "BaseCGIHandler(stdin, stdout, stderr, environ, multithread=True, multiprocess=False)"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.BaseCGIHandler"
license: "PSF"
updated: "2026-10-01"
---

# BaseCGIHandler

Similar to `CGIHandler`, but instead of using the `sys` and
`os` modules, the CGI environment and I/O streams are specified explicitly.
The *multithread* and *multiprocess* values are used to set the
`wsgi.multithread` and `wsgi.multiprocess` flags for any applications run by
the handler instance.

This class is a subclass of `SimpleHandler` intended for use with
software other than HTTP "origin servers".  If you are writing a gateway
protocol implementation (such as CGI, FastCGI, SCGI, etc.) that uses a
`Status:` header to send an HTTP status, you probably want to subclass this
instead of `SimpleHandler`.
