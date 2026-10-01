---
id: "python-en-function-subprocess-getstatusoutput"
language: "python"
lang: "en"
category: "function"
name: "getstatusoutput"
signature: "getstatusoutput(cmd, *, encoding=None, errors=None)"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.getstatusoutput"
license: "PSF"
updated: "2026-10-01"
---

# getstatusoutput

Return `(exitcode, output)` of executing *cmd* in a shell.

Execute the string *cmd* in a shell with `check_output` and
return a 2-tuple `(exitcode, output)`.
*encoding* and *errors* are used to decode output;
see the notes on `frequently-used-arguments` for more details.

A trailing newline is stripped from the output.
The exit code for the command can be interpreted as the return code
of subprocess.  Example::

   >>> subprocess.getstatusoutput('ls /bin/ls')
   (0, '/bin/ls')
   >>> subprocess.getstatusoutput('cat /bin/junk')
   (1, 'cat: /bin/junk: No such file or directory')
   >>> subprocess.getstatusoutput('/bin/junk')
   (127, 'sh: /bin/junk: not found')
   >>> subprocess.getstatusoutput('/bin/kill $$')
   (-15, '')

availability:: Unix, Windows.

> *Changed in 3.3.4*: Windows support was added.  The function now returns (exitcode, output) instead of (status, output) as it did in Python 3.3.3 and earlier.  exitcode has the same value as :attr:`~Popen.returncode`.

> *Changed in 3.11*: Added the *encoding* and *errors* parameters.
