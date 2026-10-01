---
id: "python-en-function-urllib-request-getproxies"
language: "python"
lang: "en"
category: "function"
name: "getproxies"
signature: "getproxies()"
directive: "function"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.getproxies"
license: "PSF"
updated: "2026-10-01"
---

# getproxies

This helper function returns a dictionary of scheme to proxy server URL
mappings. It scans the environment for variables named `<scheme>_proxy`,
in a case insensitive approach, for all operating systems first, and when it
cannot find it, looks for proxy information from System
Configuration for macOS and Windows Systems Registry for Windows.
If both lowercase and uppercase environment variables exist (and disagree),
lowercase is preferred.

> **Note**
>
> If the environment variable `REQUEST_METHOD` is set, which usually
> indicates your script is running in a CGI environment, the environment
> variable `HTTP_PROXY` (uppercase `_PROXY`) will be ignored. This is
> because that variable can be injected by a client using the "Proxy:" HTTP
> header. If you need to use an HTTP proxy in a CGI environment, either use
> `ProxyHandler` explicitly, or make sure the variable name is in
> lowercase (or at least the `_proxy` suffix).
>
