---
id: "python-zh-function-dis-instruction"
language: "python"
lang: "zh"
category: "function"
name: "Instruction"
directive: "class"
module: "dis"
source_url: "https://docs.python.org/zh-cn/3/library/dis.html#dis.Instruction"
license: "PSF"
updated: "2026-10-01"
---

# Instruction

字节码操作的详细信息

data:: opcode

data:: opname

data:: baseopcode

data:: baseopname

data:: arg

data:: oparg

data:: argval

data:: argrepr

data:: offset

data:: start_offset

data:: cache_offset

data:: end_offset

data:: starts_line

data:: line_number

data:: is_jump_target

data:: jump_target

data:: positions

data:: cache_info

> *Added in 3.4*

> *Changed in 3.11*: Field ``positions`` is added.

> *Changed in 3.13*: Changed field ``starts_line``.  Added fields ``start_offset``, ``cache_offset``, ``end_offset``, ``baseopname``, ``baseopcode``, ``jump_target``, ``oparg``, ``line_number`` and ``cache_info``.
