---
id: "python-zh-function-sys-activate_stack_trampoline"
language: "python"
lang: "zh"
category: "function"
name: "activate_stack_trampoline"
signature: "activate_stack_trampoline(backend, /)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys.activate_stack_trampoline"
license: "PSF"
updated: "2026-10-01"
---

# activate_stack_trampoline

Activate the stack profiler trampoline *backend*.
The only supported backend is `"perf"`.

如果 JIT 处于激活状态，堆栈蹦床将无法被激活。

availability:: Linux.

> *Added in 3.12*

> **Seealso**
>
> * `perf_profiling`
> * https://perf.wiki.kernel.org
>
