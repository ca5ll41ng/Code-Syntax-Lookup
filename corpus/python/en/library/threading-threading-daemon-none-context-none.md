---
id: "python-en-function-threading-daemon-none-context-none"
language: "python"
lang: "en"
category: "function"
name: "daemon=None, context=None)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.daemon=None, context=None)"
license: "PSF"
updated: "2026-10-01"
---

# daemon=None, context=None)

This constructor should always be called with keyword arguments.  Arguments
are:

*group* must be `None` as it is reserved for future extension when a
`ThreadGroup` class is implemented.

*target* is the callable object to be invoked by the `run` method.
Defaults to `None`, meaning nothing is called.

*name* is the thread name. By default, a unique name is constructed
of the form "Thread-*N*" where *N* is a small decimal number,
or "Thread-*N* (target)" where "target" is `target.__name__` if the
*target* argument is specified.

*args* is a list or tuple of arguments for the target invocation.  Defaults to `()`.

*kwargs* is a dictionary of keyword arguments for the target invocation.
Defaults to `{}`.

If not `None`, *daemon* explicitly sets whether the thread is daemonic.
If `None` (the default), the daemonic property is inherited from the
current thread.

*context* is the `~contextvars.Context` value to use when starting
the thread.  The default value is `None` which indicates that the
`sys.flags.thread_inherit_context` flag controls the behaviour.  If
the flag is true, threads will start with a copy of the context of the
caller of `~Thread.start`.  If false, they will start with an empty
context.  To explicitly start with an empty context, pass a new instance of
`~contextvars.Context()`.  To explicitly start with a copy of the
current context, pass the value from `~contextvars.copy_context`. The
flag defaults true on free-threaded builds and false otherwise.

If the subclass overrides the constructor, it must make sure to invoke the
base class constructor (`Thread.__init__()`) before doing anything else to
the thread.

> *Changed in 3.3*: Added the *daemon* parameter.

> *Changed in 3.10*: Use the *target* name if *name* argument is omitted.

> *Changed in 3.14*: Added the *context* parameter.

method:: start()

method:: run()

.. _meth-thread-join:

method:: join(timeout=None)

attribute:: name

method:: getName()

attribute:: ident

attribute:: native_id

method:: is_alive()

attribute:: daemon

method:: isDaemon()
