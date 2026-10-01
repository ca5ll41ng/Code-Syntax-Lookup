---
id: "python-en-function-calendar-setfirstweekday"
language: "python"
lang: "en"
category: "function"
name: "setfirstweekday"
signature: "setfirstweekday(firstweekday)"
directive: "function"
module: "calendar"
source_url: "https://docs.python.org/3/library/calendar.html#calendar.setfirstweekday"
license: "PSF"
updated: "2026-10-01"
---

# setfirstweekday

Sets the weekday (`0` is Monday, `6` is Sunday) to start each week. The
values `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`,
`FRIDAY`, `SATURDAY`, and `SUNDAY` are provided for
convenience. For example, to set the first weekday to Sunday::

   import calendar
   calendar.setfirstweekday(calendar.SUNDAY)
