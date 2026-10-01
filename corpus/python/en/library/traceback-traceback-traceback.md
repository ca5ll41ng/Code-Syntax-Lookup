---
id: "python-en-function-traceback-traceback"
language: "python"
lang: "en"
category: "function"
name: "traceback"
title: "Examples of Using the Module-Level Functions"
directive: "module"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#module-traceback"
license: "PSF"
updated: "2026-10-01"
---

# Examples of Using the Module-Level Functions

.. _traceback-example:

**Examples of Using the Module-Level Functions**

This simple example implements a basic read-eval-print loop, similar to (but
less useful than) the standard Python interactive interpreter loop.  For a more
complete implementation of the interpreter loop, refer to the `code`
module. ::

   import sys, traceback

   def run_user_code(envdir):
       source = input(">>> ")
       try:
           exec(source, envdir)
       except Exception:
           print("Exception in user code:")
           print("-"*60)
           traceback.print_exc(file=sys.stdout)
           print("-"*60)

   envdir = {}
   while True:
       run_user_code(envdir)

The following example demonstrates the different ways to print and format the
exception and traceback:

```python

import sys, traceback

def lumberjack():
    bright_side_of_life()

def bright_side_of_life():
    return tuple()[0]

try:
    lumberjack()
except IndexError as exc:
    print("*** print_tb:")
    traceback.print_tb(exc.__traceback__, limit=1, file=sys.stdout)
    print("*** print_exception:")
    traceback.print_exception(exc, limit=2, file=sys.stdout)
    print("*** print_exc:")
    traceback.print_exc(limit=2, file=sys.stdout)
    print("*** format_exc, first and last line:")
    formatted_lines = traceback.format_exc().splitlines()
    print(formatted_lines[0])
    print(formatted_lines[-1])
    print("*** format_exception:")
    print(repr(traceback.format_exception(exc)))
    print("*** extract_tb:")
    print(repr(traceback.extract_tb(exc.__traceback__)))
    print("*** format_tb:")
    print(repr(traceback.format_tb(exc.__traceback__)))
    print("*** tb_lineno:", exc.__traceback__.tb_lineno)
```

The output for the example would look similar to this:

testoutput::

The following example shows the different ways to print and format the stack::

   >>> import traceback
   >>> def another_function():
   ...     lumberstack()
   ...
   >>> def lumberstack():
   ...     traceback.print_stack()
   ...     print(repr(traceback.extract_stack()))
   ...     print(repr(traceback.format_stack()))
   ...
   >>> another_function()
     File "<doctest>", line 10, in <module>
       another_function()
     File "<doctest>", line 3, in another_function
       lumberstack()
     File "<doctest>", line 6, in lumberstack
       traceback.print_stack()
   [('<doctest>', 10, '<module>', 'another_function()'),
    ('<doctest>', 3, 'another_function', 'lumberstack()'),
    ('<doctest>', 7, 'lumberstack', 'print(repr(traceback.extract_stack()))')]
   ['  File "<doctest>", line 10, in <module>\n    another_function()\n',
    '  File "<doctest>", line 3, in another_function\n    lumberstack()\n',
    '  File "<doctest>", line 8, in lumberstack\n    print(repr(traceback.format_stack()))\n']

This last example demonstrates the final few formatting functions:

```python
:options: +NORMALIZE_WHITESPACE

>>> import traceback
>>> traceback.format_list([('spam.py', 3, '<module>', 'spam.eggs()'),
...                        ('eggs.py', 42, 'eggs', 'return "bacon"')])
['  File "spam.py", line 3, in <module>\n    spam.eggs()\n',
 '  File "eggs.py", line 42, in eggs\n    return "bacon"\n']
>>> an_error = IndexError('tuple index out of range')
>>> traceback.format_exception_only(an_error)
['IndexError: tuple index out of range\n']
```

**Examples of Using `TracebackException`**

With the helper class, we have more options::

**>>> import sys    >>> from traceback import TracebackException    >>>    >>> def lumberjack():    ...     bright_side_of_life()    ...    >>> def bright_side_of_life():    ...     t = "bright", "side", "of", "life"    ...     return t[5]    ...    >>> try:    ...     lumberjack()    ... except IndexError as e:    ...     exc = e    ...    >>> try:    ...     try:    ...         lumberjack()    ...     except:    ...         1/0    ... except Exception as e:    ...     chained_exc = e    ...    >>> # limit works as with the module-level functions    >>> TracebackException.from_exception(exc, limit=-2).print()    Traceback (most recent call last):      File "<python-input-1>", line 6, in lumberjack        bright_side_of_life()**

     File "<python-input-1>", line 10, in bright_side_of_life
       return t[5]
              ~^^^
   IndexError: tuple index out of range

**>>> # capture_locals adds local variables in frames    >>> TracebackException.from_exception(exc, limit=-2, capture_locals=True).print()    Traceback (most recent call last):      File "<python-input-1>", line 6, in lumberjack        bright_side_of_life()**

     File "<python-input-1>", line 10, in bright_side_of_life
       return t[5]
              ~^^^
       t = ("bright", "side", "of", "life")
   IndexError: tuple index out of range

**>>> # The *chain* kwarg to print() controls whether chained    >>> # exceptions are displayed    >>> TracebackException.from_exception(chained_exc).print()    Traceback (most recent call last):      File "<python-input-19>", line 4, in <module>        lumberjack()**

**File "<python-input-8>", line 7, in lumberjack        bright_side_of_life()**

     File "<python-input-8>", line 11, in bright_side_of_life
       return t[5]
              ~^^^
   IndexError: tuple index out of range

   During handling of the above exception, another exception occurred:

   Traceback (most recent call last):
     File "<python-input-19>", line 6, in <module>
       1/0
       ~^~
   ZeroDivisionError: division by zero

   >>> TracebackException.from_exception(chained_exc).print(chain=False)
   Traceback (most recent call last):
     File "<python-input-19>", line 6, in <module>
       1/0
       ~^~
   ZeroDivisionError: division by zero
