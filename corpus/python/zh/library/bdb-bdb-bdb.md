---
id: "python-zh-function-bdb-bdb"
language: "python"
lang: "zh"
category: "function"
name: "Bdb"
signature: "Bdb(skip=None, backend='settrace')"
directive: "class"
module: "bdb"
source_url: "https://docs.python.org/zh-cn/3/library/bdb.html#bdb.Bdb"
license: "PSF"
updated: "2026-10-01"
---

# Bdb

:class:`Bdb` 类是作为通用的 Python 调试器基类。

This class takes care of the details of the trace facility; a derived class
should implement user interaction.  The standard debugger class
(`pdb.Pdb`) is an example.

The *skip* argument, if given, must be an iterable of glob-style
module name patterns.  The debugger will not step into frames that
originate in a module that matches one of these patterns. Whether a
frame is considered to originate in a certain module is determined
by the `__name__` in the frame globals.

The *backend* argument specifies the backend to use for `Bdb`. It
can be either `'settrace'` or `'monitoring'`. `'settrace'` uses
`sys.settrace` which has the best backward compatibility. The
`'monitoring'` backend uses the new `sys.monitoring` that was
introduced in Python 3.12, which can be much more efficient because it
can disable unused events. We are trying to keep the exact interfaces
for both backends, but there are some differences. The debugger developers
are encouraged to use the `'monitoring'` backend to achieve better
performance.

> *Changed in 3.1*: Added the *skip* parameter.

> *Changed in 3.14*: Added the *backend* parameter.

:class:`Bdb` 的以下方法通常不需要被重写。

method:: canonic(filename)

method:: start_trace(self)

method:: stop_trace(self)

method:: reset()

method:: trace_dispatch(frame, event, arg)

method:: dispatch_line(frame)

method:: dispatch_call(frame, arg)

method:: dispatch_return(frame, arg)

method:: dispatch_exception(frame, arg)

Normally derived classes don't override the following methods, but they may
if they want to redefine the definition of stopping and breakpoints.

method:: is_skipped_module(module_name)

method:: stop_here(frame)

method:: break_here(frame)

method:: break_anywhere(frame)

Derived classes should override these methods to gain control over debugger
operation.

method:: user_call(frame, argument_list)

method:: user_line(frame)

method:: user_return(frame, return_value)

method:: user_exception(frame, exc_info)

method:: do_clear(arg)

Derived classes and clients can call the following methods to affect the
stepping state.

method:: set_step()

method:: set_next(frame)

method:: set_return(frame)

method:: set_until(frame, lineno=None)

method:: set_trace([frame])

method:: set_continue()

method:: set_quit()

Derived classes and clients can call the following methods to manipulate
breakpoints.  These methods return a string containing an error message if
something went wrong, or `None` if all is well.

method:: set_break(filename, lineno, temporary=False, cond=None, funcname=None)

method:: clear_break(filename, lineno)

method:: clear_bpbynumber(arg)

method:: clear_all_file_breaks(filename)

method:: clear_all_breaks()

method:: get_bpbynumber(arg)

method:: get_break(filename, lineno)

method:: get_breaks(filename, lineno)

method:: get_file_breaks(filename)

method:: get_all_breaks()

Derived classes and clients can call the following methods to disable and
restart events to achieve better performance. These methods only work
when using the `'monitoring'` backend.

method:: disable_current_event()

method:: restart_events()

Derived classes and clients can call the following methods to get a data
structure representing a stack trace.

method:: get_stack(f, t)

method:: format_stack_entry(frame_lineno, lprefix=': ')

The following two methods can be called by clients to use a debugger to debug
a `statement`, given as a string.

method:: run(cmd, globals=None, locals=None)

method:: runeval(expr, globals=None, locals=None)

method:: runctx(cmd, globals, locals)

method:: runcall(func, /, *args, **kwds)
