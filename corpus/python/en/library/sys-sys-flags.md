---
id: "python-en-function-sys-flags"
language: "python"
lang: "en"
category: "function"
name: "flags"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.flags"
license: "PSF"
updated: "2026-10-01"
---

# flags

The `named tuple` *flags* exposes the status of command line
flags.  Flags should only be accessed only by name and not by index.  The
attributes are read only.

list-table::

> *Changed in 3.2*: Added ``quiet`` attribute for the new :option:`-q` flag.

> *Added in 3.2.3*: The ``hash_randomization`` attribute.

> *Changed in 3.3*: Removed obsolete ``division_warning`` attribute.

> *Changed in 3.4*: Added ``isolated`` attribute for :option:`-I` ``isolated`` flag.

> *Changed in 3.7*: Added the ``dev_mode`` attribute for the new :ref:`Python Development Mode <devmode>` and the ``utf8_mode`` attribute for the new  :option:`-X` ``utf8`` flag.

> *Changed in 3.10*: Added ``warn_default_encoding`` attribute for :option:`-X` ``warn_default_encoding`` flag.

> *Changed in 3.11*: Added the ``safe_path`` attribute for :option:`-P` option.

> *Changed in 3.11*: Added the ``int_max_str_digits`` attribute.

> *Changed in 3.13*: Added the ``gil`` attribute.

> *Changed in 3.14*: Added the ``thread_inherit_context`` attribute.

> *Changed in 3.14*: Added the ``context_aware_warnings`` attribute.
