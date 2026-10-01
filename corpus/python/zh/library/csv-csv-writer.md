---
id: "python-zh-function-csv-writer"
language: "python"
lang: "zh"
category: "function"
name: "writer"
signature: "writer(csvfile, /, dialect='excel', **fmtparams)"
directive: "function"
module: "csv"
source_url: "https://docs.python.org/zh-cn/3/library/csv.html#csv.writer"
license: "PSF"
updated: "2026-10-01"
---

# writer

Return a writer object responsible for converting the user's data into delimited
strings on the given file-like object.  *csvfile* can be any object with a
`~io.TextIOBase.write` method.  If *csvfile* is a file object, it should be opened with
`newline=''` [1]_.  An optional *dialect*
parameter can be given which is used to define a set of parameters specific to a
particular CSV dialect.  It may be an instance of a subclass of the
`Dialect` class or one of the strings returned by the
`list_dialects` function.  The other optional *fmtparams* keyword arguments
can be given to override individual formatting parameters in the current
dialect.  For full details about dialects and formatting parameters, see
the `csv-fmt-params` section. To make it
as easy as possible to interface with modules which implement the DB API, the
value `None` is written as the empty string.  While this isn't a
reversible transformation, it makes it easier to dump SQL NULL data values to
CSV files without preprocessing the data returned from a `cursor.fetch*` call.
All other non-string data are stringified with `str` before being written.

一个简短的用法示例::

   import csv
   with open('eggs.csv', 'w', newline='') as csvfile:
       spamwriter = csv.writer(csvfile, delimiter=' ',
                               quotechar='|', quoting=csv.QUOTE_MINIMAL)
       spamwriter.writerow(['Spam'] * 5 + ['Baked Beans'])
       spamwriter.writerow(['Spam', 'Lovely Spam', 'Wonderful Spam'])

这将写入 :file:`eggs.csv` 其中包含：

```text

Spam Spam Spam Spam Spam |Baked Beans|
Spam |Lovely Spam| |Wonderful Spam|
```
