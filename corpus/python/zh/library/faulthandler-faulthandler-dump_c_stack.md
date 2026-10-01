---
id: "python-zh-function-faulthandler-dump_c_stack"
language: "python"
lang: "zh"
category: "function"
name: "dump_c_stack"
signature: "dump_c_stack(file=sys.stderr)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/zh-cn/3/library/faulthandler.html#faulthandler.dump_c_stack"
license: "PSF"
updated: "2026-10-01"
---

# dump_c_stack

将当前线程的 C 栈追踪转储到 *file* 中。

If the Python build does not support it or the operating system
does not provide a stack trace, then this prints an error in place
of a dumped C stack.
