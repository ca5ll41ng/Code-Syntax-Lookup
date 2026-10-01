---
id: "python-zh-function-modulefinder-modulefinder"
language: "python"
lang: "zh"
category: "function"
name: "modulefinder"
title: "Example usage of `ModuleFinder`"
directive: "module"
module: "modulefinder"
source_url: "https://docs.python.org/zh-cn/3/library/modulefinder.html#module-modulefinder"
license: "PSF"
updated: "2026-10-01"
---

# Example usage of `ModuleFinder`

.. _modulefinder-example:

**Example usage of `ModuleFinder`**

稍后将分析的脚本（bacon.py）::

   import re, itertools

   try:
       import baconhameggs
   except ImportError:
       pass

   try:
       import guido.python.ham
   except ImportError:
       pass

将输出 bacon.py 报告的脚本::

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

输出样例（可能因架构而异）::

**Loaded modules:     _types:     copyreg:  _inverted_registry,_slotnames,__all__     re._compiler:  isstring,_sre,_optimize_unicode     _sre:     re._constants:  REPEAT_ONE,makedict,AT_END_LINE     sys:     re:  __module__,finditer,_expand     itertools:     __main__:  re,itertools,baconhameggs     re._parser:  _PATTERNENDERS,SRE_FLAG_UNICODE     array:     types:  __module__,IntType,TypeType**

    Modules not imported:
    guido.python.ham
    baconhameggs
