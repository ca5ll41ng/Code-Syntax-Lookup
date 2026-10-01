---
id: "python-en-function-sys-activate_stack_trampoline"
language: "python"
lang: "en"
category: "function"
name: "activate_stack_trampoline"
signature: "activate_stack_trampoline(backend, /)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.activate_stack_trampoline"
license: "PSF"
updated: "2026-10-01"
---

# activate_stack_trampoline

Activate the stack profiler trampoline *backend*.
The only supported backend is `"perf"`.

Stack trampolines cannot be activated if the JIT is active.

availability:: Linux.

> *Added in 3.12*

> **Seealso**
>
> * `perf_profiling`
> * https://perf.wiki.kernel.org
>
