---
id: "python-en-function-venv-upgrade_deps-false-scm_ignore_files-frozenset"
language: "python"
lang: "en"
category: "function"
name: "upgrade_deps=False, *, scm_ignore_files=frozenset())"
directive: "function"
module: "venv"
source_url: "https://docs.python.org/3/library/venv.html#venv.upgrade_deps=False, *, scm_ignore_files=frozenset())"
license: "PSF"
updated: "2026-10-01"
---

# upgrade_deps=False, *, scm_ignore_files=frozenset())

Create an `EnvBuilder` with the given keyword arguments, and call its
`~EnvBuilder.create` method with the *env_dir* argument.

> *Added in 3.3*

> *Changed in 3.4*: Added the *with_pip* parameter

> *Changed in 3.6*: Added the *prompt* parameter

> *Changed in 3.9*: Added the *upgrade_deps* parameter

> *Changed in 3.13*: Added the *scm_ignore_files* parameter

> *Changed in 3.16*: The default value of *symlinks* is now platform-dependent.
