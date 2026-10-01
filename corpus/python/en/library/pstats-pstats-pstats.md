---
id: "python-en-function-pstats-pstats"
language: "python"
lang: "en"
category: "function"
name: "pstats"
title: "Command-line interface"
directive: "module"
module: "pstats"
source_url: "https://docs.python.org/3/library/pstats.html#module-pstats"
license: "PSF"
updated: "2026-10-01"
---

# Command-line interface

.. _pstats-cli:

**Command-line interface**

The `pstats` module can be invoked as a script to interactively browse
profile data::

   python -m pstats profile_output.prof

This opens a line-oriented interface (built on `cmd`) for examining the
statistics. Type `help` at the prompt for available commands.

> **Seealso**
>
> `profiling`
>    Overview of Python profiling tools.
>
> `profiling.tracing`
>    Deterministic tracing profiler.
>
> `profiling.sampling`
>    Statistical sampling profiler.
>
