---
id: "python-en-function-platform-platform"
language: "python"
lang: "en"
category: "function"
name: "platform"
title: "Command-line usage"
directive: "module"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#module-platform"
license: "PSF"
updated: "2026-10-01"
---

# Command-line usage

.. _platform-cli:

**Command-line usage**

`platform` can also be invoked directly using the `-m`
switch of the interpreter::

   python -m platform [--terse] [--nonaliased] [{nonaliased,terse} ...]

The following options are accepted:

program:: platform

option:: --terse

option:: --nonaliased

You can also pass one or more positional arguments (`terse`, `nonaliased`)
to explicitly control the output format. These behave similarly to their
corresponding options.
