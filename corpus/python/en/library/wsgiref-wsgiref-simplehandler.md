---
id: "python-en-function-wsgiref-simplehandler"
language: "python"
lang: "en"
category: "function"
name: "SimpleHandler"
signature: "SimpleHandler(stdin, stdout, stderr, environ, multithread=True, multiprocess=False)"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.SimpleHandler"
license: "PSF"
updated: "2026-10-01"
---

# SimpleHandler

Similar to `BaseCGIHandler`, but designed for use with HTTP origin
servers.  If you are writing an HTTP server implementation, you will probably
want to subclass this instead of `BaseCGIHandler`.

This class is a subclass of `BaseHandler`.  It overrides the
`__init__`, `~BaseHandler.get_stdin`,
`~BaseHandler.get_stderr`, `~BaseHandler.add_cgi_vars`,
`~BaseHandler._write`, and `~BaseHandler._flush` methods to
support explicitly setting the
environment and streams via the constructor.  The supplied environment and
streams are stored in the `stdin`, `stdout`, `stderr`, and
`environ` attributes.

The `~io.BufferedIOBase.write` method of *stdout* should write
each chunk in full, like `io.BufferedIOBase`.
