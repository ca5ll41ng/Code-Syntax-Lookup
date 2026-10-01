---
id: "python-en-function-calendar-htmlcalendar"
language: "python"
lang: "en"
category: "function"
name: "HTMLCalendar"
signature: "HTMLCalendar(firstweekday=0)"
directive: "class"
module: "calendar"
source_url: "https://docs.python.org/3/library/calendar.html#calendar.HTMLCalendar"
license: "PSF"
updated: "2026-10-01"
---

# HTMLCalendar

This class can be used to generate HTML calendars.

`HTMLCalendar` instances have the following methods:

method:: formatmonth(theyear, themonth, withyear=True)

method:: formatyear(theyear, width=3)

method:: formatyearpage(theyear, width=3, css='calendar.css', encoding=None)

method:: formatmonthname(theyear, themonth, withyear=True)

`HTMLCalendar` has the following attributes you can override to
customize the CSS classes used by the calendar:

attribute:: cssclasses

attribute:: cssclass_noday

attribute:: cssclasses_weekday_head

attribute:: cssclass_month_head

attribute:: cssclass_month

attribute:: cssclass_year

attribute:: cssclass_year_head

Note that although the naming for the above described class attributes is
singular (e.g. `cssclass_month` `cssclass_noday`), one can replace the
single CSS class with a space separated list of CSS classes, for example::

      "text-bold text-red"

Here is an example how `HTMLCalendar` can be customized::

    class CustomHTMLCal(calendar.HTMLCalendar):
        cssclasses = [style + " text-nowrap" for style in
                      calendar.HTMLCalendar.cssclasses]
        cssclass_month_head = "text-center month-head"
        cssclass_month = "text-center month"
        cssclass_year = "text-italic lead"
