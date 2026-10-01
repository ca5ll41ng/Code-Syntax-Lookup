---
id: "python-en-function-csv-sniffer"
language: "python"
lang: "en"
category: "function"
name: "Sniffer"
signature: "Sniffer()"
directive: "class"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Sniffer"
license: "PSF"
updated: "2026-10-01"
---

# Sniffer

The `Sniffer` class is used to deduce the format of a CSV file.

The `Sniffer` class provides two methods:

method:: sniff(sample, delimiters=None)

method:: has_header(sample)

> **Note**
>
> This method is a rough heuristic and may produce both false positives and
> negatives.
>

The `Sniffer` class has the following attribute:

attribute:: preferred
