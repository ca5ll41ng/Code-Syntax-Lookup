---
id: "python-zh-function-email-headerregistry-dateheader"
language: "python"
lang: "zh"
category: "function"
name: "DateHeader"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/zh-cn/3/library/email.headerregistry.html#email.headerregistry.DateHeader"
license: "PSF"
updated: "2026-10-01"
---

# DateHeader

RFC 5322 specifies a very specific format for dates within email headers.
The `DateHeader` parser recognizes that date format, as well as
recognizing a number of variant forms that are sometimes found "in the
wild".

这个标头类型提供了以下附加属性。

attribute:: datetime

The `decoded` value of the header is determined by formatting the
`datetime` according to the RFC 5322 rules; that is, it is set to::

    email.utils.format_datetime(self.datetime)

When creating a `DateHeader`, *value* may be
`~datetime.datetime` instance.  This means, for example, that
the following code is valid and does what one would expect::

    msg['Date'] = datetime(2011, 7, 15, 21)

Because this is a naive `datetime` it will be interpreted as a UTC
timestamp, and the resulting value will have a timezone of `-0000`.  Much
more useful is to use the `~email.utils.localtime` function from the
`~email.utils` module::

    msg['Date'] = utils.localtime()

This example sets the date header to the current time and date using
the current timezone offset.
