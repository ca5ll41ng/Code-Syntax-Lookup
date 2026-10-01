---
id: "python-zh-function-venv-prompt-none-upgrade_deps-false"
language: "python"
lang: "zh"
category: "function"
name: "prompt=None, upgrade_deps=False, \\"
directive: "class"
module: "venv"
source_url: "https://docs.python.org/zh-cn/3/library/venv.html#venv.prompt=None, upgrade_deps=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# prompt=None, upgrade_deps=False, \

The `EnvBuilder` class accepts the following keyword arguments on
instantiation:

* *system_site_packages* -- a boolean value indicating that the system Python
  site-packages should be available to the environment (defaults to `False`).

* *clear* -- a boolean value which, if true, will delete the contents of
  any existing target directory, before creating the environment.

* *symlinks* -- a boolean value indicating whether to attempt to symlink the
  Python binary rather than copying. If `None`, the default is `False` on
  Windows and `True` on other platforms, matching the `CLI`.

* *upgrade* -- a boolean value which, if true, will upgrade an existing
  environment with the running Python - for use when that Python has been
  upgraded in-place (defaults to `False`).

* *with_pip* -- a boolean value which, if true, ensures pip is
  installed in the virtual environment. This uses `ensurepip` with
  the `--default-pip` option.

* *prompt* -- a string to be used after virtual environment is activated
  (defaults to `None` which means directory name of the environment would
  be used). If the special string `"."` is provided, the basename of the
  current directory is used as the prompt.

* *upgrade_deps* -- Update the base venv modules to the latest on PyPI

* *scm_ignore_files* -- Create ignore files based for the specified source
  control managers (SCM) in the iterable. Support is defined by having a
  method named `create_{scm}_ignore_file`. The only value supported by
  default is `"git"` via `create_git_ignore_file`.

> *Changed in 3.4*: Added the ``with_pip`` parameter

> *Changed in 3.6*: Added the ``prompt`` parameter

> *Changed in 3.9*: Added the ``upgrade_deps`` parameter

> *Changed in 3.13*: Added the ``scm_ignore_files`` parameter

> *Changed in 3.16*: The default value of *symlinks* is now platform-dependent.

:class:`EnvBuilder` 可以被用作基类。

method:: create(env_dir)

method:: ensure_directories(env_dir)

method:: create_configuration(context)

method:: setup_python(context)

method:: setup_scripts(context)

method:: upgrade_dependencies(context)

method:: post_setup(context)

method:: install_scripts(context, path)

method:: create_git_ignore_file(context)

> *Changed in 3.7.2*: Windows now uses redirector scripts for ``python[w].exe`` instead of copying the actual binaries. In 3.7.2 only :meth:`setup_python` does nothing unless running from a build in the source tree.

> *Changed in 3.7.3*: Windows copies the redirector scripts as part of :meth:`setup_python` instead of :meth:`setup_scripts`. This was not the case in 3.7.2. When using symlinks, the original executables will be linked.
