---
id: "python-en-function-csv-csv"
language: "python"
lang: "en"
category: "function"
name: "csv"
title: "Examples"
directive: "module"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#module-csv"
license: "PSF"
updated: "2026-10-01"
---

# Examples

.. _csv-examples:

**Examples**

The simplest example of reading a CSV file::

   import csv
   with open('some.csv', newline='') as f:
       reader = csv.reader(f)
       for row in reader:
           print(row)

Reading a file with an alternate format::

   import csv
   with open('passwd', newline='') as f:
       reader = csv.reader(f, delimiter=':', quoting=csv.QUOTE_NONE)
       for row in reader:
           print(row)

The corresponding simplest possible writing example is::

   import csv
   with open('some.csv', 'w', newline='') as f:
       writer = csv.writer(f)
       writer.writerows(someiterable)

Since `open` is used to open a CSV file for reading, the file
will by default be decoded into Unicode using UTF-8.  To decode a file
using a different encoding, use the `encoding` argument of open::

   import csv
   with open('some.csv', newline='', encoding='latin-1') as f:
       reader = csv.reader(f)
       for row in reader:
           print(row)

The same applies to writing in something other than the default
encoding: specify the encoding argument when opening the output file.

Registering a new dialect::

   import csv
   csv.register_dialect('unixpwd', delimiter=':', quoting=csv.QUOTE_NONE)
   with open('passwd', newline='') as f:
       reader = csv.reader(f, 'unixpwd')

A slightly more advanced use of the reader --- catching and reporting errors::

   import csv, sys
   filename = 'some.csv'
   with open(filename, newline='') as f:
       reader = csv.reader(f)
       try:
           for row in reader:
               print(row)
       except csv.Error as e:
           sys.exit(f'file {filename}, line {reader.line_num}: {e}')

And while the module doesn't directly support parsing strings, it can easily be
done::

   import csv
   for row in csv.reader(['one,two,three']):
       print(row)

#### Footnotes

.. [1] If `newline=''` is not specified, newlines embedded inside quoted fields
   will not be interpreted correctly, and on platforms that use `\r\n` line endings
   on write an extra `\r` will be added.  It should always be safe to specify
   `newline=''`, since the csv module does its own
   (`universal`) newline handling.
