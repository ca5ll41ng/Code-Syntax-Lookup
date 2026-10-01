---
id: "python-en-function-argparse-argumentparser-get_default"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.get_default"
signature: "ArgumentParser.get_default(dest)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.get_default"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.get_default

Get the default value for a namespace attribute, as set by either
`~ArgumentParser.add_argument` or by
`~ArgumentParser.set_defaults`::

  >>> parser = argparse.ArgumentParser()
  >>> parser.add_argument('--foo', default='badger')
  >>> parser.get_default('foo')
  'badger'
