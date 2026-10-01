---
id: "python-en-function-datetime-date-timetuple"
language: "python"
lang: "en"
category: "function"
name: "date.timetuple"
signature: "date.timetuple()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.timetuple"
license: "PSF"
updated: "2026-10-01"
---

# date.timetuple

Return a `time.struct_time` such as returned by `time.localtime`.

The hours, minutes and seconds are 0, and the DST flag is -1.

`d.timetuple()` is equivalent to::

  time.struct_time((d.year, d.month, d.day, 0, 0, 0, d.weekday(), yday, -1))

where `yday = d.toordinal() - date(d.year, 1, 1).toordinal() + 1`
is the day number within the current year starting with 1 for January 1st.
