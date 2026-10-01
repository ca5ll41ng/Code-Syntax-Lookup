---
id: "python-zh-function-calendar-calendar"
language: "python"
lang: "zh"
category: "function"
name: "calendar"
title: "Module `datetime`"
directive: "module"
module: "calendar"
source_url: "https://docs.python.org/zh-cn/3/library/calendar.html#module-calendar"
license: "PSF"
updated: "2026-10-01"
---

# Module `datetime`

> **Seealso**
>
> Module `datetime`
>    Object-oriented interface to dates and times with similar functionality to the
>    `time` module.
>
> Module `time`
>    Low-level time related functions.
>

.. _calendar-cli:

**Command-line usage**

> *Added in 2.5*

The `calendar` module can be executed as a script from the command line
to interactively print a calendar.

```shell

python -m calendar [-h] [-L LOCALE] [-e ENCODING] [-t {text,html}]
                   [-w WIDTH] [-l LINES] [-s SPACING] [-m MONTHS] [-c CSS]
                   [-f FIRST_WEEKDAY] [year] [month]
```

例如，打印 2000 年的日历：

```console

$ python -m calendar 2000
                                  2000

      January                   February                   March
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
                1  2          1  2  3  4  5  6             1  2  3  4  5
 3  4  5  6  7  8  9       7  8  9 10 11 12 13       6  7  8  9 10 11 12
10 11 12 13 14 15 16      14 15 16 17 18 19 20      13 14 15 16 17 18 19
17 18 19 20 21 22 23      21 22 23 24 25 26 27      20 21 22 23 24 25 26
24 25 26 27 28 29 30      28 29                     27 28 29 30 31
31

       April                      May                       June
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
                1  2       1  2  3  4  5  6  7                1  2  3  4
 3  4  5  6  7  8  9       8  9 10 11 12 13 14       5  6  7  8  9 10 11
10 11 12 13 14 15 16      15 16 17 18 19 20 21      12 13 14 15 16 17 18
17 18 19 20 21 22 23      22 23 24 25 26 27 28      19 20 21 22 23 24 25
24 25 26 27 28 29 30      29 30 31                  26 27 28 29 30

        July                     August                  September
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
                1  2          1  2  3  4  5  6                   1  2  3
 3  4  5  6  7  8  9       7  8  9 10 11 12 13       4  5  6  7  8  9 10
10 11 12 13 14 15 16      14 15 16 17 18 19 20      11 12 13 14 15 16 17
17 18 19 20 21 22 23      21 22 23 24 25 26 27      18 19 20 21 22 23 24
24 25 26 27 28 29 30      28 29 30 31               25 26 27 28 29 30
31

      October                   November                  December
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
                   1             1  2  3  4  5                   1  2  3
 2  3  4  5  6  7  8       6  7  8  9 10 11 12       4  5  6  7  8  9 10
 9 10 11 12 13 14 15      13 14 15 16 17 18 19      11 12 13 14 15 16 17
16 17 18 19 20 21 22      20 21 22 23 24 25 26      18 19 20 21 22 23 24
23 24 25 26 27 28 29      27 28 29 30               25 26 27 28 29 30 31
30 31
```

可以接受以下选项：

program:: calendar

option:: --help, -h

option:: --locale LOCALE, -L LOCALE

option:: --encoding ENCODING, -e ENCODING

option:: --type {text,html}, -t {text,html}

option:: --first-weekday FIRST_WEEKDAY, -f FIRST_WEEKDAY

option:: year

option:: month

*文本模式选项:*

option:: --width WIDTH, -w WIDTH

option:: --lines LINES, -l LINES

option:: --spacing SPACING, -s SPACING

option:: --months MONTHS, -m MONTHS

> *Changed in 3.14*: By default, today's date is highlighted in color and can be :ref:`controlled using environment variables <using-on-controlling-color>`.

> *Changed in 3.15*: By default, the month is now also highlighted in color, and the days of the week are also in color. This behavior can be :ref:`controlled using environment variables <using-on-controlling-color>`.

*HTML 模式选项:*

option:: --css CSS, -c CSS
