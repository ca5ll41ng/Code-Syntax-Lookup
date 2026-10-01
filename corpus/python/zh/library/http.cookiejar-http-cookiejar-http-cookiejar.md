---
id: "python-zh-function-http-cookiejar-http-cookiejar"
language: "python"
lang: "zh"
category: "function"
name: "http.cookiejar"
title: "Examples"
directive: "module"
module: "http.cookiejar"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookiejar.html#module-http.cookiejar"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

第一个例子显示了 :mod:`!http.cookiejar` 的最常见用法::

   import http.cookiejar, urllib.request
   cj = http.cookiejar.CookieJar()
   opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
   r = opener.open("http://example.com/")

This example illustrates how to open a URL using your Netscape, Mozilla, or Lynx
cookies (assumes Unix/Netscape convention for location of the cookies file)::

   import os, http.cookiejar, urllib.request
   cj = http.cookiejar.MozillaCookieJar()
   cj.load(os.path.join(os.path.expanduser("~"), ".netscape", "cookies.txt"))
   opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
   r = opener.open("http://example.com/")

The next example illustrates the use of `DefaultCookiePolicy`. Turn on
RFC 2965 cookies, be more strict about domains when setting and returning
Netscape cookies, and block some domains from setting cookies or having them
returned::

   import urllib.request
   from http.cookiejar import CookieJar, DefaultCookiePolicy
   policy = DefaultCookiePolicy(
       rfc2965=True, strict_ns_domain=Policy.DomainStrict,
       blocked_domains=["ads.net", ".ads.net"])
   cj = CookieJar(policy)
   opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
   r = opener.open("http://example.com/")
