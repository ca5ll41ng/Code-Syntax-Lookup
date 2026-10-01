---
id: "python-zh-function-csv-sniffer"
language: "python"
lang: "zh"
category: "function"
name: "Sniffer"
signature: "Sniffer()"
directive: "class"
module: "csv"
source_url: "https://docs.python.org/zh-cn/3/library/csv.html#csv.Sniffer"
license: "PSF"
updated: "2026-10-01"
---

# Sniffer

:class:`Sniffer` 类用于推断 CSV 文件的格式。

:class:`Sniffer` 类提供了两个方法：

method:: sniff(sample, delimiters=None)

method:: has_header(sample)

> **Note**
>
> This method is a rough heuristic and may produce both false positives and
> negatives.
>

The `Sniffer` class has the following attribute:

attribute:: preferred
