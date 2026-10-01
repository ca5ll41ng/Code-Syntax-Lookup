---
id: "python-en-function-types-codetype"
language: "python"
lang: "en"
category: "function"
name: "CodeType"
signature: "CodeType(**kwargs)"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.CodeType"
license: "PSF"
updated: "2026-10-01"
---

# CodeType

The type of `code objects` such as returned by `compile`.

audit-event:: code.__new__ code,filename,name,argcount,posonlyargcount,kwonlyargcount,nlocals,stacksize,flags types.CodeType

Note that the audited arguments may not match the names or positions
required by the initializer.  The audit event only occurs for direct
instantiation of code objects, and is not raised for normal compilation.
