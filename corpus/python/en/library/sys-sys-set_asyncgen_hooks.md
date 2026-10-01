---
id: "python-en-function-sys-set_asyncgen_hooks"
language: "python"
lang: "en"
category: "function"
name: "set_asyncgen_hooks"
signature: "set_asyncgen_hooks([firstiter] [, finalizer])"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.set_asyncgen_hooks"
license: "PSF"
updated: "2026-10-01"
---

# set_asyncgen_hooks

Accepts two optional keyword arguments which are callables that accept an
`asynchronous generator iterator` as an argument. The *firstiter*
callable will be called when an asynchronous generator is iterated for the
first time. The *finalizer* will be called when an asynchronous generator
is about to be garbage collected.

audit-event:: sys.set_asyncgen_hooks_firstiter "" sys.set_asyncgen_hooks

audit-event:: sys.set_asyncgen_hooks_finalizer "" sys.set_asyncgen_hooks

Two auditing events are raised because the underlying API consists of two
calls, each of which must raise its own event.

> *Added in 3.6*: See :pep:`525` for more details, and for a reference example of a *finalizer* method see the implementation of ``asyncio.Loop.shutdown_asyncgens`` in :source:`Lib/asyncio/base_events.py`

> **Note**
>
> This function has been added on a provisional basis (see PEP 411
> for details.)
>
