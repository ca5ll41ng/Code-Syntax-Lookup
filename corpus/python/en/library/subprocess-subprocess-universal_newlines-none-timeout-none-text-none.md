---
id: "python-en-function-subprocess-universal_newlines-none-timeout-none-text-none"
language: "python"
lang: "en"
category: "function"
name: "universal_newlines=None, timeout=None, text=None, \\"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.universal_newlines=None, timeout=None, text=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# universal_newlines=None, timeout=None, text=None, \

Run command with arguments and return its output.

If the return code was non-zero it raises a `CalledProcessError`. The
`CalledProcessError` object will have the return code in the
`~CalledProcessError.returncode` attribute and any output in the
`~CalledProcessError.output` attribute.

This is equivalent to::

    run(..., check=True, stdout=PIPE).stdout

The arguments shown above are merely some common ones.
The full function signature is largely the same as that of `run` -
most arguments are passed directly through to that interface.
One API deviation from `run` behavior exists: passing `input=None`
will behave the same as `input=b''` (or `input=''`, depending on other
arguments) rather than using the parent's standard input file handle.

By default, this function will return the data as encoded bytes. The actual
encoding of the output data may depend on the command being invoked, so the
decoding to text will often need to be handled at the application level.

This behaviour may be overridden by setting *text*, *encoding*, *errors*,
or *universal_newlines* to `True` as described in
`frequently-used-arguments` and `run`.

To also capture standard error in the result, use
`stderr=subprocess.STDOUT`::

   >>> subprocess.check_output(
   ...     "ls non_existent_file; exit 0",
   ...     stderr=subprocess.STDOUT,
   ...     shell=True)
   'ls: non_existent_file: No such file or directory\n'

> *Added in 3.1*

> *Changed in 3.3*: *timeout* was added.

> *Changed in 3.4*: Support for the *input* keyword argument was added.

> *Changed in 3.6*: *encoding* and *errors* were added.  See :func:`run` for details.

> *Added in 3.7*: *text* was added as a more readable alias for *universal_newlines*.

> *Changed in 3.12*: Changed Windows shell search order for ``shell=True``. The current directory and ``%PATH%`` are replaced with ``%COMSPEC%`` and ``%SystemRoot%\System32\cmd.exe``. As a result, dropping a malicious program named ``cmd.exe`` into a current directory no longer works.
