---
id: "python-zh-function-bdb-effective"
language: "python"
lang: "zh"
category: "function"
name: "effective"
signature: "effective(file, line, frame)"
directive: "function"
module: "bdb"
source_url: "https://docs.python.org/zh-cn/3/library/bdb.html#bdb.effective"
license: "PSF"
updated: "2026-10-01"
---

# effective

Return `(active breakpoint, delete temporary flag)` or `(None, None)` as the
breakpoint to act upon.

The *active breakpoint* is the first entry in
`bplist` for the
(`file`, `line`)
(which must exist) that is `enabled`, for
which `checkfuncname` is true, and that has neither a false
`condition` nor positive
`ignore` count.  The *flag*, meaning that a
temporary breakpoint should be deleted, is `False` only when the
`cond` cannot be evaluated (in which case,
`ignore` count is ignored).

如果不存在这样的条目，则返回 ``(None, None)``。
