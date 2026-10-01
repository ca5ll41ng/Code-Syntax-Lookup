---
id: "python-en-function-builtins-oct"
language: "python"
lang: "en"
category: "function"
name: "oct"
signature: "oct(integer, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#oct"
license: "PSF"
updated: "2026-10-01"
---

# oct

Convert an integer number to an octal string prefixed with "0o".  The result
is a valid Python expression. If *integer* is not a Python `int` object, it
has to define an `~object.__index__` method that returns an integer. For
example:

    >>> oct(8)
    '0o10'
    >>> oct(-56)
    '-0o70'

If you want to convert an integer number to an octal string either with the prefix
"0o" or not, you can use either of the following ways.

    >>> '%#o' % 10, '%o' % 10
    ('0o12', '12')
    >>> format(10, '#o'), format(10, 'o')
    ('0o12', '12')
    >>> f'{10:#o}', f'{10:o}'
    ('0o12', '12')

See also `format` for more information.
