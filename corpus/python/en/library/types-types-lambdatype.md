---
id: "python-en-function-types-lambdatype"
language: "python"
lang: "en"
category: "function"
name: "LambdaType"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.LambdaType"
license: "PSF"
updated: "2026-10-01"
---

# LambdaType

The type of user-defined functions and functions created by
`lambda`  expressions.

audit-event:: function.__new__ code types.FunctionType

The audit event only occurs for direct instantiation of function objects,
and is not raised for normal compilation.
