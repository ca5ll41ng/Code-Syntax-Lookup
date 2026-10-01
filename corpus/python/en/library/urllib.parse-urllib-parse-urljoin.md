---
id: "python-en-function-urllib-parse-urljoin"
language: "python"
lang: "en"
category: "function"
name: "urljoin"
signature: "urljoin(base, url, allow_fragments=True)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urljoin"
license: "PSF"
updated: "2026-10-01"
---

# urljoin

Construct a full ("absolute") URL by combining a "base URL" (*base*) with
another URL (*url*).  Informally, this uses components of the base URL, in
particular the addressing scheme, the network location and (part of) the
path, to provide missing components in the relative URL.  For example:

   >>> from urllib.parse import urljoin
   >>> urljoin('http://www.cwi.nl/%7Eguido/Python.html', 'FAQ.html')
   'http://www.cwi.nl/%7Eguido/FAQ.html'

The *allow_fragments* argument has the same meaning and default as for
`urlsplit`.

> **Note**
>
> If *url* is an absolute URL (that is, it starts with `//` or `scheme://`),
> the *url*'s hostname and/or scheme will be present in the result.  For example:
>
> ```python
>
> >>> urljoin('http://www.cwi.nl/%7Eguido/Python.html',
> ...         '//www.python.org/%7Eguido')
> 'http://www.python.org/%7Eguido'
> ```
>
> If you do not want that behavior, preprocess the *url* with `urlsplit` and
> `urlunsplit`, removing possible *scheme* and *netloc* parts.
>

> **Warning**
>
> Because an absolute URL may be passed as the `url` parameter, it is
> generally **not secure** to use `urljoin` with an attacker-controlled
> `url`. For example in,
> `urljoin("https://website.com/users/", username)`, if `username` can
> contain an absolute URL, the result of `urljoin` will be the absolute
> URL.
>

> *Changed in 3.5*: Behavior updated to match the semantics defined in :rfc:`3986`.
