---
id: "python-zh-function-subprocess-getoutput"
language: "python"
lang: "zh"
category: "function"
name: "getoutput"
signature: "getoutput(cmd, *, encoding=None, errors=None)"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/zh-cn/3/library/subprocess.html#subprocess.getoutput"
license: "PSF"
updated: "2026-10-01"
---

# getoutput

返回在 shell 中执行 *cmd* 产生的输出（stdout 和 stderr）。

Like `getstatusoutput`, except the exit code is ignored and the return
value is a string containing the command's output.  Example::

   >>> subprocess.getoutput('ls /bin/ls')
   '/bin/ls'

availability:: Unix, Windows.

> *Changed in 3.3.4*: Windows support added

> *Changed in 3.11*: Added the *encoding* and *errors* parameters.
