---
id: "python-en-function-configparser-configparser-boolean_states"
language: "python"
lang: "en"
category: "function"
name: "ConfigParser.BOOLEAN_STATES"
directive: "attribute"
module: "configparser"
source_url: "https://docs.python.org/3/library/configparser.html#configparser.ConfigParser.BOOLEAN_STATES"
license: "PSF"
updated: "2026-10-01"
---

# ConfigParser.BOOLEAN_STATES

By default when using `~ConfigParser.getboolean`, config parsers
consider the following values `True`: `'1'`, `'yes'`, `'true'`,
`'on'` and the following values `False`: `'0'`, `'no'`, `'false'`,
`'off'`.  You can override this by specifying a custom dictionary of strings
and their Boolean outcomes. For example:

```python

>>> custom = configparser.ConfigParser()
>>> custom['section1'] = {'funky': 'nope'}
>>> custom['section1'].getboolean('funky')
Traceback (most recent call last):
...
ValueError: Not a boolean: nope
>>> custom.BOOLEAN_STATES = {'sure': True, 'nope': False}
>>> custom['section1'].getboolean('funky')
False
```

Other typical Boolean pairs include `accept`/`reject` or
`enabled`/`disabled`.
