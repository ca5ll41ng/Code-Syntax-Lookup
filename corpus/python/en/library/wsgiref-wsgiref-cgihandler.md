---
id: "python-en-function-wsgiref-cgihandler"
language: "python"
lang: "en"
category: "function"
name: "CGIHandler"
signature: "CGIHandler()"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.CGIHandler"
license: "PSF"
updated: "2026-10-01"
---

# CGIHandler

CGI-based invocation via `sys.stdin`, `sys.stdout`, `sys.stderr` and
`os.environ`.  This is useful when you have a WSGI application and want to run
it as a CGI script.  Simply invoke `CGIHandler().run(app)`, where `app` is
the WSGI application object you wish to invoke.

This class is a subclass of `BaseCGIHandler` that sets `wsgi.run_once`
to true, `wsgi.multithread` to false, and `wsgi.multiprocess` to true, and
always uses `sys` and `os` to obtain the necessary CGI streams and
environment.
