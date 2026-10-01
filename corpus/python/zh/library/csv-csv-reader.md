---
id: "python-zh-function-csv-reader"
language: "python"
lang: "zh"
category: "function"
name: "reader"
signature: "reader(csvfile, /, dialect='excel', **fmtparams)"
directive: "function"
module: "csv"
source_url: "https://docs.python.org/zh-cn/3/library/csv.html#csv.reader"
license: "PSF"
updated: "2026-10-01"
---

# reader

Return a `reader object` that will process
lines from the given *csvfile*.  A csvfile must be an iterable of
strings, each in the reader's defined csv format.
A csvfile is most commonly a file-like object or list.
If *csvfile* is a file object,
it should be opened with `newline=''`. [1]_  An optional
*dialect* parameter can be given which is used to define a set of parameters
specific to a particular CSV dialect.  It may be an instance of a subclass of
the `Dialect` class or one of the strings returned by the
`list_dialects` function.  The other optional *fmtparams* keyword arguments
can be given to override individual formatting parameters in the current
dialect.  For full details about the dialect and formatting parameters, see
section `csv-fmt-params`.

Each row read from the csv file is returned as a list of strings.  No
automatic data type conversion is performed unless the `QUOTE_NONNUMERIC` format
option is specified (in which case unquoted fields are transformed into floats).

一个简短的用法示例::

   >>> import csv
   >>> with open('eggs.csv', newline='') as csvfile:
   ...     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
   ...     for row in spamreader:
   ...         print(', '.join(row))
   Spam, Spam, Spam, Spam, Spam, Baked Beans
   Spam, Lovely Spam, Wonderful Spam

其中 :file:`eggs.csv` 包含：

```text

Spam Spam Spam Spam Spam |Baked Beans|
Spam |Lovely Spam| |Wonderful Spam|
```
