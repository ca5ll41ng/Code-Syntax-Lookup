---
id: "python-zh-function-inspect-getgeneratorstate"
language: "python"
lang: "zh"
category: "function"
name: "getgeneratorstate"
signature: "getgeneratorstate(generator)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.getgeneratorstate"
license: "PSF"
updated: "2026-10-01"
---

# getgeneratorstate

获取生成器迭代器的当前状态。

可能的状态是：

* GEN_CREATED: Waiting to start execution.
* GEN_RUNNING: Currently being executed by the interpreter.
* GEN_SUSPENDED: Currently suspended at a yield expression.
* GEN_CLOSED: Execution has completed.

> *Added in 3.2*
