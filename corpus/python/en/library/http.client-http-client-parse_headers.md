---
id: "python-en-function-http-client-parse_headers"
language: "python"
lang: "en"
category: "function"
name: "parse_headers"
signature: "parse_headers(fp)"
directive: "function"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.parse_headers"
license: "PSF"
updated: "2026-10-01"
---

# parse_headers

Parse the headers from a file pointer *fp* representing a HTTP
request/response. The file has to be a `~io.BufferedIOBase` reader
(i.e. not text) and must provide a valid RFC 5322 style header.

This function returns an instance of `http.client.HTTPMessage`
that holds the header fields, but no payload
(the same as `HTTPResponse.msg`
and `http.server.BaseHTTPRequestHandler.headers`).
After returning, the file pointer *fp* is ready to read the HTTP body.

> **Note**
>
> `parse_headers` does not parse the start-line of a HTTP message;
> it only parses the `Name: value` lines. The file has to be ready to
> read these field lines, so the first line should already be consumed
> before calling the function.
>
