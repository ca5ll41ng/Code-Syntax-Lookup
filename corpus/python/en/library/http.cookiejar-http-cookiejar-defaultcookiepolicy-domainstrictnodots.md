---
id: "python-en-function-http-cookiejar-defaultcookiepolicy-domainstrictnodots"
language: "python"
lang: "en"
category: "function"
name: "DefaultCookiePolicy.DomainStrictNoDots"
directive: "attribute"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrictNoDots"
license: "PSF"
updated: "2026-10-01"
---

# DefaultCookiePolicy.DomainStrictNoDots

When setting cookies, the 'host prefix' must not contain a dot (for example,
`www.foo.bar.com` can't set a cookie for `.bar.com`, because `www.foo`
contains a dot).
