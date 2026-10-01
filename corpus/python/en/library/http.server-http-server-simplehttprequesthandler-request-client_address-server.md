---
id: "python-en-function-http-server-simplehttprequesthandler-request-client_address-server"
language: "python"
lang: "en"
category: "function"
name: "SimpleHTTPRequestHandler(request, client_address, server, \\"
directive: "class"
module: "http.server"
source_url: "https://docs.python.org/3/library/http.server.html#http.server.SimpleHTTPRequestHandler(request, client_address, server, \\"
license: "PSF"
updated: "2026-10-01"
---

# SimpleHTTPRequestHandler(request, client_address, server, \

This class serves files from the directory *directory* and below,
or the current directory if *directory* is not provided, directly
mapping the directory structure to HTTP requests.

> *Changed in 3.7*: Added the *directory* parameter.

> *Changed in 3.9*: The *directory* parameter accepts a :term:`path-like object`.

> *Changed in 3.15*: Added *extra_response_headers* parameter.

A lot of the work, such as parsing the request, is done by the base class
`BaseHTTPRequestHandler`.  This class implements the `do_GET`
and `do_HEAD` functions.

The following are defined as class-level attributes of
`SimpleHTTPRequestHandler`:

attribute:: server_version

attribute:: default_content_type

attribute:: index_pages

attribute:: extensions_map

attribute:: extra_response_headers

The `SimpleHTTPRequestHandler` class defines the following methods:

method:: do_HEAD()

method:: do_GET()

method:: list_directory(path)

method:: guess_type(path)
