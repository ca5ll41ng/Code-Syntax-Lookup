---
id: "python-en-function-sqlite3-cursor"
language: "python"
lang: "en"
category: "function"
name: "Cursor"
directive: "class"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.Cursor"
license: "PSF"
updated: "2026-10-01"
---

# Cursor

A `Cursor` instance has the following attributes and methods.

method:: execute(sql, parameters=(), /)

method:: executemany(sql, parameters, /)

method:: executescript(sql_script, /)

method:: fetchone()

method:: fetchmany(size=cursor.arraysize)

method:: fetchall()

method:: close()

method:: setinputsizes(sizes, /)

method:: setoutputsize(size, column=None, /)

attribute:: arraysize

attribute:: connection

attribute:: description

attribute:: lastrowid

attribute:: rowcount

attribute:: row_factory
