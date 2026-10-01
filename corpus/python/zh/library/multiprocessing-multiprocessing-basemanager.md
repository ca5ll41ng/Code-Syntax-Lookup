---
id: "python-zh-function-multiprocessing-basemanager"
language: "python"
lang: "zh"
category: "function"
name: "BaseManager"
signature: "BaseManager(address=None, authkey=None, serializer='pickle', ctx=None, *, shutdown_timeout=1.0)"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.BaseManager"
license: "PSF"
updated: "2026-10-01"
---

# BaseManager

创建一个 BaseManager 对象。

Once created one should call `start` or `get_server().serve_forever()` to ensure
that the manager object refers to a started manager process.

*address* is the address on which the manager process listens for new
connections.  If *address* is `None` then an arbitrary one is chosen.

*authkey* is the authentication key which will be used to check the
validity of incoming connections to the server process.  If
*authkey* is `None` then `current_process().authkey` is used.
Otherwise *authkey* is used and it must be a byte string.

*serializer* must be `'pickle'` (use `pickle` serialization) or
`'xmlrpclib'` (use `xmlrpc.client` serialization).

*ctx* is a context object, or `None` (use the current context). If `None`,
calling this may set the global start method. See
`global-start-method` for more details.

*shutdown_timeout* is a timeout in seconds used to wait until the process
used by the manager completes in the `shutdown` method. If the
shutdown times out, the process is terminated. If terminating the process
also times out, the process is killed.

> *Changed in 3.11*: Added the *shutdown_timeout* parameter.

method:: start([initializer[, initargs]])

method:: get_server()

method:: connect()

method:: shutdown()

method:: register(typeid[, callable[, proxytype[, exposed[, method_to_typeid[, create_method]]]]])

:class:`BaseManager` 实例也有一个只读属性。

attribute:: address

> *Changed in 3.3*: Manager objects support the context management protocol -- see :ref:`typecontextmanager`.  :meth:`~contextmanager.__enter__` starts the server process (if it has not already started) and then returns the manager object.  :meth:`~contextmanager.__exit__` calls :meth:`shutdown`.  In previous versions :meth:`~contextmanager.__enter__` did not start the manager's server process if it was not already started.
