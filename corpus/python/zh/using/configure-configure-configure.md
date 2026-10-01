---
id: "python-zh-guide-configure-configure"
language: "python"
lang: "zh"
category: "guide"
name: "configure"
title: "****************"
module: "configure"
source_url: "https://docs.python.org/zh-cn/3/using/configure.html"
license: "PSF"
updated: "2026-10-01"
---

# ****************

****************
Configure Python
****************

.. _build-requirements:

**Build Requirements**

要构建 CPython，你需要：

* A [C11](https://en.cppreference.com/w/c/11) compiler. `Optional C11
  features
  <https://en.wikipedia.org/wiki/C11_(C_standard_revision)#Optional_features>`_
  are not required.

* On Windows, Microsoft Visual Studio 2017 or later is required.

* Support for [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)
  floating-point numbers and `floating-point Not-a-Number (NaN)
  <https://en.wikipedia.org/wiki/NaN#Floating_point>`_.

* Support for threads.

> *Changed in 3.5*: On Windows, Visual Studio 2015 or later is now required.

> *Changed in 3.6*: Selected C99 features, like ``<stdint.h>`` and ``static inline`` functions, are now required.

> *Changed in 3.7*: Thread support is now required.

> *Changed in 3.11*: C11 compiler, IEEE 754 and NaN support are now required. On Windows, Visual Studio 2017 or later is required.

See also PEP 7 "Style Guide for C Code" and PEP 11 "CPython platform
support".

.. _optional-module-requirements:

**Requirements for optional modules**

Some `optional modules` of the standard library
require third-party libraries installed for development
(for example, header files must be available).

Missing requirements are reported in the `configure` output.
Modules that are missing due to missing dependencies are listed near the end
of the `make` output,
sometimes using an internal name, for example, `_ctypes` for `ctypes`
module.

If you distribute a CPython interpreter without optional modules,
it's best practice to advise users, who generally expect that
standard library modules are available.

构建可选模块的依赖如下：

list-table::

.. [1] See `--with-bzip2` for choosing the backend for the
   `bz2` module.
.. [2] If *libmpdec* is not available, the `decimal` module will use
   a pure-Python implementation.
.. [3] See `--with-readline` for choosing the backend for the
   `readline` module.
.. [4] The `uuid` module uses `_uuid` to generate "safe" UUIDs.
   See the module documentation for details.
.. [5] The `curses` module requires the `libncurses` or `libncursesw`
   library.
   The `curses.panel` module additionally requires the `libpanel` or
   `libpanelw` library.
.. [6] If OpenSSL is not available, the `hashlib` module will use
   bundled implementations of several hash functions.
   See `--with-builtin-hashlib-hashes` for *forcing* usage of OpenSSL.
.. [7] See `--with-zlib` for choosing the backend for the
   `zlib` module.
.. [8] OpenSSL 1.1.1 is the minimum possible version to build against,
   but the series is end-of-life and no longer receives public security
   fixes.  Use the latest patch release of a currently supported LTS
   release series (see the `OpenSSL Roadmap
   <https://openssl-library.org/roadmap/index.html>`__), or the package
   provided by your operating system if available.  Other libraries that
   offer an API compatible with OpenSSL 1.1.1 or later may work, but are
   not officially supported.

Note that the table does not include all optional modules; in particular,
platform-specific modules like `winreg` are not listed here.

> **Seealso**
>
> * The [devguide](https://devguide.python.org/getting-started/setup-building/#install-dependencies)
>   includes a full list of dependencies required to build all modules and
>   instructions on how to install them on common platforms.
> * `--with-system-expat` allows building with an external
>   [libexpat](https://libexpat.github.io/) library.
> * `configure-options-for-dependencies`
>

> *Changed in 3.1*: Tcl/Tk version 8.3.1 is now required for :mod:`tkinter`.

> *Changed in 3.5*: Tcl/Tk version 8.4 is now required for :mod:`tkinter`.

> *Changed in 3.7*: OpenSSL 1.0.2 is now required for :mod:`hashlib` and :mod:`ssl`.

> *Changed in 3.10*: OpenSSL 1.1.1 is now required for :mod:`hashlib` and :mod:`ssl`. SQLite 3.7.15 is now required for :mod:`sqlite3`.

> *Changed in 3.11*: Tcl/Tk version 8.5.12 is now required for :mod:`tkinter`.

> *Changed in 3.13*: SQLite 3.15.2 is now required for :mod:`sqlite3`.

**Generated files**

To reduce build dependencies, Python source code contains multiple generated
files. Commands to regenerate all generated files::

    make regen-all
    make regen-stdlib-module-names
    make regen-limited-abi
    make regen-configure

The `Makefile.pre.in` file documents generated files, their inputs, and tools used
to regenerate them. Search for `regen-*` make targets.

**configure script**

The `make regen-configure` command regenerates the `aclocal.m4` file and
the `configure` script using the `Tools/build/regen-configure.sh` shell
script which uses an Ubuntu container to get the same tools versions and have a
reproducible output.

容器是可选的，以下命令可以在本地运行::

    autoreconf -ivf -Werror

The generated files can change depending on the exact versions of the
tools used.
The container that CPython uses has
[Autoconf](https://gnu.org/software/autoconf) 2.72,
`aclocal` from [Automake](https://www.gnu.org/software/automake) 1.16.5,
and [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/) 1.8.1.

> *Changed in 3.13*: Autoconf 2.71 and aclocal 1.16.5 and are now used to regenerate :file:`configure`.

> *Changed in 3.14*: Autoconf 2.72 is now used to regenerate :file:`configure`.

.. _configure-options:

**Configure Options**

用以下方式列出所有 :file:`configure` 脚本选项::

    ./configure --help

参阅 Python 源代码中的 :file:`Misc/SpecialBuilds.txt` 。

**General Options**

option:: --enable-loadable-sqlite-extensions

option:: --disable-ipv6

option:: --enable-big-digits=[15|30]

option:: --with-suffix=SUFFIX

option:: --with-tzpath=<list of absolute paths separated by pathsep>

option:: --without-decimal-contextvar

option:: --with-dbmliborder=<list of backend names>

option:: --without-c-locale-coercion

option:: --with-platlibdir=DIRNAME

option:: --with-wheel-pkg-dir=PATH

option:: --with-pkg-config=[checkyesno]

option:: --with-missing-stdlib-config=FILE

option:: --enable-pystats

.. _free-threading-build:

option:: --disable-gil

option:: --enable-experimental-jit=[noyesyes-off|interpreter]

option:: PKG_CONFIG

option:: PKG_CONFIG_LIBDIR

option:: PKG_CONFIG_PATH

option:: --disable-epoll

option:: --with-build-details-suffix=[yes|SUFFIX]

**C compiler options**

option:: CC

option:: CFLAGS

option:: CPP

option:: CPPFLAGS

**Linker options**

option:: LDFLAGS

option:: LIBS

option:: MACHDEP

.. _configure-options-for-dependencies:

**Options for third-party dependencies**

> *Added in 3.11*

option:: BZIP2_CFLAGS

option:: BZIP2_LIBS

option:: CURSES_CFLAGS

option:: CURSES_LIBS

option:: GDBM_CFLAGS

option:: GDBM_LIBS

option:: LIBEDIT_CFLAGS

option:: LIBEDIT_LIBS

option:: LIBFFI_CFLAGS

option:: LIBFFI_LIBS

option:: LIBMPDEC_CFLAGS

option:: LIBMPDEC_LIBS

option:: LIBLZMA_CFLAGS

option:: LIBLZMA_LIBS

option:: LIBREADLINE_CFLAGS

option:: LIBREADLINE_LIBS

option:: LIBSQLITE3_CFLAGS

option:: LIBSQLITE3_LIBS

option:: LIBUUID_CFLAGS

option:: LIBUUID_LIBS

option:: LIBZSTD_CFLAGS

option:: LIBZSTD_LIBS

option:: PANEL_CFLAGS

option:: PANEL_LIBS

option:: TCLTK_CFLAGS

option:: TCLTK_LIBS

option:: ZLIB_CFLAGS

option:: ZLIB_LIBS

**WebAssembly Options**

option:: --enable-wasm-dynamic-linking

option:: --enable-wasm-pthreads

**Install Options**

option:: --prefix=PREFIX

option:: --exec-prefix=EPREFIX

option:: --disable-test-modules

option:: --with-ensurepip=[upgradeinstallno]

**Performance options**

Configuring Python using `--enable-optimizations --with-lto` (PGO + LTO) is
recommended for best performance. The experimental `--enable-bolt` flag can
also be used to improve performance.

option:: --enable-optimizations

envvar:: PROFILE_TASK

option:: --with-lto=[fullthinno|yes]

option:: --enable-bolt

option:: BOLT_APPLY_FLAGS

option:: BOLT_INSTRUMENT_FLAGS

option:: --with-computed-gotos

option:: --with-tail-call-interp

option:: --without-frame-pointers

option:: --without-mimalloc

option:: --without-pymalloc

option:: --with-pymalloc-hugepages

option:: --without-doc-strings

option:: --enable-profiling

option:: --with-strict-overflow

option:: --without-remote-debug

.. _debug-build:

**Python Debug Build**

A debug build is Python built with the `--with-pydebug` configure
option.

调试版本的效果：

* Display all warnings by default: the list of default warning filters is empty
  in the `warnings` module.
* Add `d` to `sys.abiflags`.
* Add `sys.gettotalrefcount` function.
* Add `-X showrefcount` command line option.
* Add `-d` command line option and `PYTHONDEBUG` environment
  variable to debug the parser.
* Add support for the `__lltrace__` variable: enable low-level tracing in the
  bytecode evaluation loop if the variable is defined.
* Install `debug hooks on memory allocators`
  to detect buffer overflow and other memory errors.
* Define `Py_DEBUG` and `Py_REF_DEBUG` macros.
* Add runtime checks: code surrounded by `#ifdef Py_DEBUG` and `#endif`.
  Enable `assert(...)` and `_PyObject_ASSERT(...)` assertions: don't set
  the `NDEBUG` macro (see also the `--with-assertions` configure
  option). Main runtime checks:

  * Add sanity checks on the function arguments.
  * Unicode and int objects are created with their memory filled with a pattern
    to detect usage of uninitialized objects.
  * Ensure that functions which can clear or replace the current exception are
    not called with an exception raised.
  * Check that deallocator functions don't change the current exception.
  * The garbage collector (`gc.collect` function) runs some basic checks
    on objects consistency.
  * The :c`Py_SAFE_DOWNCAST()` macro checks for integer underflow and
    overflow when downcasting from wide types to narrow types.

See also the `Python Development Mode` and the
`--with-trace-refs` configure option.

> *Changed in 3.8*: Release builds are now ABI compatible with debug builds: defining the ``Py_DEBUG`` macro no longer implies the ``Py_TRACE_REFS`` macro (see the :option:`--with-trace-refs` option). However, debug builds still expose more symbols than release builds and code built against a debug build is not necessarily compatible with a release build.

**Debug options**

option:: --with-pydebug

option:: --with-trace-refs

option:: --with-assertions

option:: --with-valgrind

option:: --with-dtrace

option:: --with-address-sanitizer

option:: --with-memory-sanitizer

option:: --with-undefined-behavior-sanitizer

option:: --with-thread-sanitizer

**Linker options**

option:: --enable-shared

option:: --without-static-libpython

option:: --enable-static-libpython-for-interpreter

**Libraries options**

option:: --with-libs='lib1 ...'

option:: --with-system-expat

option:: --with-readline=readline|editline

option:: --without-readline

option:: --with-curses=ncurseswncursescurses

option:: --without-curses

option:: --with-zlib=zlibzlib-ngzlib-rs

option:: --without-zlib

option:: --with-bzip2=bzip2|bzip2-rs

option:: --without-bzip2

option:: --with-libm=STRING

option:: --with-libc=STRING

option:: --with-openssl=DIR

option:: --with-openssl-rpath=[noautoDIR]

**Security Options**

option:: --with-hash-algorithm=[fnvsiphash13siphash24]

option:: --with-builtin-hashlib-hashes=md5,sha1,sha256,sha512,sha3,blake2

option:: --with-ssl-default-suites=[pythonopensslSTRING]

option:: --disable-safety

option:: --enable-slower-safety

**macOS Options**

参见 :source:`Mac/README.rst`。

option:: --enable-universalsdk

option:: --enable-universalsdk=SDKDIR

option:: --enable-framework

option:: --enable-framework=INSTALLDIR

option:: --with-universal-archs=ARCH

option:: --with-framework-name=FRAMEWORK

option:: --with-app-store-compliance

option:: --with-app-store-compliance=PATCH-FILE

**iOS Options**

See `Platforms/Apple/iOS/README.md`.

option:: --enable-framework=INSTALLDIR

option:: --with-framework-name=FRAMEWORK

An iOS build configured without `--enable-framework` produces a static
`libpython`, for embedding directly in an app binary. Such a build cannot
load extension modules at runtime, and so does not support binary wheels; it
requires `MODULE_BUILDTYPE=static` and `--disable-test-modules`, and
rejects `--enable-shared`. See
`Platforms/Apple/iOS/README.md` for the full list of limitations.

> *Added in 3.16*: iOS builds may be configured without a framework.

**Cross Compiling Options**

Cross compiling, also known as cross building, can be used to build Python
for another CPU architecture or platform. Cross compiling requires a Python
interpreter for the build platform. The version of the build Python must match
the version of the cross compiled host Python.

option:: --build=BUILD

option:: --host=HOST

option:: --with-build-python=path/to/python

option:: CONFIG_SITE=file

option:: HOSTRUNNER

交叉编译示例::

   CONFIG_SITE=config.site-aarch64 ../configure \
       --build=x86_64-pc-linux-gnu \
       --host=aarch64-unknown-linux-gnu \
       --with-build-python=../x86_64/python

**Python Build System**

**Main files of the build system**

* `configure.ac` => `configure`;
* `Makefile.pre.in` => `Makefile` (created by `configure`);
* `pyconfig.h` (created by `configure`);
* `Modules/Setup`: C extensions built by the Makefile using
  `Module/makesetup` shell script;

**Main build steps**

* C files (`.c`) are built as object files (`.o`).
* A static `libpython` library (`.a`) is created from objects files.
* `python.o` and the static `libpython` library are linked into the
  final `python` program.
* C extensions are built by the Makefile (see `Modules/Setup`).

**Main Makefile targets**

**make**

For the most part, when rebuilding after editing some code or
refreshing your checkout from upstream, all you need to do is execute
`make`, which (per Make's semantics) builds the default target, the
first one defined in the Makefile.  By tradition (including in the
CPython project) this is usually the `all` target. The
`configure` script expands an `autoconf` variable,
`@DEF_MAKE_ALL_RULE@` to describe precisely which targets `make
all` will build. The three choices are:

* `profile-opt` (configured with `--enable-optimizations`)
* `build_wasm` (chosen if the host platform matches `wasm32-wasi*` or
  `wasm32-emscripten`)
* `build_all` (configured without explicitly using either of the others)

Depending on the most recent source file changes, Make will rebuild
any targets (object files and executables) deemed out-of-date,
including running `configure` again if necessary. Source/target
dependencies are many and maintained manually however, so Make
sometimes doesn't have all the information necessary to correctly
detect all targets which need to be rebuilt.  Depending on which
targets aren't rebuilt, you might experience a number of problems. If
you have build or test problems which you can't otherwise explain,
`make clean && make` should work around most dependency problems, at
the expense of longer build times.

**make platform**

Build the `python` program, but don't build the standard library
extension modules. This generates a file named `platform` which
contains a single line describing the details of the build platform,
e.g., `macosx-14.3-arm64-3.12` or `linux-x86_64-3.13`.

**make profile-opt**

Build Python using profile-guided optimization (PGO).  You can use the
configure `--enable-optimizations` option to make this the
default target of the `make` command (`make all` or just
`make`).

**make clean**

移除已构建文件。

**make distclean**

In addition to the work done by `make clean`, remove files
created by the configure script.  `configure` will have to be run
before building again. [#]_

**make install**

构建 ``all`` 目标并安装 Python。

**make test**

Build the `all` target and run the Python test suite with the
`--fast-ci` option without GUI tests. Variables:

* `TESTOPTS`: additional regrtest command-line options.
* `TESTPYTHONOPTS`: additional Python command-line options.
* `TESTTIMEOUT`: timeout in seconds (default: 10 minutes).

**make ci**

这与 ``make test`` 类似，但还会使用 ``-ugui`` 来运行 GUI 测试。

> *Added in 3.14*

**make buildbottest**

This is similar to `make test`, but uses the `--slow-ci`
option and default timeout of 20 minutes, instead of `--fast-ci` option.

**make regen-all**

Regenerate (almost) all generated files. These include (but are not
limited to) bytecode cases, and parser generator file.
`make regen-stdlib-module-names` and `autoconf` must be run
separately for the remaining `generated files <#generated-files>`_.

**C extensions**

Some C extensions are built as built-in modules, like the `sys` module.
They are built with the `Py_BUILD_CORE_BUILTIN` macro defined.
Built-in modules have no `__file__` attribute:

```pycon

>>> import sys
>>> sys
<module 'sys' (built-in)>
>>> sys.__file__
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: module 'sys' has no attribute '__file__'
```

Other C extensions are built as dynamic libraries, like the `_asyncio` module.
They are built with the `Py_BUILD_CORE_MODULE` macro defined.
Example on Linux x86-64:

```pycon

>>> import _asyncio
>>> _asyncio
<module '_asyncio' from '/usr/lib64/python3.9/lib-dynload/_asyncio.cpython-39-x86_64-linux-gnu.so'>
>>> _asyncio.__file__
'/usr/lib64/python3.9/lib-dynload/_asyncio.cpython-39-x86_64-linux-gnu.so'
```

`Modules/Setup` is used to generate Makefile targets to build C extensions.
At the beginning of the files, C extensions are built as built-in modules.
Extensions defined after the `*shared*` marker are built as dynamic libraries.

The :c`PyAPI_FUNC()`, :c`PyAPI_DATA()` and
:c`PyMODINIT_FUNC` macros of `Include/exports.h` are defined
differently depending if the `Py_BUILD_CORE_MODULE` macro is defined:

* Use `Py_EXPORTED_SYMBOL` if the `Py_BUILD_CORE_MODULE` is defined
* Use `Py_IMPORTED_SYMBOL` otherwise.

If the `Py_BUILD_CORE_BUILTIN` macro is used by mistake on a C extension
built as a shared library, its `PyInit_{xxx}()` function is not exported,
causing an `ImportError` on import.

**Compiler and linker flags**

Options set by the `./configure` script and environment variables and used by
`Makefile`.

**Preprocessor flags**

envvar:: CONFIGURE_CPPFLAGS

envvar:: CPPFLAGS

envvar:: BASECPPFLAGS

envvar:: PY_CPPFLAGS

**Compiler flags**

envvar:: CC

envvar:: CXX

envvar:: CFLAGS

envvar:: CFLAGS_NODIST

envvar:: COMPILEALL_OPTS

envvar:: EXTRA_CFLAGS

envvar:: CONFIGURE_CFLAGS

envvar:: CONFIGURE_CFLAGS_NODIST

envvar:: BASECFLAGS

envvar:: OPT

envvar:: CFLAGS_ALIASING

envvar:: CFLAGS_CEVAL

envvar:: CCSHARED

envvar:: CFLAGSFORSHARED

envvar:: PY_CFLAGS

envvar:: PY_CFLAGS_NODIST

envvar:: PY_STDMODULE_CFLAGS

envvar:: PY_CORE_CFLAGS

envvar:: PY_BUILTIN_MODULE_CFLAGS

envvar:: PURIFY

**Linker flags**

envvar:: LINKCC

envvar:: CONFIGURE_LDFLAGS

envvar:: LDFLAGS_NODIST

envvar:: CONFIGURE_LDFLAGS_NODIST

envvar:: LDFLAGS

envvar:: LIBS

envvar:: LDSHARED

envvar:: BLDSHARED

envvar:: PY_LDFLAGS

envvar:: PY_LDFLAGS_NODIST

envvar:: PY_CORE_LDFLAGS

envvar:: EXE_LDFLAGS

envvar:: CONFIGURE_EXE_LDFLAGS

envvar:: PY_CORE_EXE_LDFLAGS

#### Footnotes

.. [#] `git clean -fdx` is an even more extreme way to "clean" your
   checkout. It removes all files not known to Git.
   When bug hunting using `git bisect`, this is
   [recommended between probes](https://github.com/python/cpython/issues/114505#issuecomment-1907021718)
   to guarantee a completely clean build. **Use with care**, as it
   will delete all files not checked into Git, including your
   new, uncommitted work.
