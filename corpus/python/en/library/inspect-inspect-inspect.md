---
id: "python-en-function-inspect-inspect"
language: "python"
lang: "en"
category: "function"
name: "inspect"
title: "Command-line interface"
directive: "module"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#module-inspect"
license: "PSF"
updated: "2026-10-01"
---

# Command-line interface

.. _inspect-module-cli:

**Command-line interface**

The `inspect` module also provides a basic introspection capability
from the command line.

program:: inspect

By default, accepts the name of a module and prints the source of that
module. A class or function within the module can be printed instead by
appending a colon and the qualified name of the target object.

option:: --details

> *Changed in 3.15*: The ``--details`` option now supports basic introspection for modules without available source code and indicates when modules are frozen. It also indicates when the given target reference is not the canonical name of the referenced object.
