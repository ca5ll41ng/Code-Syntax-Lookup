---
id: "python-zh-function-__future__-_feature"
language: "python"
lang: "zh"
category: "function"
name: "_Feature"
directive: "class"
module: "__future__"
source_url: "https://docs.python.org/zh-cn/3/library/__future__.html#__future__._Feature"
license: "PSF"
updated: "2026-10-01"
---

# _Feature

:file:`__future__.py` 中的每一条语句都是以下格式的::

   FeatureName = _Feature(OptionalRelease, MandatoryRelease,
                          CompilerFlag)

where, normally, *OptionalRelease* is less than *MandatoryRelease*, and both are
5-tuples of the same form as `sys.version_info`::

   (PY_MAJOR_VERSION, # the 2 in 2.1.0a3; an int
    PY_MINOR_VERSION, # the 1; an int
    PY_MICRO_VERSION, # the 0; an int
    PY_RELEASE_LEVEL, # "alpha", "beta", "candidate" or "final"; string
    PY_RELEASE_SERIAL # the 3; an int
   )
