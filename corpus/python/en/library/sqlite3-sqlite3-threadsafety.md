---
id: "python-en-function-sqlite3-threadsafety"
language: "python"
lang: "en"
category: "function"
name: "threadsafety"
directive: "data"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.threadsafety"
license: "PSF"
updated: "2026-10-01"
---

# threadsafety

Integer constant required by the DB-API 2.0, stating the level of thread
safety the `sqlite3` module supports. This attribute is set based on
the default [threading mode](https://sqlite.org/threadsafe.html) the
underlying SQLite library is compiled with. The SQLite threading modes are:

1. **Single-thread**: In this mode, all mutexes are disabled and SQLite is
   unsafe to use in more than a single thread at once.
2. **Multi-thread**: In this mode, SQLite can be safely used by multiple
   threads provided that no single database connection is used
   simultaneously in two or more threads.
3. **Serialized**: In serialized mode, SQLite can be safely used by
   multiple threads with no restriction.

The mappings from SQLite threading modes to DB-API 2.0 threadsafety levels
are as follows:

+------------------+----------------------+----------------------+-------------------------------+
 SQLite threading  PEP threadsafety    SQLITE_THREADSAFE`_  DB-API 2.0 meaning            
 mode              <0249#threadsafety>`                                                      
+==================+======================+======================+===============================+
 single-thread     0                     0                     Threads may not share the     
                                                               module                        
+------------------+----------------------+----------------------+-------------------------------+
 multi-thread      1                     2                     Threads may share the module, 
                                                               but not connections           
+------------------+----------------------+----------------------+-------------------------------+
 serialized        3                     1                     Threads may share the module, 
                                                               connections and cursors       
+------------------+----------------------+----------------------+-------------------------------+

.. _SQLITE_THREADSAFE: https://sqlite.org/compile.html#threadsafe

> *Changed in 3.11*: Set *threadsafety* dynamically instead of hard-coding it to ``1``.
