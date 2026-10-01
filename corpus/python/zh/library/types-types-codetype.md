---
id: "python-zh-function-types-codetype"
language: "python"
lang: "zh"
category: "function"
name: "CodeType"
signature: "CodeType(**kwargs)"
directive: "class"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.CodeType"
license: "PSF"
updated: "2026-10-01"
---

# CodeType

:ref:`代码对象 <code-objects>` 例如 :func:`compile` 返回值的类型。

audit-event:: code.__new__ code,filename,name,argcount,posonlyargcount,kwonlyargcount,nlocals,stacksize,flags types.CodeType

Note that the audited arguments may not match the names or positions
required by the initializer.  The audit event only occurs for direct
instantiation of code objects, and is not raised for normal compilation.
