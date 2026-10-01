---
id: "python-en-function-csv-dictreader-f-fieldnames-none-restkey-none-restval-none"
language: "python"
lang: "en"
category: "function"
name: "DictReader(f, fieldnames=None, restkey=None, restval=None, \\"
directive: "class"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.DictReader(f, fieldnames=None, restkey=None, restval=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# DictReader(f, fieldnames=None, restkey=None, restval=None, \

Create an object that operates like a regular reader but maps the
information in each row to a `dict` whose keys are given by the
optional *fieldnames* parameter.

The *fieldnames* parameter is a `sequence`.  If *fieldnames* is
omitted, the values in the first row of file *f* will be used as the
fieldnames and will be omitted from the results. If
*fieldnames* is provided, they will be used and the first row will be
included in the results.  Regardless of how the fieldnames are determined,
the dictionary preserves their original ordering.

If a row has more fields than fieldnames, the remaining data is put in a
list and stored with the fieldname specified by *restkey* (which defaults
to `None`).  If a non-blank row has fewer fields than fieldnames, the
missing values are filled-in with the value of *restval* (which defaults
to `None`).

All other optional or keyword arguments are passed to the underlying
`reader` instance.

If the argument passed to *fieldnames* is an iterator, it will be coerced to a `list`.

> *Changed in 3.6*: Returned rows are now of type :class:`OrderedDict`.

> *Changed in 3.8*: Returned rows are now of type :class:`dict`.

A short usage example::

    >>> import csv
    >>> with open('names.csv', newline='') as csvfile:
    ...     reader = csv.DictReader(csvfile)
    ...     for row in reader:
    ...         print(row['first_name'], row['last_name'])
    ...
    Eric Idle
    John Cleese

    >>> print(row)
    {'first_name': 'John', 'last_name': 'Cleese'}

where `names.csv` contains:

```text

first_name,last_name
Eric,Idle
John,Cleese
```
