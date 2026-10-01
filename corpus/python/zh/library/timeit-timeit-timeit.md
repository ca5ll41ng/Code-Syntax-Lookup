---
id: "python-zh-function-timeit-timeit"
language: "python"
lang: "zh"
category: "function"
name: "timeit"
title: "Command-line interface"
directive: "module"
module: "timeit"
source_url: "https://docs.python.org/zh-cn/3/library/timeit.html#module-timeit"
license: "PSF"
updated: "2026-10-01"
---

# Command-line interface

.. _timeit-command-line-interface:

**Command-line interface**

从命令行调用程序时，使用以下形式::

   python -m timeit [-n N] [-r N] [-u U] [-s S] [-p] [-v] [-h] [statement ...]

其中可以使用以下选项：

program:: timeit

option:: -n N, --number=N

option:: -r N, --repeat=N

option:: -s S, --setup=S

option:: -p, --process

option:: -u, --unit=U

option:: -t, --target-time=T

option:: -v, --verbose

option:: -h, --help

A multi-line statement may be given by specifying each line as a separate
statement argument; indented lines are possible by enclosing an argument in
quotes and using leading spaces.  Multiple `-s` options are treated
similarly.

If `-n` is not given, a suitable number of loops is calculated by trying
increasing numbers from the sequence 1, 2, 5, 10, 20, 50, ... until the total
time is at least `--target-time` seconds (default: 0.2).

`default_timer` measurements can be affected by other programs running on
the same machine, so the best thing to do when accurate timing is necessary is
to repeat the timing a few times and use the best time.  The `-r`
option is good for this; the default of 5 repetitions is probably enough in
most cases.  You can use `time.process_time` to measure CPU time.

> **Note**
>
> There is a certain baseline overhead associated with executing a pass statement.
> The code here doesn't try to hide it, but you should be aware of it.  The
> baseline overhead can be measured by invoking the program without arguments,
> and it might differ between Python versions.
>

> *Added in 3.15*: Output is in color by default and can be :ref:`controlled using environment variables <using-on-controlling-color>`.

.. _timeit-examples:

**Examples**

可以提供一个在开头只执行一次的 setup 语句：

```shell-session

$ python -m timeit -s "text = 'sample string'; char = 'g'" "char in text"
5000000 loops, best of 5: 0.0877 usec per loop
$ python -m timeit -s "text = 'sample string'; char = 'g'" "text.find(char)"
1000000 loops, best of 5: 0.342 usec per loop
```

In the output, there are three fields. The loop count, which tells you how many
times the statement body was run per timing loop repetition. The repetition
count ('best of 5') which tells you how many times the timing loop was
repeated, and finally the time the statement body took on average within the
best repetition of the timing loop. That is, the time the fastest repetition
took divided by the loop count.

::

   >>> import timeit
   >>> timeit.timeit('char in text', setup='text = "sample string"; char = "g"')
   0.41440500499993504
   >>> timeit.timeit('text.find(char)', setup='text = "sample string"; char = "g"')
   1.7246671520006203

使用 :class:`Timer` 类及其方法可以完成同样的操作::

   >>> import timeit
   >>> t = timeit.Timer('char in text', setup='text = "sample string"; char = "g"')
   >>> t.timeit()
   0.3955516149999312
   >>> t.repeat()
   [0.40183617287970225, 0.37027556854118704, 0.38344867356679524, 0.3712595970846668, 0.37866875250654886]

The following examples show how to time expressions that contain multiple lines.
Here we compare the cost of using `hasattr` vs. `try`/`except`
to test for missing and present object attributes:

```shell-session

$ python -m timeit "try:" "  str.__bool__" "except AttributeError:" "  pass"
20000 loops, best of 5: 15.7 usec per loop
$ python -m timeit "if hasattr(str, '__bool__'): pass"
50000 loops, best of 5: 4.26 usec per loop

$ python -m timeit "try:" "  int.__bool__" "except AttributeError:" "  pass"
200000 loops, best of 5: 1.43 usec per loop
$ python -m timeit "if hasattr(int, '__bool__'): pass"
100000 loops, best of 5: 2.23 usec per loop
```

::

   >>> import timeit
   >>> # attribute is missing
   >>> s = """\
   ... try:
   ...     str.__bool__
   ... except AttributeError:
   ...     pass
   ... """
   >>> timeit.timeit(stmt=s, number=100000)
   0.9138244460009446
   >>> s = "if hasattr(str, '__bool__'): pass"
   >>> timeit.timeit(stmt=s, number=100000)
   0.5829014980008651
   >>>
   >>> # attribute is present
   >>> s = """\
   ... try:
   ...     int.__bool__
   ... except AttributeError:
   ...     pass
   ... """
   >>> timeit.timeit(stmt=s, number=100000)
   0.04215312199994514
   >>> s = "if hasattr(int, '__bool__'): pass"
   >>> timeit.timeit(stmt=s, number=100000)
   0.08588060699912603

To give the `timeit` module access to functions you define, you can pass a
*setup* parameter which contains an import statement::

   def test():
       """Stupid test function"""
       L = [i for i in range(100)]

   if __name__ == '__main__':
       import timeit
       print(timeit.timeit("test()", setup="from __main__ import test"))

Another option is to pass `globals` to the  *globals* parameter, which will cause the code
to be executed within your current global namespace.  This can be more convenient
than individually specifying imports::

   def f(x):
       return x**2
   def g(x):
       return x**4
   def h(x):
       return x**8

   import timeit
   print(timeit.timeit('[func(42) for func in (f,g,h)]', globals=globals()))
