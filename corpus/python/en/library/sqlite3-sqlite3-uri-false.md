---
id: "python-en-function-sqlite3-uri-false"
language: "python"
lang: "en"
category: "function"
name: "uri=False, \\"
directive: "function"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.uri=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# uri=False, \

Open a connection to an SQLite database.

:param database:
    The path to the database file to be opened.
    You can pass `":memory:"` to create an `SQLite database existing only
    in memory <https://sqlite.org/inmemorydb.html>`_, and open a connection
    to it.
:type database: `path-like object`

:param float timeout:
    How many seconds the connection should wait before raising
    an `OperationalError` when a table is locked.
    If another connection opens a transaction to modify a table,
    that table will be locked until the transaction is committed.
    Default five seconds.

:param int detect_types:
    Control whether and how data types not
    `natively supported by SQLite`
    are looked up to be converted to Python types,
    using the converters registered with `register_converter`.
    Set it to any combination (using `|`, bitwise or) of
    `PARSE_DECLTYPES` and `PARSE_COLNAMES`
    to enable this.
    Column names take precedence over declared types if both flags are set.
    By default (`0`), type detection is disabled.

:param isolation_level:
    Control legacy transaction handling behaviour.
    See `Connection.isolation_level` and
    `sqlite3-transaction-control-isolation-level` for more information.
    Can be `"DEFERRED"` (default), `"EXCLUSIVE"` or `"IMMEDIATE"`;
    or `None` to disable opening transactions implicitly.
    Has no effect unless `Connection.autocommit` is set to
    `~sqlite3.LEGACY_TRANSACTION_CONTROL` (the default).
:type isolation_level: str | None

:param bool check_same_thread:
    If `True` (default), `ProgrammingError` will be raised
    if the database connection is used by a thread
    other than the one that created it.
    If `False`, the connection may be accessed in multiple threads;
    write operations may need to be serialized by the user
    to avoid data corruption.
    See `threadsafety` for more information.

:param ~sqlite3.Connection factory:
    A custom subclass of `Connection` to create the connection with,
    if not the default `Connection` class.

:param int cached_statements:
    The number of statements that `sqlite3`
    should internally cache for this connection, to avoid parsing overhead.
    By default, 128 statements.

:param bool uri:
    If set to `True`, *database* is interpreted as a
    `URI (Uniform Resource Identifier)` with a file path
    and an optional query string.
    The scheme part *must* be `"file:"`,
    and the path can be relative or absolute.
    The query string allows passing parameters to SQLite,
    enabling various `sqlite3-uri-tricks`.

:param autocommit:
    Control PEP 249 transaction handling behaviour.
    See `Connection.autocommit` and
    `sqlite3-transaction-control-autocommit` for more information.
    *autocommit* currently defaults to
    `~sqlite3.LEGACY_TRANSACTION_CONTROL`.
    The default will change to `False` in a future Python release.
:type autocommit: bool

:rtype: ~sqlite3.Connection

audit-event:: sqlite3.connect database sqlite3.connect

audit-event:: sqlite3.connect/handle connection_handle sqlite3.connect

> *Changed in 3.4*: Added the *uri* parameter.

> *Changed in 3.7*: *database* can now also be a :term:`path-like object`, not only a string.

> *Changed in 3.10*: Added the ``sqlite3.connect/handle`` auditing event.

> *Changed in 3.12*: Added the *autocommit* parameter.

> *Changed in 3.15*: All parameters except *database* are now keyword-only.
