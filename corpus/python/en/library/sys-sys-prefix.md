---
id: "python-en-function-sys-prefix"
language: "python"
lang: "en"
category: "function"
name: "prefix"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.prefix"
license: "PSF"
updated: "2026-10-01"
---

# prefix

A string giving the site-specific directory prefix where the platform
independent Python files are installed; on Unix, the default is
`/usr/local`. This can be set at build time with the `--prefix`
argument to the `configure` script.  See
`installation_paths` for derived paths.

> **Note**
>
> If a `virtual environment` is in effect, this `prefix`
> will point to the virtual environment. The value for the Python installation
> will still be available, via `base_prefix`.
> Refer to `sys-path-init-virtual-environments` for more information.
>

> *Changed in 3.14*: When running under a :ref:`virtual environment <venv-def>`, :data:`prefix` and :data:`exec_prefix` are now set to the virtual environment prefix by the :ref:`path initialization <sys-path-init>`, instead of :mod:`site`. This means that :data:`prefix` and :data:`exec_prefix` always point to the virtual environment, even when :mod:`site` is disabled (:option:`-S`).
