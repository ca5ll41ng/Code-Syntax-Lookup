---
id: "python-en-function-http-cookiejar-mozillacookiejar"
language: "python"
lang: "en"
category: "function"
name: "MozillaCookieJar"
signature: "MozillaCookieJar(filename=None, delayload=None, policy=None)"
directive: "class"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.MozillaCookieJar"
license: "PSF"
updated: "2026-10-01"
---

# MozillaCookieJar

A `FileCookieJar` that can load from and save cookies to disk in the
Mozilla `cookies.txt` file format (which is also used by curl and the Lynx
and Netscape browsers).

> **Note**
>
> This loses information about RFC 2965 cookies, and also about newer or
> non-standard cookie-attributes such as `port`.
>

> **Warning**
>
> Back up your cookies before saving if you have cookies whose loss / corruption
> would be inconvenient (there are some subtleties which may lead to slight
> changes in the file over a load / save round-trip).
>

Also note that cookies saved while Mozilla is running will get clobbered by
Mozilla.
