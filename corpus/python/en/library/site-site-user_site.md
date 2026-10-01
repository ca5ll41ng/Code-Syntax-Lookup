---
id: "python-en-function-site-user_site"
language: "python"
lang: "en"
category: "function"
name: "USER_SITE"
directive: "data"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.USER_SITE"
license: "PSF"
updated: "2026-10-01"
---

# USER_SITE

Path to the user site-packages for the running Python.  Can be `None` if
`getusersitepackages` hasn't been called yet.  Default value is
`~/.local/lib/python{X.Y}[t]/site-packages` for UNIX and non-framework
macOS builds, `~/Library/Python/{X.Y}/lib/python/site-packages` for macOS
framework builds, and `{%APPDATA%}\\Python\\Python{XY}\\site-packages`
on Windows.  The optional "t" indicates the free-threaded build.  This
directory is a site directory, which means that `.pth` files in it
will be processed.
