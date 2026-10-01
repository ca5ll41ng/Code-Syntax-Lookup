---
id: "python-en-function-csv-dictwriter-f-fieldnames-restval-extrasaction-raise"
language: "python"
lang: "en"
category: "function"
name: "DictWriter(f, fieldnames, restval='', extrasaction='raise', \\"
directive: "class"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.DictWriter(f, fieldnames, restval='', extrasaction='raise', \\"
license: "PSF"
updated: "2026-10-01"
---

# DictWriter(f, fieldnames, restval='', extrasaction='raise', \

Create an object which operates like a regular writer but maps dictionaries
onto output rows.  The *fieldnames* parameter is a `sequence` of keys that identify the order in which values in the
dictionary passed to the `~csvwriter.writerow` method are written to file
*f*.  The optional *restval* parameter specifies the value to be
written if the dictionary is missing a key in *fieldnames*.  If the
dictionary passed to the `~csvwriter.writerow` method contains a key not found in
*fieldnames*, the optional *extrasaction* parameter indicates what action to
take.
If it is set to `'raise'`, the default value, a `ValueError`
is raised.
If it is set to `'ignore'`, extra values in the dictionary are ignored.
Any other optional or keyword arguments are passed to the underlying
`writer` instance.

Note that unlike the `DictReader` class, the *fieldnames* parameter
of the `DictWriter` class is not optional.

If the argument passed to *fieldnames* is an iterator, it will be coerced to a `list`.

A short usage example::

    import csv

    with open('names.csv', 'w', newline='') as csvfile:
        fieldnames = ['first_name', 'last_name']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        writer.writerow({'first_name': 'Baked', 'last_name': 'Beans'})
        writer.writerow({'first_name': 'Lovely', 'last_name': 'Spam'})
        writer.writerow({'first_name': 'Wonderful', 'last_name': 'Spam'})

which writes `names.csv` containing:

```text

first_name,last_name
Baked,Beans
Lovely,Spam
Wonderful,Spam
```
