---
id: "python-en-function-urllib-parse-urlsplit"
language: "python"
lang: "en"
category: "function"
name: "urlsplit"
signature: "urlsplit(urlstring, scheme=None, allow_fragments=True, *, missing_as_none=False)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urlsplit"
license: "PSF"
updated: "2026-10-01"
---

# urlsplit

Parse a URL into five components, returning a 5-item `named tuple`
`SplitResult` or `SplitResultBytes`.
This corresponds to the general structure of a URL:
`scheme://netloc/path?query#fragment`.
Each tuple item is a string, possibly empty, or `None` if
*missing_as_none* is true.
Not defined component are represented an empty string (by default) or
`None` if *missing_as_none* is true.
The delimiters as shown above are not part of the result, except for a
leading slash in the *path* component, which is retained if present.

Additionally, the netloc property is broken down into these additional
attributes added to the returned object: username, password, hostname, and
port.

Percent-encoded sequences are not decoded.

For example:

```python
:options: +NORMALIZE_WHITESPACE

>>> from urllib.parse import urlsplit
>>> urlsplit("scheme://netloc/path?query#fragment")
SplitResult(scheme='scheme', netloc='netloc', path='/path',
            query='query', fragment='fragment')
>>> o = urlsplit("http://docs.python.org:80/3/library/urllib.parse.html?"
...              "highlight=params#url-parsing")
>>> o
SplitResult(scheme='http', netloc='docs.python.org:80',
            path='/3/library/urllib.parse.html',
            query='highlight=params', fragment='url-parsing')
>>> o.scheme
'http'
>>> o.netloc
'docs.python.org:80'
>>> o.hostname
'docs.python.org'
>>> o.port
80
>>> o._replace(fragment="").geturl()
'http://docs.python.org:80/3/library/urllib.parse.html?highlight=params'
>>> urlsplit("http://docs.python.org?")
SplitResult(scheme='http', netloc='docs.python.org', path='',
            query='', fragment='')
>>> urlsplit("http://docs.python.org?", missing_as_none=True)
SplitResult(scheme='http', netloc='docs.python.org', path='',
            query='', fragment=None)
```

Following the syntax specifications in RFC 1808, `urlsplit` recognizes
a netloc only if it is properly introduced by '//'.  Otherwise the
input is presumed to be a relative URL and thus to start with
a path component.

```python
:options: +NORMALIZE_WHITESPACE

>>> from urllib.parse import urlsplit
>>> urlsplit('//www.cwi.nl:80/%7Eguido/Python.html')
SplitResult(scheme='', netloc='www.cwi.nl:80', path='/%7Eguido/Python.html',
            query='', fragment='')
>>> urlsplit('www.cwi.nl/%7Eguido/Python.html')
SplitResult(scheme='', netloc='', path='www.cwi.nl/%7Eguido/Python.html',
            query='', fragment='')
>>> urlsplit('help/Python.html')
SplitResult(scheme='', netloc='', path='help/Python.html',
            query='', fragment='')
>>> urlsplit('help/Python.html', missing_as_none=True)
SplitResult(scheme=None, netloc=None, path='help/Python.html',
            query=None, fragment=None)
```

The *scheme* argument gives the default addressing scheme, to be
used only if the URL does not specify one.  It should be the same type
(text or bytes) as *urlstring* or `None`, except that the `''` is
always allowed, and is automatically converted to `b''` if appropriate.

If the *allow_fragments* argument is false, fragment identifiers are not
recognized.  Instead, they are parsed as part of the path
or query component, and `fragment` is set to `None` or the empty
string (depending on the value of *missing_as_none*) in the return value.

The return value is a `named tuple`, which means that its items can
be accessed by index or as named attributes, which are:

+------------------+-------+-------------------------+-------------------------------+
 Attribute         Index  Value                    Value if not present          
+==================+=======+=========================+===============================+
 `scheme`    0      URL scheme specifier     *scheme* parameter or         
                                                   empty string [1]_             
+------------------+-------+-------------------------+-------------------------------+
 `netloc`    1      Network location part    `None` or empty string [1]_ 
+------------------+-------+-------------------------+-------------------------------+
 `path`      2      Hierarchical path        empty string                  
+------------------+-------+-------------------------+-------------------------------+
 `query`     3      Query component          `None` or empty string [1]_ 
+------------------+-------+-------------------------+-------------------------------+
 `fragment`  4      Fragment identifier      `None` or empty string [1]_ 
+------------------+-------+-------------------------+-------------------------------+
 `username`         User name                `None`                      
+------------------+-------+-------------------------+-------------------------------+
 `password`         Password                 `None`                      
+------------------+-------+-------------------------+-------------------------------+
 `hostname`         Host name (lower case)   `None`                      
+------------------+-------+-------------------------+-------------------------------+
 `port`             Port number as integer,  `None`                      
                          if present                                             
+------------------+-------+-------------------------+-------------------------------+

.. [1] Depending on the value of the *missing_as_none* argument.

Reading the `port` attribute will raise a `ValueError` if
an invalid port is specified in the URL.  See section
`urlparse-result-object` for more information on the result object.

Unmatched square brackets in the `netloc` attribute will raise a
`ValueError`.

Characters in the `netloc` attribute that decompose under NFKC
normalization (as used by the IDNA encoding) into any of `/`, `?`,
`#`, `@`, or `:` will raise a `ValueError`. If the URL is
decomposed before parsing, no error will be raised.

Following some of the `WHATWG spec`_ that updates RFC 3986, leading C0
control and space characters are stripped from the URL. `\n`,
`\r` and tab `\t` characters are removed from the URL at any position.

As is the case with all named tuples, the subclass has a few additional methods
and attributes that are particularly useful. One such method is `_replace`.
The `_replace` method will return a new `SplitResult` object
replacing specified fields with new values.

```python
:options: +NORMALIZE_WHITESPACE

>>> from urllib.parse import urlsplit
>>> u = urlsplit('//www.cwi.nl:80/%7Eguido/Python.html')
>>> u
SplitResult(scheme='', netloc='www.cwi.nl:80', path='/%7Eguido/Python.html',
            query='', fragment='')
>>> u._replace(scheme='http')
SplitResult(scheme='http', netloc='www.cwi.nl:80', path='/%7Eguido/Python.html',
            query='', fragment='')
```

> **Warning**
>
> `urlsplit` does not perform validation.  See `URL parsing
> security` for details.
>

> *Changed in 3.2*: Added IPv6 URL parsing capabilities.

> *Changed in 3.3*: The fragment is now parsed for all URL schemes (unless *allow_fragments* is false), in accordance with :rfc:`3986`.  Previously, an allowlist of schemes that support fragments existed.

> *Changed in 3.6*: Out-of-range port numbers now raise :exc:`ValueError`, instead of returning ``None``.

> *Changed in 3.8*: Characters that affect netloc parsing under NFKC normalization will now raise :exc:`ValueError`.

> *Changed in 3.10*: ASCII newline and tab characters are stripped from the URL.

> *Changed in 3.12*: Leading WHATWG C0 control and space characters are stripped from the URL.

> *Changed in 3.15*: Added the *missing_as_none* parameter.
