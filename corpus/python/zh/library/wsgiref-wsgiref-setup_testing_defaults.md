---
id: "python-zh-function-wsgiref-setup_testing_defaults"
language: "python"
lang: "zh"
category: "function"
name: "setup_testing_defaults"
signature: "setup_testing_defaults(environ)"
directive: "function"
module: "wsgiref"
source_url: "https://docs.python.org/zh-cn/3/library/wsgiref.html#wsgiref.setup_testing_defaults"
license: "PSF"
updated: "2026-10-01"
---

# setup_testing_defaults

以简短的默认值更新 *environ* 用于测试目的。

This routine adds various parameters required for WSGI, including `HTTP_HOST`,
`SERVER_NAME`, `SERVER_PORT`, `REQUEST_METHOD`, `SCRIPT_NAME`,
`PATH_INFO`, and all of the PEP 3333\ -defined `wsgi.*` variables.  It
only supplies default values, and does not replace any existing settings for
these variables.

This routine is intended to make it easier for unit tests of WSGI servers and
applications to set up dummy environments.  It should NOT be used by actual WSGI
servers or applications, since the data is fake!

Example usage (see also `~wsgiref.simple_server.demo_app`
for another example)::

   from wsgiref.util import setup_testing_defaults
   from wsgiref.simple_server import make_server

   # A relatively simple WSGI application. It's going to print out the
   # environment dictionary after being updated by setup_testing_defaults
   def simple_app(environ, start_response):
       setup_testing_defaults(environ)

       status = '200 OK'
       headers = [('Content-type', 'text/plain; charset=utf-8')]

       start_response(status, headers)

       ret = [("%s: %s\n" % (key, value)).encode("utf-8")
              for key, value in environ.items()]
       return ret

   with make_server('', 8000, simple_app) as httpd:
       print("Serving on port 8000...")
       httpd.serve_forever()
