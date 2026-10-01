---
id: "python-en-function-sqlite3-connection"
language: "python"
lang: "en"
category: "function"
name: "Connection"
directive: "class"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.Connection"
license: "PSF"
updated: "2026-10-01"
---

# Connection

Each open SQLite database is represented by a `Connection` object,
which is created using `sqlite3.connect`.
Their main purpose is creating `Cursor` objects,
and `sqlite3-controlling-transactions`.

> **Seealso**
>
> * `sqlite3-connection-shortcuts`
> * `sqlite3-connection-context-manager`
>

> *Changed in 3.13*: A :exc:`ResourceWarning` is emitted if :meth:`close` is not called before a :class:`!Connection` object is deleted.

An SQLite database connection has the following attributes and methods:

method:: cursor(factory=Cursor)

method:: blobopen(table, column, rowid, /, *, readonly=False, name="main")

method:: commit()

method:: rollback()

method:: close()

method:: execute(sql, parameters=(), /)

method:: executemany(sql, parameters, /)

method:: executescript(sql_script, /)

method:: create_function(name, narg, func, /, *, deterministic=False)

method:: create_aggregate(name, n_arg, aggregate_class, /)

method:: create_window_function(name, num_params, aggregate_class, /)

method:: create_collation(name, callable, /)

method:: interrupt()

method:: set_authorizer(authorizer_callback, /)

method:: set_progress_handler(progress_handler, /, n)

method:: set_trace_callback(trace_callback, /)

method:: enable_load_extension(enabled, /)

method:: load_extension(path, /, *, entrypoint=None)

.. _Loading an Extension: https://www.sqlite.org/loadext.html#loading_an_extension

method:: iterdump(*, filter=None)

method:: backup(target, *, pages=-1, progress=None, name="main", sleep=0.250)

method:: getlimit(category, /)

method:: setlimit(category, limit, /)

.. _SQLite limit category: https://www.sqlite.org/c3ref/c_limit_attached.html

method:: getconfig(op, /)

method:: setconfig(op, enable=True, /)

method:: serialize(*, name="main")

method:: deserialize(data, /, *, name="main")

attribute:: autocommit

attribute:: in_transaction

attribute:: isolation_level

attribute:: row_factory

attribute:: text_factory

attribute:: total_changes
