---
id: "python-zh-function-atexit-atexit"
language: "python"
lang: "zh"
category: "function"
name: "atexit"
title: "Module `readline`"
directive: "module"
module: "atexit"
source_url: "https://docs.python.org/zh-cn/3/library/atexit.html#module-atexit"
license: "PSF"
updated: "2026-10-01"
---

# Module `readline`

> **Seealso**
>
> Module `readline`
>    Useful example of `atexit` to read and write `readline` history
>    files.
>

.. _atexit-example:

**`atexit` Example**

The following simple example demonstrates how a module can initialize a counter
from a file when it is imported and save the counter's updated value
automatically when the program terminates without relying on the application
making an explicit call into this module at termination. ::

   try:
       with open('counterfile') as infile:
           _count = int(infile.read())
   except FileNotFoundError:
       _count = 0

   def incrcounter(n):
       global _count
       _count = _count + n

   def savecounter():
       with open('counterfile', 'w') as outfile:
           outfile.write('%d' % _count)

   import atexit

   atexit.register(savecounter)

Positional and keyword arguments may also be passed to `register` to be
passed along to the registered function when it is called::

   def goodbye(name, adjective):
       print('Goodbye %s, it was %s to meet you.' % (name, adjective))

   import atexit

   atexit.register(goodbye, 'Donny', 'nice')
   # or:
   atexit.register(goodbye, adjective='nice', name='Donny')

作为 :term:`decorator` 使用::

   import atexit

   @atexit.register
   def goodbye():
       print('You are now leaving the Python sector.')

只有在函数不需要任何参数调用时才能工作。
