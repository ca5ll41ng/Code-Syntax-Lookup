---
id: "python-en-function-http-server-http-server"
language: "python"
lang: "en"
category: "function"
name: "http.server"
title: "The `SimpleHTTPRequestHandler` class can be used to create a very basic"
directive: "module"
module: "http.server"
source_url: "https://docs.python.org/3/library/http.server.html#module-http.server"
license: "PSF"
updated: "2026-10-01"
---

# The `SimpleHTTPRequestHandler` class can be used to create a very basic

The `SimpleHTTPRequestHandler` class can be used to create a very basic
webserver serving files relative to the current directory as follows::

   import http.server
   import socketserver

   PORT = 8000

   Handler = http.server.SimpleHTTPRequestHandler

   with socketserver.TCPServer(("", PORT), Handler) as httpd:
       print("serving at port", PORT)
       httpd.serve_forever()

`SimpleHTTPRequestHandler` can also be subclassed to enhance behavior,
such as using different index file names by overriding the class attribute
`~SimpleHTTPRequestHandler.index_pages`.

.. _http-server-cli:

**Command-line interface**

`http.server` can also be invoked directly using the `-m`
switch of the interpreter.  The following example illustrates how to serve
files relative to the current directory:

```bash

python -m http.server [OPTIONS] [port]
```

The following options are accepted:

program:: http.server

option:: port

option:: -b, --bind <address>

option:: -d, --directory <dir>

option:: -p, --protocol <version>

option:: --content-type <content_type>

option:: --tls-cert

option:: --tls-key

option:: --tls-password-file

option:: -H, --header <header> <value>

.. _http.server-security:

**Security considerations**

`SimpleHTTPRequestHandler` will follow symbolic links when handling
requests which makes it possible for files outside of the specified directory
to be served.

Methods `BaseHTTPRequestHandler.send_header` and
`BaseHTTPRequestHandler.send_response_only` assume sanitized input
and do not perform input validation such as checking for the presence of CRLF
sequences. Untrusted input may result in HTTP header injection attacks.

Earlier versions of Python did not scrub control characters from the
log messages emitted to stderr from `python -m http.server` or the
default `BaseHTTPRequestHandler` `.log_message`
implementation. This could allow remote clients connecting to your
server to send nefarious control codes to your terminal.

> *Changed in 3.12*: Control characters are scrubbed in stderr logs.
