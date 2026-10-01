---
id: "python-en-function-concurrent-interpreters-concurrent-interpreters"
language: "python"
lang: "en"
category: "function"
name: "concurrent.interpreters"
title: "Basic usage"
directive: "module"
module: "concurrent.interpreters"
source_url: "https://docs.python.org/3/library/concurrent.interpreters.html#module-concurrent.interpreters"
license: "PSF"
updated: "2026-10-01"
---

# Basic usage

**Basic usage**

Creating an interpreter and running code in it::

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
