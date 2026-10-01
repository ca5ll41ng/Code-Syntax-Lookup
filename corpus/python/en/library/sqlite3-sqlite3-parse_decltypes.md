---
id: "python-en-function-sqlite3-parse_decltypes"
language: "python"
lang: "en"
category: "function"
name: "PARSE_DECLTYPES"
directive: "data"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.PARSE_DECLTYPES"
license: "PSF"
updated: "2026-10-01"
---

# PARSE_DECLTYPES

Pass this flag value to the *detect_types* parameter of
`connect` to look up a converter function using
the declared types for each column.
The types are declared when the database table is created.
`sqlite3` will look up a converter function using the first word of the
declared type as the converter dictionary key.
For example:

```sql

CREATE TABLE test(
   i integer primary key,  ! will look up a converter named "integer"
   p point,                ! will look up a converter named "point"
   n number(10)            ! will look up a converter named "number"
 )
```

This flag may be combined with `PARSE_COLNAMES` using the `|`
(bitwise or) operator.

> **Note**
>
> Generated fields (for example `MAX(p)`) are returned as `str`.
> Use `PARSE_COLNAMES` to enforce types for such queries.
>
