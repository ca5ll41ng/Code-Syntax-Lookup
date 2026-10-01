---
id: "python-en-function-http-cookiejar-defaultcookiepolicy"
language: "python"
lang: "en"
category: "function"
name: "DefaultCookiePolicy"
signature: "DefaultCookiePolicy( blocked_domains=None, allowed_domains=None, netscape=True, rfc2965=False, rfc2109_as_netscape=None, hide_cookie2=False, strict_domain=False, strict_rfc2965_unverifiable=True, strict_ns_unverifiable=False, strict_ns_domain=DefaultCookiePolicy.DomainLiberal, strict_ns_set_initial_dollar=False, strict_ns_set_path=False, secure_protocols=(\"https\", \"wss\") )"
directive: "class"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy"
license: "PSF"
updated: "2026-10-01"
---

# DefaultCookiePolicy

Constructor arguments should be passed as keyword arguments only.
*blocked_domains* is a sequence of domain names that we never accept cookies
from, nor return cookies to. *allowed_domains* if not `None`, this is a
sequence of the only domains for which we accept and return cookies.
*secure_protocols* is a sequence of protocols for which secure cookies can be
added to. By default *https* and *wss* (secure websocket) are considered
secure protocols. For all other arguments, see the documentation for
`CookiePolicy` and `DefaultCookiePolicy` objects.

`DefaultCookiePolicy` implements the standard accept / reject rules for
Netscape and RFC 2965 cookies.  By default, RFC 2109 cookies (that is, cookies
received in a `Set-Cookie` header with a version cookie-attribute of
1) are treated according to the RFC 2965 rules.  However, if RFC 2965 handling
is turned off or `rfc2109_as_netscape` is `True`, RFC 2109 cookies are
'downgraded' by the `CookieJar` instance to Netscape cookies, by
setting the `~Cookie.version` attribute of the `Cookie` instance to 0.
`DefaultCookiePolicy` also provides some parameters to allow some
fine-tuning of policy.
