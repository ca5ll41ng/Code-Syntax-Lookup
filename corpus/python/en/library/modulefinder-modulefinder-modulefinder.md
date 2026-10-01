---
id: "python-en-function-modulefinder-modulefinder"
language: "python"
lang: "en"
category: "function"
name: "modulefinder"
title: "Example usage of `ModuleFinder`"
directive: "module"
module: "modulefinder"
source_url: "https://docs.python.org/3/library/modulefinder.html#module-modulefinder"
license: "PSF"
updated: "2026-10-01"
---

# Example usage of `ModuleFinder`

.. _modulefinder-example:

**Example usage of `ModuleFinder`**

The script that is going to get analyzed later on (bacon.py)::

   import re, itertools

   try:
       import baconhameggs
   except ImportError:
       pass

   try:
       import guido.python.ham
   except ImportError:
       pass

The script that will output the report of bacon.py::

   from modulefinder import ModuleFinder

   finder = ModuleFinder()
   finder.run_script('bacon.py')

   print('Loaded modules:')
   for name, mod in finder.modules.items():
       print('%s: ' % name, end='')
       print(','.join(list(mod.globalnames.keys())[:3]))

   print('-'*50)
   print('Modules not imported:')
   print('\n'.join(finder.badmodules.keys()))

Sample output (may vary depending on the architecture)::

**Loaded modules:     _types:     copyreg:  _inverted_registry,_slotnames,__all__     re._compiler:  isstring,_sre,_optimize_unicode     _sre:     re._constants:  REPEAT_ONE,makedict,AT_END_LINE     sys:     re:  __module__,finditer,_expand     itertools:     __main__:  re,itertools,baconhameggs     re._parser:  _PATTERNENDERS,SRE_FLAG_UNICODE     array:     types:  __module__,IntType,TypeType**

    Modules not imported:
    guido.python.ham
    baconhameggs
