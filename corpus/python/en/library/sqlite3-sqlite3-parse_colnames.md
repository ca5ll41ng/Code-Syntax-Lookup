---
id: "python-en-function-sqlite3-parse_colnames"
language: "python"
lang: "en"
category: "function"
name: "PARSE_COLNAMES"
directive: "data"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.PARSE_COLNAMES"
license: "PSF"
updated: "2026-10-01"
---

# PARSE_COLNAMES

Pass this flag value to the *detect_types* parameter of
`connect` to look up a converter function by
using the type name, parsed from the query column name,
as the converter dictionary key.
The query column name must be wrapped in double quotes (`"`)
and the type name must be wrapped in square brackets (`[]`).

```sql

SELECT MAX(p) as "p [point]" FROM test;  ! will look up converter "point"
```

This flag may be combined with `PARSE_DECLTYPES` using the `|`
(bitwise or) operator.
