---
id: "python-zh-function-multiprocessing-set_executable"
language: "python"
lang: "zh"
category: "function"
name: "set_executable"
signature: "set_executable(executable)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.set_executable"
license: "PSF"
updated: "2026-10-01"
---

# set_executable

Set the path of the Python interpreter to use when starting a child process.
(By default `sys.executable` is used).  Embedders will probably need to
do something like ::

   set_executable(os.path.join(sys.exec_prefix, 'pythonw.exe'))

以使他们可以创建子进程。

> *Changed in 3.4*: Now supported on POSIX when the ``'spawn'`` start method is used.

> *Changed in 3.11*: Accepts a :term:`path-like object`.
