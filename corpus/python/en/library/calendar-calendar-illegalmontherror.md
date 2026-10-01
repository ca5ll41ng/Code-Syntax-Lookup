---
id: "python-en-function-calendar-illegalmontherror"
language: "python"
lang: "en"
category: "function"
name: "IllegalMonthError"
signature: "IllegalMonthError(month)"
directive: "exception"
module: "calendar"
source_url: "https://docs.python.org/3/library/calendar.html#calendar.IllegalMonthError"
license: "PSF"
updated: "2026-10-01"
---

# IllegalMonthError

A subclass of `ValueError` and `IndexError`,
raised when the given month number is outside of the range 1-12 (inclusive).

> *Changed in 3.12*: :exc:`IllegalMonthError` is now also a subclass of :exc:`ValueError`. New code should avoid catching :exc:`IndexError`.

attribute:: month
