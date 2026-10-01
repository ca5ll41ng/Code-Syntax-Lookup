---
id: "python-en-function-sys-exec_prefix"
language: "python"
lang: "en"
category: "function"
name: "exec_prefix"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.exec_prefix"
license: "PSF"
updated: "2026-10-01"
---

# exec_prefix

A string giving the site-specific directory prefix where the platform-dependent
Python files are installed; by default, this is also `'/usr/local'`.  This can
be set at build time with the `--exec-prefix` argument to the
`configure` script.  Specifically, all configuration files (e.g. the
`pyconfig.h` header file) are installed in the directory
`{exec_prefix}/lib/python{X.Y}/config`, and shared library modules are
installed in `{exec_prefix}/lib/python{X.Y}/lib-dynload`, where *X.Y*
is the version number of Python, for example `3.2`.

> **Note**
>
> If a `virtual environment` is in effect, this `exec_prefix`
> will point to the virtual environment. The value for the Python installation
> will still be available, via `base_exec_prefix`.
> Refer to `sys-path-init-virtual-environments` for more information.
>

> *Changed in 3.14*: When running under a :ref:`virtual environment <venv-def>`, :data:`prefix` and :data:`exec_prefix` are now set to the virtual environment prefix by the :ref:`path initialization <sys-path-init>`, instead of :mod:`site`. This means that :data:`prefix` and :data:`exec_prefix` always point to the virtual environment, even when :mod:`site` is disabled (:option:`-S`).
