---
id: "python-en-function-urllib-request-install_opener"
language: "python"
lang: "en"
category: "function"
name: "install_opener"
signature: "install_opener(opener)"
directive: "function"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.install_opener"
license: "PSF"
updated: "2026-10-01"
---

# install_opener

Install an `OpenerDirector` instance as the default global opener.
Installing an opener is only necessary if you want urlopen to use that
opener; otherwise, simply call `OpenerDirector.open` instead of
`~urllib.request.urlopen`.  The code does not check for a real
`OpenerDirector`, and any class with the appropriate interface will
work.
