---
id: "python-en-function-logging-handlers-httphandler"
language: "python"
lang: "en"
category: "function"
name: "HTTPHandler"
signature: "HTTPHandler(host, url, method='GET', secure=False, credentials=None, context=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.HTTPHandler"
license: "PSF"
updated: "2026-10-01"
---

# HTTPHandler

Returns a new instance of the `HTTPHandler` class. The *host* can be
of the form `host:port`, should you need to use a specific port number.  If
no *method* is specified, `GET` is used. If *secure* is true, a HTTPS
connection will be used. The *context* parameter may be set to a
`ssl.SSLContext` instance to configure the SSL settings used for the
HTTPS connection. If *credentials* is specified, it should be a 2-tuple
consisting of userid and password, which will be placed in a HTTP
'Authorization' header using Basic authentication. If you specify
credentials, you should also specify secure=True so that your userid and
password are not passed in cleartext across the wire.

> *Changed in 3.5*: The *context* parameter was added.

method:: mapLogRecord(record)

method:: emit(record)

> **Note**
>
> the same as a generic formatting operation, using
> `~logging.Handler.setFormatter` to specify a
> `~logging.Formatter` for a `HTTPHandler` has no effect.
> Instead of calling `~logging.Handler.format`, this handler calls
> `mapLogRecord` and then `urllib.parse.urlencode` to encode the
> dictionary in a form suitable for sending to a web server.
>
