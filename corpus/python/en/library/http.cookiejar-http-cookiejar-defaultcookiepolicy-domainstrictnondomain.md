---
id: "python-en-function-http-cookiejar-defaultcookiepolicy-domainstrictnondomain"
language: "python"
lang: "en"
category: "function"
name: "DefaultCookiePolicy.DomainStrictNonDomain"
directive: "attribute"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrictNonDomain"
license: "PSF"
updated: "2026-10-01"
---

# DefaultCookiePolicy.DomainStrictNonDomain

Cookies that did not explicitly specify a `domain` cookie-attribute can only
be returned to a domain equal to the domain that set the cookie (for example,
`spam.example.com` won't be returned cookies from `example.com` that had no
`domain` cookie-attribute).
