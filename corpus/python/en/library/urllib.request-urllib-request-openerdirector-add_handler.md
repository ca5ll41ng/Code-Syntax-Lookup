---
id: "python-en-function-urllib-request-openerdirector-add_handler"
language: "python"
lang: "en"
category: "function"
name: "OpenerDirector.add_handler"
signature: "OpenerDirector.add_handler(handler)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.OpenerDirector.add_handler"
license: "PSF"
updated: "2026-10-01"
---

# OpenerDirector.add_handler

*handler* should be an instance of `BaseHandler`.  The following methods
are searched, and added to the possible chains (note that HTTP errors are a
special case).  Note that, in the following, *protocol* should be replaced
with the actual protocol to handle, for example `http_response` would
be the HTTP protocol response handler.  Also *type* should be replaced with
the actual HTTP code, for example `http_error_404` would handle HTTP
404 errors.

* `<protocol>_open` --- signal that the handler knows how to open *protocol*
  URLs.

  See protocol_open_ for more information.

* `http_error_\` --- signal that the handler knows how to handle HTTP
  errors with HTTP error code *type*.

  See http_error_nnn_ for more information.

* `<protocol>_error` --- signal that the handler knows how to handle errors
  from (non-\ `http`) *protocol*.

* `<protocol>_request` --- signal that the handler knows how to pre-process
  *protocol* requests.

  See protocol_request_ for more information.

* `<protocol>_response` --- signal that the handler knows how to
  post-process *protocol* responses.

  See protocol_response_ for more information.
