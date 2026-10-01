---
id: "python-en-function-subprocess-getoutput"
language: "python"
lang: "en"
category: "function"
name: "getoutput"
signature: "getoutput(cmd, *, encoding=None, errors=None)"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.getoutput"
license: "PSF"
updated: "2026-10-01"
---

# getoutput

Return output (stdout and stderr) of executing *cmd* in a shell.

Like `getstatusoutput`, except the exit code is ignored and the return
value is a string containing the command's output.  Example::

   >>> subprocess.getoutput('ls /bin/ls')
   '/bin/ls'

availability:: Unix, Windows.

> *Changed in 3.3.4*: Windows support added

> *Changed in 3.11*: Added the *encoding* and *errors* parameters.
