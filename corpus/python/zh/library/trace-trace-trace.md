---
id: "python-zh-function-trace-trace"
language: "python"
lang: "zh"
category: "function"
name: "trace"
title: "A simple example demonstrating the use of the programmatic interface::"
directive: "module"
module: "trace"
source_url: "https://docs.python.org/zh-cn/3/library/trace.html#module-trace"
license: "PSF"
updated: "2026-10-01"
---

# A simple example demonstrating the use of the programmatic interface::

以下例子简单演示了编程接口的用法：

   import sys
   import trace

   # create a Trace object, telling it what to ignore, and whether to
   # do tracing or line-counting or both.
   tracer = trace.Trace(
       ignoredirs=[sys.prefix, sys.exec_prefix],
       trace=0,
       count=1)

   # run the new command using the given tracer
   tracer.run('main()')

   # make a report, placing output in the current directory
   r = tracer.results()
   r.write_results(show_missing=True, coverdir=".")
