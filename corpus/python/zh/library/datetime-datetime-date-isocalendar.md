---
id: "python-zh-function-datetime-date-isocalendar"
language: "python"
lang: "zh"
category: "function"
name: "date.isocalendar"
signature: "date.isocalendar()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.date.isocalendar"
license: "PSF"
updated: "2026-10-01"
---

# date.isocalendar

Return a `named tuple` object with three components: `year`,
`week` and `weekday`.

ISO 历法是一种被广泛使用的格列高利历。 [#]_

The ISO year consists of 52 or 53 full weeks, and where a week starts on a
Monday and ends on a Sunday. The first week of an ISO year is the first
(Gregorian) calendar week of a year containing a Thursday. This is called week
number 1, and the ISO year of that Thursday is the same as its Gregorian year.

For example, 2004 begins on a Thursday, so the first week of ISO year 2004
begins on Monday, 29 Dec 2003 and ends on Sunday, 4 Jan 2004::

     >>> import datetime as dt
     >>> dt.date(2003, 12, 29).isocalendar()
     datetime.IsoCalendarDate(year=2004, week=1, weekday=1)
     >>> dt.date(2004, 1, 4).isocalendar()
     datetime.IsoCalendarDate(year=2004, week=1, weekday=7)

> *Changed in 3.9*: Result changed from a tuple to a :term:`named tuple`.
