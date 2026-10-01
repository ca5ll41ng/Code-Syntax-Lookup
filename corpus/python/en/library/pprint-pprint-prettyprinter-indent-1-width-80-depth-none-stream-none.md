---
id: "python-en-function-pprint-prettyprinter-indent-1-width-80-depth-none-stream-none"
language: "python"
lang: "en"
category: "function"
name: "PrettyPrinter(indent=1, width=80, depth=None, stream=None, *, \\"
directive: "class"
module: "pprint"
source_url: "https://docs.python.org/3/library/pprint.html#pprint.PrettyPrinter(indent=1, width=80, depth=None, stream=None, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# PrettyPrinter(indent=1, width=80, depth=None, stream=None, *, \

Construct a `PrettyPrinter` instance.

Arguments have the same meaning as for `~pprint.pp`.
Note that they are in a different order, and that *sort_dicts* defaults to `True`.

>>> import pprint
>>> stuff = ['spam', 'eggs', 'lumberjack', 'knights', 'ni']
>>> stuff.insert(0, stuff[:])
>>> pp = pprint.PrettyPrinter(indent=4)
>>> pp.pprint(stuff)
[   ['spam', 'eggs', 'lumberjack', 'knights', 'ni'],
    'spam',
    'eggs',
    'lumberjack',
    'knights',
    'ni']
>>> pp = pprint.PrettyPrinter(width=41, compact=True)
>>> pp.pprint(stuff)
[['spam', 'eggs', 'lumberjack',
  'knights', 'ni'],
 'spam', 'eggs', 'lumberjack', 'knights',
 'ni']
>>> pp = pprint.PrettyPrinter(width=41, expand=True, indent=3)
>>> pp.pprint(stuff)
[
   [
      'spam',
      'eggs',
      'lumberjack',
      'knights',
      'ni',
   ],
   'spam',
   'eggs',
   'lumberjack',
   'knights',
   'ni',
]
>>> tup = ('spam', ('eggs', ('lumberjack', ('knights', ('ni', ('dead',
... ('parrot', ('fresh fruit',))))))))
>>> pp = pprint.PrettyPrinter(depth=6)
>>> pp.pprint(tup)
('spam', ('eggs', ('lumberjack', ('knights', ('ni', ('dead', (...)))))))

> *Changed in 3.4*: Added the *compact* parameter.

> *Changed in 3.8*: Added the *sort_dicts* parameter.

> *Changed in 3.10*: Added the *underscore_numbers* parameter.

> *Changed in 3.11*: No longer attempts to write to :data:`!sys.stdout` if it is ``None``.

> *Changed in 3.15*: Added the *expand* parameter.
