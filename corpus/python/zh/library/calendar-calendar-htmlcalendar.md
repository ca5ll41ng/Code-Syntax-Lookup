---
id: "python-zh-function-calendar-htmlcalendar"
language: "python"
lang: "zh"
category: "function"
name: "HTMLCalendar"
signature: "HTMLCalendar(firstweekday=0)"
directive: "class"
module: "calendar"
source_url: "https://docs.python.org/zh-cn/3/library/calendar.html#calendar.HTMLCalendar"
license: "PSF"
updated: "2026-10-01"
---

# HTMLCalendar

可以使用这个类生成 HTML 日历。

:class:`!HTMLCalendar` 实例有以下方法：

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

下面是一个如何自定义  :class:`!HTMLCalendar` 的示例 ::

    class CustomHTMLCal(calendar.HTMLCalendar):
        cssclasses = [style + " text-nowrap" for style in
                      calendar.HTMLCalendar.cssclasses]
        cssclass_month_head = "text-center month-head"
        cssclass_month = "text-center month"
        cssclass_year = "text-italic lead"
