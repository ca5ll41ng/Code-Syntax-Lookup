---
id: "python-zh-function-ctypes-cdll"
language: "python"
lang: "zh"
category: "function"
name: "CDLL"
signature: "CDLL(name, mode=DEFAULT_MODE, handle=None, use_errno=False, use_last_error=False, winmode=None)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/zh-cn/3/library/ctypes.html#ctypes.CDLL"
license: "PSF"
updated: "2026-10-01"
---

# CDLL

代表已加载的共享库。

Functions in this library use the standard C calling convention, and are
assumed to return :c`int`.
The Python `global interpreter lock` is released before calling any
function exported by these libraries, and reacquired afterwards.
For different function behavior, use a subclass: :py`~ctypes.OleDLL`,
:py`~ctypes.WinDLL`, or :py`~ctypes.PyDLL`.

If you have an existing :py`handle` to an already
loaded shared library, it can be passed as the *handle* argument to wrap
the opened library in a new :py`CDLL` object.
In this case, *name* is only used to set the :py`~ctypes.CDLL._name`
attribute, but it may be adjusted and/or validated.

If *handle* is `None`, the underlying platform's `dlopen(3)` or
`LoadLibraryExW`_ function is used to load the library into
the process, and to get a handle to it.

*name* is the pathname of the shared library to open.
If *name* does not contain a path separator, the library is found
in a platform-specific way.

On Windows, the `.DLL` suffix may be missing. (For details, see
`LoadLibraryExW`_ documentation.)
Other platform-specific prefixes and suffixes (for example, `lib`,
`.so`, `.dylib`, or version numbers) must be present in *name*;
they are not added automatically.
See `ctypes-finding-shared-libraries` for more information.

On non-Windows systems, *name* can  be `None`. In this case,
:c`dlopen` is called with `NULL`, which opens the main program
as a "library".
(Some systems do the same is *name* is empty; `None`/`NULL` is more
portable.)

> **CPython implementation detail**
>
> Since CPython is linked to `libc`, a `None` *name* is often used
> to access the C standard library::
>
>    >>> printf = ctypes.CDLL(None).printf
>    >>> printf.argtypes = [ctypes.c_char_p]
>    >>> printf(b"hello\n")
>    hello
>    6
>
> To access the Python C API, prefer :py`ctypes.pythonapi` which
> works across platforms.
>

The *mode* parameter can be used to specify how the library is loaded.  For
details, consult the `dlopen(3)` manpage.  On Windows, *mode* is
ignored.  On posix systems, RTLD_NOW is always added, and is not
configurable.

The *use_errno* parameter, when set to true, enables a ctypes mechanism that
allows accessing the system `errno` error number in a safe way.
`ctypes` maintains a thread-local copy of the system's `errno`
variable; if you call foreign functions created with `use_errno=True` then the
`errno` value before the function call is swapped with the ctypes private
copy, the same happens immediately after the function call.

The function `ctypes.get_errno` returns the value of the ctypes private
copy, and the function `ctypes.set_errno` changes the ctypes private copy
to a new value and returns the former value.

The *use_last_error* parameter, when set to true, enables the same mechanism for
the Windows error code which is managed by the `GetLastError` and
`SetLastError` Windows API functions; `ctypes.get_last_error` and
`ctypes.set_last_error` are used to request and change the ctypes private
copy of the windows error code.

The *winmode* parameter is used on Windows to specify how the library is loaded
(since *mode* is ignored). It takes any value that is valid for the Win32 API
`LoadLibraryExW`_ flags parameter. When omitted, the default is to use the
flags that result in the most secure DLL load, which avoids issues such as DLL
hijacking. Passing the full path to the DLL is the safest way to ensure the
correct library and dependencies are loaded.

On Windows creating a `CDLL` instance may fail even if the DLL name
exists. When a dependent DLL of the loaded DLL is not found, a
`OSError` error is raised with the message *"[WinError 126] The
specified module could not be found".* This error message does not contain
the name of the missing DLL because the Windows API does not return this
information making this error hard to diagnose. To resolve this error and
determine which DLL is not found, you need to find the list of dependent
DLLs and determine which one is not found using Windows debugging and
tracing tools.

> **Seealso**
>
> [Microsoft DUMPBIN tool](https://learn.microsoft.com/en-us/cpp/build/reference/dumpbin-reference?view=msvc-170)
> -- A tool to find DLL dependents.
>

> *Changed in 3.8*: Added *winmode* parameter.

> *Changed in 3.12*: The *name* parameter can now be a :term:`path-like object`.

Instances of this class have no public methods.  Functions exported by the
shared library can be accessed as attributes or by index.  Please note that
accessing the function through an attribute caches the result and therefore
accessing it repeatedly returns the same object each time.  On the other hand,
accessing it through an index returns a new object each time::

   >>> from ctypes import CDLL
   >>> libc = CDLL("libc.so.6")  # On Linux
   >>> libc.time == libc.time
   True
   >>> libc['time'] == libc['time']
   False

The following public attributes are available. Their name starts with an
underscore to not clash with exported function names:

attribute:: _handle

attribute:: _name
