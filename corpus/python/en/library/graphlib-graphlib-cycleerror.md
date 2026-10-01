---
id: "python-en-function-graphlib-cycleerror"
language: "python"
lang: "en"
category: "function"
name: "CycleError"
directive: "exception"
module: "graphlib"
source_url: "https://docs.python.org/3/library/graphlib.html#graphlib.CycleError"
license: "PSF"
updated: "2026-10-01"
---

# CycleError

Subclass of `ValueError` raised by `TopologicalSorter.prepare` if cycles exist
in the working graph. If multiple cycles exist, only one undefined choice among them will
be reported and included in the exception.

The detected cycle can be accessed via the second element in the `~BaseException.args`
attribute of the exception instance and consists in a list of nodes, such that each node is,
in the graph, an immediate predecessor of the next node in the list. In the reported list,
the first and the last node will be the same, to make it clear that it is cyclic.
