---
id: "python-en-function-sys-monitoring-sys-monitoring"
language: "python"
lang: "en"
category: "function"
name: "sys.monitoring"
title: "When an active event occurs, the registered callback function is called."
directive: "module"
module: "sys.monitoring"
source_url: "https://docs.python.org/3/library/sys.monitoring.html#module-sys.monitoring"
license: "PSF"
updated: "2026-10-01"
---

# When an active event occurs, the registered callback function is called.

When an active event occurs, the registered callback function is called.
Callback functions returning an object other than `DISABLE` will have no effect.
Different events will provide the callback function with different arguments, as follows:

* `PY_START` and `PY_RESUME`::

    func(code: CodeType, instruction_offset: int) -> object

* `PY_RETURN` and `PY_YIELD`::

    func(code: CodeType, instruction_offset: int, retval: object) -> object

* `CALL`, `C_RAISE` and `C_RETURN`
  (*arg0* can be `MISSING` specifically)::

    func(code: CodeType, instruction_offset: int, callable: object, arg0: object) -> object

  *code* represents the code object where the call is being made, while
  *callable* is the object that is about to be called (and thus
  triggered the event).
  If there are no arguments, *arg0* is set to `sys.monitoring.MISSING`.

  For instance methods, *callable* will be the function object as found on the
  class with *arg0* set to the instance (i.e. the `self` argument to the
  method).

* `RAISE`, `RERAISE`, `EXCEPTION_HANDLED`,
  `PY_UNWIND`, `PY_THROW` and `STOP_ITERATION`::

    func(code: CodeType, instruction_offset: int, exception: BaseException) -> object

* `LINE`::

    func(code: CodeType, line_number: int) -> object

* `BRANCH_LEFT`, `BRANCH_RIGHT` and `JUMP`::

    func(code: CodeType, instruction_offset: int, destination_offset: int) -> object

  Note that the *destination_offset* is where the code will next execute.

* `INSTRUCTION`::

    func(code: CodeType, instruction_offset: int) -> object
