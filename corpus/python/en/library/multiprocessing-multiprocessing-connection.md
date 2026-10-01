---
id: "python-en-function-multiprocessing-connection"
language: "python"
lang: "en"
category: "function"
name: "Connection"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Connection"
license: "PSF"
updated: "2026-10-01"
---

# Connection

method:: send(obj)

method:: recv()

method:: fileno()

method:: close()

method:: poll([timeout])

method:: send_bytes(buf[, offset[, size]])

method:: recv_bytes([maxlength])

method:: recv_bytes_into(buf[, offset])

> *Changed in 3.3*: Connection objects themselves can now be transferred between processes using :meth:`Connection.send` and :meth:`Connection.recv`.  Connection objects also now support the context management protocol -- see :ref:`typecontextmanager`.  :meth:`~contextmanager.__enter__` returns the connection object, and :meth:`~contextmanager.__exit__` calls :meth:`close`.
