---
id: "python-zh-function-concurrent-interpreters-concurrent-interpreters"
language: "python"
lang: "zh"
category: "function"
name: "concurrent.interpreters"
title: "Basic usage"
directive: "module"
module: "concurrent.interpreters"
source_url: "https://docs.python.org/zh-cn/3/library/concurrent.interpreters.html#module-concurrent.interpreters"
license: "PSF"
updated: "2026-10-01"
---

# Basic usage

**Basic usage**

创建一个解释器并在其中运行代码::

    from concurrent import interpreters

    interp = interpreters.create()

    # Run in the current OS thread.

    interp.exec('print("spam!")')

    interp.exec("""if True:
        print('spam!')
        """)

    from textwrap import dedent
    interp.exec(dedent("""
        print('spam!')
        """))

    def run(arg):
        return arg

    res = interp.call(run, 'spam!')
    print(res)

    def run():
        print('spam!')

    interp.call(run)

    # Run in new OS thread.

    t = interp.call_in_thread(run)
    t.join()
