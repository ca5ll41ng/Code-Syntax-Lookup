---
id: "python-en-function-datetime-datetime-now"
language: "python"
lang: "en"
category: "function"
name: "datetime.now"
signature: "datetime.now(tz=None)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.now"
license: "PSF"
updated: "2026-10-01"
---

# datetime.now

Return the current local date and time.

If optional argument *tz* is `None`
or not specified, this is like `today`, but, if possible, supplies more
precision than can be gotten from going through a `time.time` timestamp
(for example, this may be possible on platforms supplying the C
:c`gettimeofday` function).

If *tz* is not `None`, it must be an instance of a `tzinfo` subclass,
and the current date and time are converted to *tz*’s time zone.

This function is preferred over `today` and `utcnow`.

> **Note**
>
> Subsequent calls to `datetime.now` may return the same
> instant depending on the precision of the underlying clock.
>
