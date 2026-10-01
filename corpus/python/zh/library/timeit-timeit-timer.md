---
id: "python-zh-function-timeit-timer"
language: "python"
lang: "zh"
category: "function"
name: "Timer"
signature: "Timer(stmt='pass', setup='pass', timer=<timer function>, globals=None)"
directive: "class"
module: "timeit"
source_url: "https://docs.python.org/zh-cn/3/library/timeit.html#timeit.Timer"
license: "PSF"
updated: "2026-10-01"
---

# Timer

用于小代码片段的计时执行速度的类。

The constructor takes a statement to be timed, an additional statement used
for setup, and a timer function.  Both statements default to `'pass'`;
the timer function is platform-dependent (see the module doc string).
*stmt* and *setup* may also contain multiple statements separated by `;`
or newlines, as long as they don't contain multi-line string literals.  The
statement will by default be executed within timeit's namespace; this behavior
can be controlled by passing a namespace to *globals*.

To measure the execution time of the first statement, use the `.timeit`
method.  The `.repeat` and `.autorange` methods are convenience
methods to call `.timeit` multiple times.

*setup* 的执行时间从总体计时执行中排除。

The *stmt* and *setup* parameters can also take objects that are callable
without arguments.  This will embed calls to them in a timer function that
will then be executed by `.timeit`.  Note that the timing overhead is a
little larger in this case because of the extra function calls.

> *Changed in 3.5*: The optional *globals* parameter was added.

method:: Timer.timeit(number=1000000)

method:: Timer.autorange(callback=None, target_time=None)

method:: Timer.repeat(repeat=5, number=1000000)

method:: Timer.print_exc(file=None)
