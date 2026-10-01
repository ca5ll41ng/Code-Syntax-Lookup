---
id: "python-en-function-datetime-datetime-utcnow"
language: "python"
lang: "en"
category: "function"
name: "datetime.utcnow"
signature: "datetime.utcnow()"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.utcnow"
license: "PSF"
updated: "2026-10-01"
---

# datetime.utcnow

Return the current UTC date and time, with `.tzinfo` `None`.

This is like `now`, but returns the current UTC date and time, as a naive
`.datetime` object. An aware current UTC datetime can be obtained by
calling `datetime.now(timezone.utc)`. See also `now`.

> **Warning**
>
> Because naive `datetime` objects are treated by many `datetime` methods
> as local times, it is preferred to use aware datetimes to represent times
> in UTC. As such, the recommended way to create an object representing the
> current time in UTC is by calling `datetime.now(timezone.utc)`.
>

> *Deprecated since 3.12*: Use :meth:`datetime.now` with :const:`UTC` instead.
