---
id: "python-en-function-subprocess-subprocess"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B404"],"cwe":["CWE-78"],"note":"Consider possible security implications associated with the subprocess module."}
name: "subprocess"
title: "Notes"
directive: "module"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#module-subprocess"
license: "PSF"
updated: "2026-10-01"
---

# Notes

**Notes**

.. _subprocess-timeout-behavior:

**Timeout Behavior**

When using the `timeout` parameter in functions like `run`,
`Popen.wait`, or `Popen.communicate`,
users should be aware of the following behaviors:

1. **Process Creation Delay**: The initial process creation itself cannot be interrupted
   on many platform APIs. This means that even when specifying a timeout, you are not
   guaranteed to see a timeout exception until at least after however long process
   creation takes.

2. **Extremely Small Timeout Values**: Setting very small timeout values (such as a few
   milliseconds) may result in almost immediate `TimeoutExpired` exceptions because
   process creation and system scheduling inherently require time.

.. _converting-argument-sequence:

**Converting an argument sequence to a string on Windows**

On Windows, an *args* sequence is converted to a string that can be parsed
using the following rules (which correspond to the rules used by the MS C
runtime):

1. Arguments are delimited by white space, which is either a
   space or a tab.

2. A string surrounded by double quotation marks is
   interpreted as a single argument, regardless of white space
   contained within.  A quoted string can be embedded in an
   argument.

3. A double quotation mark preceded by a backslash is
   interpreted as a literal double quotation mark.

4. Backslashes are interpreted literally, unless they
   immediately precede a double quotation mark.

5. If backslashes immediately precede a double quotation mark,
   every pair of backslashes is interpreted as a literal
   backslash.  If the number of backslashes is odd, the last
   backslash escapes the next double quotation mark as
   described in rule 3.

> **Seealso**
>
> `shlex`
>    Module which provides function to parse and escape command lines.
>

.. _disable_posix_spawn:

**Disable use of `posix_spawn()`**

On Linux, `subprocess` defaults to using the `vfork()` system call
internally when it is safe to do so rather than `fork()`. This greatly
improves performance.

::

   subprocess._USE_POSIX_SPAWN = False  # See CPython issue gh-NNNNNN.

It is safe to set this to false on any Python version. It will have no
effect on older or newer versions where unsupported. Do not assume the attribute
is available to read. Despite the name, a true value does not indicate the
corresponding function will be used, only that it may be.

Please file issues any time you have to use these private knobs with a way to
reproduce the issue you were seeing. Link to that issue from a comment in your
code.

> *Added in 3.8 ``_USE_POSIX_SPAWN``*
