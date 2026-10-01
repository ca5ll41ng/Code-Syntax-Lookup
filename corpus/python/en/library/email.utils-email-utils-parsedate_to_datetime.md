---
id: "python-en-function-email-utils-parsedate_to_datetime"
language: "python"
lang: "en"
category: "function"
name: "parsedate_to_datetime"
signature: "parsedate_to_datetime(date)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.parsedate_to_datetime"
license: "PSF"
updated: "2026-10-01"
---

# parsedate_to_datetime

The inverse of `format_datetime`.  Performs the same function as
`parsedate`, but on success returns a `~datetime.datetime`;
otherwise `ValueError` is raised if *date* contains an invalid value such
as an hour greater than 23 or a timezone offset not between -24 and 24 hours.
If the input date has a timezone of `-0000`, the `datetime` will be a naive
`datetime`, and if the date is conforming to the RFCs it will represent a
time in UTC but with no indication of the actual source timezone of the
message the date comes from.  If the input date has any other valid timezone
offset, the `datetime` will be an aware `datetime` with the
corresponding a `~datetime.timezone` `~datetime.tzinfo`.

> *Added in 3.3*
