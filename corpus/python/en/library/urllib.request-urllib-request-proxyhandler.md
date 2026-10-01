---
id: "python-en-function-urllib-request-proxyhandler"
language: "python"
lang: "en"
category: "function"
name: "ProxyHandler"
signature: "ProxyHandler(proxies=None)"
directive: "class"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.ProxyHandler"
license: "PSF"
updated: "2026-10-01"
---

# ProxyHandler

Cause requests to go through a proxy. If *proxies* is given, it must be a
dictionary mapping protocol names to URLs of proxies. The default is to read
the list of proxies from the environment variables
`<protocol>_proxy`.  If no proxy environment variables are set, then
in a Windows environment proxy settings are obtained from the registry's
Internet Settings section, and in a macOS environment proxy information
is retrieved from the System Configuration Framework.

To disable autodetected proxy pass an empty dictionary.

The `no_proxy` environment variable can be used to specify hosts
which shouldn't be reached via proxy; if set, it should be a comma-separated
list of hostname suffixes, optionally with `:port` appended, for example
`cern.ch,ncsa.uiuc.edu,some.host:8080`.

> **Note**
>
> `HTTP_PROXY` will be ignored if a variable `REQUEST_METHOD` is set;
> see the documentation on `~urllib.request.getproxies`.
>
