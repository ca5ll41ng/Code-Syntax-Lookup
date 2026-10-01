---
id: "python-en-function-types-functiontype"
language: "python"
lang: "en"
category: "function"
name: "FunctionType"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.FunctionType"
license: "PSF"
updated: "2026-10-01"
---

# FunctionType

The type of user-defined functions and functions created by
`lambda`  expressions.

audit-event:: function.__new__ code types.FunctionType

The audit event only occurs for direct instantiation of function objects,
and is not raised for normal compilation.
