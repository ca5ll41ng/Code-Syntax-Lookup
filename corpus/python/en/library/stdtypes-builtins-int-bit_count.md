---
id: "python-en-function-builtins-int-bit_count"
language: "python"
lang: "en"
category: "function"
name: "int.bit_count"
signature: "int.bit_count()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#int.bit_count"
license: "PSF"
updated: "2026-10-01"
---

# int.bit_count

Return the number of ones in the binary representation of the absolute
value of the integer. This is also known as the population count.
Example::

    >>> n = 19
    >>> bin(n)
    '0b10011'
    >>> n.bit_count()
    3
    >>> (-n).bit_count()
    3

Equivalent to::

    def bit_count(self):
        return bin(self).count("1")

> *Added in 3.10*
