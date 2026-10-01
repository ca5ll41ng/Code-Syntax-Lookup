---
id: "python-en-function-ensurepip-altinstall-false-default_pip-false"
language: "python"
lang: "en"
category: "function"
name: "altinstall=False, default_pip=False, \\"
directive: "function"
module: "ensurepip"
source_url: "https://docs.python.org/3/library/ensurepip.html#ensurepip.altinstall=False, default_pip=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# altinstall=False, default_pip=False, \

Bootstraps `pip` into the current or designated environment.

*root* specifies an alternative root directory to install relative to.
If *root* is `None`, then installation uses the default install location
for the current environment.

*upgrade* indicates whether or not to upgrade an existing installation
of an earlier version of `pip` to the available version.

*user* indicates whether to use the user scheme rather than installing
globally.

By default, the scripts `pipX` and `pipX.Y` will be installed (where
X.Y stands for the current version of Python).

If *altinstall* is set, then `pipX` will *not* be installed.

If *default_pip* is set, then `pip` will be installed in addition to
the two regular scripts.

Setting both *altinstall* and *default_pip* will trigger
`ValueError`.

*verbosity* controls the level of output to `sys.stdout` from the
bootstrapping operation.

audit-event:: ensurepip.bootstrap root ensurepip.bootstrap

> **Note**
>
> The bootstrapping process has side effects on both `sys.path` and
> `os.environ`. Invoking the command line interface in a subprocess
> instead allows these side effects to be avoided.
>

> **Note**
>
> The bootstrapping process may install additional modules required by
> `pip`, but other software should not assume those dependencies will
> always be present by default (as the dependencies may be removed in a
> future version of `pip`).
>
