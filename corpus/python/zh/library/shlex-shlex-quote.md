---
id: "python-zh-function-shlex-quote"
language: "python"
lang: "zh"
category: "function"
name: "quote"
signature: "quote(s, *, force=False)"
directive: "function"
module: "shlex"
source_url: "https://docs.python.org/zh-cn/3/library/shlex.html#shlex.quote"
license: "PSF"
updated: "2026-10-01"
---

# quote

Return a shell-escaped version of the string *s*.  The returned value is a
string that can safely be used as one token in a shell command line, for
cases where you cannot use a list.

If *force* is `True`, then *s* is unconditionally quoted,
even if it is already safe for a shell without being quoted.

.. _shlex-quote-warning:

> **Warning**
>
> ``shlex`` 模块 **仅适用于 Unix shell**。
>
> The `quote` function is not guaranteed to be correct on non-POSIX
> compliant shells or shells from other operating systems such as Windows.
> Executing commands quoted by this module on such shells can open up the
> possibility of a command injection vulnerability.
>
> Consider using functions that pass command arguments with lists such as
> `subprocess.run` with `shell=False`.
>

以下用法是不安全的：

   >>> filename = 'somefile; rm -rf ~'
   >>> command = 'ls -l {}'.format(filename)
   >>> print(command)  # executed by a shell: boom!
   ls -l somefile; rm -rf ~

用 :func:`quote` 可以堵住这种安全漏洞：

   >>> from shlex import quote
   >>> command = 'ls -l {}'.format(quote(filename))
   >>> print(command)
   ls -l 'somefile; rm -rf ~'
   >>> remote_command = 'ssh home {}'.format(quote(command))
   >>> print(remote_command)
   ssh home 'ls -l '"'"'somefile; rm -rf ~'"'"''

这种包装方式兼容于 UNIX shell 和 :func:`split`。

   >>> from shlex import split
   >>> remote_command = split(remote_command)
   >>> remote_command
   ['ssh', 'home', "ls -l 'somefile; rm -rf ~'"]
   >>> command = split(remote_command[-1])
   >>> command
   ['ls', '-l', 'somefile; rm -rf ~']

The *force* keyword can be used to produce consistent behavior when
escaping multiple strings:

   >>> from shlex import quote
   >>> filenames = ['my first file', 'file2', 'file 3']
   >>> filenames_some_escaped = [quote(f) for f in filenames]
   >>> filenames_some_escaped
   ["'my first file'", 'file2', "'file 3'"]
   >>> filenames_all_escaped = [quote(f, force=True) for f in filenames]
   >>> filenames_all_escaped
   ["'my first file'", "'file2'", "'file 3'"]

> *Added in 3.3*

> *Changed in next*: The *force* keyword was added.
