---
id: "zh-php-function-function-strftime"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "strftime"
title: "根据区域设置格式化本地时间/日期"
signature: "#[\\Deprecated] string|false strftime(string $format, int|null $timestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.strftime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据区域设置格式化本地时间/日期

## 说明

```php
#[\Deprecated] string|false strftime(string $format, int|null $timestamp = null)
```

返回用给定的格式字串对给出的 `$timestamp` 进行格式输出后的字符串。如果没有给出时间戳则用当前的本地时间。月份和星期几以及其它和语言有关的字符串写法和用 `setlocale()` 设定的当前的区域有关。

> 可能不是所有的转换标记都被 C 库文件支持，这种情况下 PHP 的 `strftime()` 也不支持。此外，不是所有的平台都支持负的时间戳，因此日期的范围可能限定在不早于 Unix 纪元。这意味着例如 %e, %T，%R 和 %D（可能更多）以及早于 `Jan 1, 1970` 的时间在 Windows，一些 Linux 发行版本，以及其它几个操作系统中无效。对于 Windows 系统，所支持的转换标记可在 [MSDN 网站]()找到。 Instead use the `IntlDateFormatter::format()` method.

## 参数

- **`$format`** — | `$格式` | 描述 | 返回值示例 | | --- | --- | --- | | *日* | --- | --- | | `%a` | 当前区域星期几的简写 | `Sun` 到 `Sat` | | `%A` | 当前区域星期几的全称 | `Sunday` 到 `Saturday` | | `%d` | 月份中的第几天，十进制数字（范围从 01 到 31） | `01` 到 `31` | | `%e` | 月份中的第几天，十进制数字，一位的数字前会加上一个空格（范围从 ' 1' 到 '31'） 在 Windows 上尚未按描述实现。更多信息见下方。 | `1` 到 `31` | | `%j` | 年份中的第几天，带前导零的三位十进制数（范围从 001 到 366） | `001` 到 `366` | | `%u` | 符合 ISO-8601 星期几的十进制数表达 [1,7]，1 表示星期一 | `1` (星期一) 到 `7` (星期日) | | `%w` | 星期中的第几天，星期天为 0 | `0` (星期天) 到 `6` (星期六) | | *周* | --- | --- | | `%U` | 本年的第几周，从第一周的第一个星期天作为第一天开始 | `13` (for the 13th full week of the year) | | `%V` | %V - 本年第几周的 ISO-8601:1988 格式，范围从 01 到 53，第 1 周是本年第一个至少还有 4 天的星期，星期一作为每周的第一天。（用 %G 或者 %g 作为指定时间戳相应周数的年份组成。） | `01` 到 `53` (where 53 accounts for an overlapping week) | | `%W` | 本年的第几周数，从第一周的第一个星期一作为第一天开始 | `46` (for the 46th week of the year beginning with a Monday) | | *月* | --- | --- | | `%b` | 当前区域月份的简写 | `Jan` 到 `Dec` | | `%B` | 当前区域月份的全称 | `January` 到 `December` | | `%h` | 当前区域月份的简写（%b 的别名） | `Jan` 到 `Dec` | | `%m` | 两位数的月份 | `01` (是一月份) 到 `12` (是十二月份) | | *年* | --- | --- | | `%C` | 两位数显示世纪（年份除以 100，截成整数） | `19` 是 20 世纪 | | `%g` | 2 位数的年份，符合 ISO-8601:1988 星期数（参见 %V）。和 %V 的格式和值一样，只除了如果 ISO 星期数属于前一年或者后一年，则使用那一年。 | 比如：2009年1月6日那一周是 `09`。 | | `%G` | %g 的完整四位数版本 | 比如：2009年1月3日那一周是 `2008`. | | `%y` | 两位数显示年份 | 比如： `09` 是 2009，`79` 是 1979 | | `%Y` | 四位数显示年份 | 比如： `2038` | | *时间* | --- | --- | | `%H` | 以 24 小时格式显示两位小时数 | `00` 到 `23` | | `%k` | Hour in 24-hour format, with a space preceding single digits | `0` through `23` | | `%I` | 以 12 小时格式显示两位小时数 | `01` 到 `12` | | `%l（'L' 的小写）` | 以 12 小时格式显示小时数，单个数字前含空格 | `1` 到 `12` | | `%M` | 两位的分钟数 | `00` 到 `59` | | `%p` | 指定时间的大写 “AM” 或 “PM” | 比如： 00:31 是 `AM` ，22:23 是`PM`。The exact result depends on the Operating System, and they can also return lower-case variants, or variants with dots (such as `a.m.`). | | `%P` | 指定时间的小写 “am” 或 “pm” | 比如：00:31 是 `am` ，22:23 是`pm`。Not supported by all Operating Systems. | | `%r` | 和 "%I:%M:%S %p" 一样 | 比如： 21:34:17 是 `09:34:17 PM` | | `%R` | 和 "%H:%M" 一样 | 比如： 12:35 AM 是 `00:35`，4:44 PM 是 `16:44` | | `%S` | 两位数字表示秒 | `00` 到 `59` | | `%T` | 和 "%H:%M:%S" 一样 | 比如： 09:34:17 PM 是 `21:34:17` | | `%X` | 当前区域首选的时间表示法，不包括日期 | 例如： `03:59:16` 或 `15:59:16` | | `%z` | The time zone offset. Not implemented as described on Windows. See below for more information. | Example: `-0500` for US Eastern Time | | `%Z` | The time zone abbreviation. Not implemented as described on Windows. See below for more information. | Example: `EST` for Eastern Time | | *时间和日期戳* | --- | --- | | `%c` | 当前区域设置首选的日期时间表达 | 比如： 2009 年 2 月 5 日上午 12:45:10 是 `Tue Feb 5 00:45:10 2009` | | `%D` | 和 "%m/%d/%y" 一样 | 比如： 2009 年 2 月 5 日是 `02/05/09` | | `%F` | Same as "%Y-%m-%d" (commonly used in database datestamps) | 比如：2009 年 2 月 5 日是 `2009-02-05` | | `%s` | Unix纪元的时间戳（和 `time()` 函数一样） | 比如： 1979 年 9 月 10 日上午 8 点 40 分 00 秒是 `305815200` | | `%x` | 当前区域首选的时间表示法，不包括时间 | 比如： 2009 年 2 月 5 日是 `02/05/09` | | *其他* | --- | --- | | `%n` | 换行符("\n") | --- | | `%t` | Tab 字符("\t") | --- | | `%%` | 文字上的百分字符("%") | --- |
  > 尽管 ISO 9889:1999（当前的 C 标准）明确指出一周从星期一开始，但是 Sun Solaris 的一周似乎从星期天开始并作为 1。所以 %u 的结果也许不会和手册里描述得一样。


  > *仅针对 Windows：*
  >
  > 这个函数里 `%e` 修饰符修饰符还不能支持 Windows。为了得到这个值可以用 `%#d` 修饰符来代替。下例说明了如何写一个跨平台支持的函数。
  >
  > The `%z` and `%Z` modifiers both return the time zone name instead of the offset or abbreviation.


  > *仅针对 macOS 和 musl：*这个函数里 `%P` 修饰符还不能支持 macOS。


- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。

## 返回值

根据指定的 `$timestamp` 或未给出 timestamp 是使用当前本地时间， 返回 `$format` 格式化的字符。 月份、星期名和其他与语言相关的字符串遵守 `setlocale()` 设置的当前区域设置。 The function returns `false` if `$format` is empty, contains unsupported conversion specifiers, or if the length of the returned string would be greater than `4095`.

## 错误／异常

在每次调用日期/时间函数时，如果时区无效则会引发 `E_NOTICE` 错误。参见 `date_default_timezone_set()`。

由于输出依赖于 C 库，所以一些转换标记并不被支持。 在 Windows 上，使用未知的转换标记将导致 5 `E_WARNING` 信息，并返回 `false`。 在其他的操作系统上，你可能不能得到任何 `E_WARNING` 信息， 并且可能输出未经转换的转换标记。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$timestamp` 现在可为 null。 |

## 示例

如果你的系统里安装了各自的语言环境则下例能够正常运行。

**`strftime()` 区域示例**

```php


<?php
setlocale(LC_TIME, "C");
echo strftime("%A");
setlocale(LC_TIME, "fi_FI");
echo strftime(" in Finnish is %A,");
setlocale(LC_TIME, "fr_FR");
echo strftime(" in French %A and");
setlocale(LC_TIME, "de_DE");
echo strftime(" in German %A.\n");

    
```

**ISO 8601:1988 周数示例**

```php


<?php
/*     December 2002 / January 2003
ISOWk  M   Tu  W   Thu F   Sa  Su
----- ----------------------------
51     16  17  18  19  20  21  22
52     23  24  25  26  27  28  29
1      30  31   1   2   3   4   5
2       6   7   8   9  10  11  12
3      13  14  15  16  17  18  19   */

// 输出： 12/28/2002 - %V,%G,%Y = 52,2002,2002
echo "12/28/2002 - %V,%G,%Y = " . strftime("%V,%G,%Y", strtotime("12/28/2002")) . "\n";

// 输出： 12/30/2002 - %V,%G,%Y = 1,2003,2002
echo "12/30/2002 - %V,%G,%Y = " . strftime("%V,%G,%Y", strtotime("12/30/2002")) . "\n";

// 输出： 1/3/2003 - %V,%G,%Y = 1,2003,2003
echo "1/3/2003 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/3/2003")) . "\n";

// 输出： 1/10/2003 - %V,%G,%Y = 2,2003,2003
echo "1/10/2003 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/10/2003")) . "\n";



/*     December 2004 / January 2005
ISOWk  M   Tu  W   Thu F   Sa  Su
----- ----------------------------
51     13  14  15  16  17  18  19
52     20  21  22  23  24  25  26
53     27  28  29  30  31   1   2
1       3   4   5   6   7   8   9
2      10  11  12  13  14  15  16   */

// 输出： 12/23/2004 - %V,%G,%Y = 52,2004,2004
echo "12/23/2004 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("12/23/2004")) . "\n";

// 输出： 12/31/2004 - %V,%G,%Y = 53,2004,2004
echo "12/31/2004 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("12/31/2004")) . "\n";

// 输出： 1/2/2005 - %V,%G,%Y = 53,2004,2005
echo "1/2/2005 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/2/2005")) . "\n";

// 输出： 1/3/2005 - %V,%G,%Y = 1,2005,2005
echo "1/3/2005 - %V,%G,%Y = " . strftime("%V,%G,%Y",strtotime("1/3/2005")) . "\n";

    
```

**`%e` 修改器跨平台兼容的示例**

```php


<?php

// Jan 1: results in: '%e%1%' (%%, e, %%, %e, %%)
$format = '%%e%%%e%%';

// Check for Windows to find and replace the %e 
// modifier correctly
if (strtoupper(substr(PHP_OS, 0, 3)) == 'WIN') {
    $format = preg_replace('#(?<!%)((?:%%)*)%e#', '</refsect1>%#d', $format);
}

echo strftime($format);

    
```

**显示所有已知和未知的格式**

```php


<?php

// Describe the formats
$strftimeFormats = array(
    'A' => 'A full textual representation of the day',
    'B' => 'Full month name, based on the locale',
    'C' => 'Two digit representation of the century (year divided by 100, truncated to an integer)',
    'D' => 'Same as "%m/%d/%y"',
    'E' => '',
    'F' => 'Same as "%Y-%m-%d"',
    'G' => 'The full four-digit version of %g',
    'H' => 'Two digit representation of the hour in 24-hour format',
    'I' => 'Two digit representation of the hour in 12-hour format',
    'J' => '',
    'K' => '',
    'L' => '',
    'M' => 'Two digit representation of the minute',
    'N' => '',
    'O' => '',
    'P' => 'lower-case "am" or "pm" based on the given time',
    'Q' => '',
    'R' => 'Same as "%H:%M"',
    'S' => 'Two digit representation of the second',
    'T' => 'Same as "%H:%M:%S"',
    'U' => 'Week number of the given year, starting with the first Sunday as the first week',
    'V' => 'ISO-8601:1988 week number of the given year, starting with the first week of the year with at least 4 weekdays, with Monday being the start of the week',
    'W' => 'A numeric representation of the week of the year, starting with the first Monday as the first week',
    'X' => 'Preferred time representation based on locale, without the date',
    'Y' => 'Four digit representation for the year',
    'Z' => 'The time zone offset/abbreviation option NOT given by %z (depends on operating system)',
    'a' => 'An abbreviated textual representation of the day',
    'b' => 'Abbreviated month name, based on the locale',
    'c' => 'Preferred date and time stamp based on local',
    'd' => 'Two-digit day of the month (with leading zeros)',
    'e' => 'Day of the month, with a space preceding single digits',
    'f' => '',
    'g' => 'Two digit representation of the year going by ISO-8601:1988 standards (see %V)',
    'h' => 'Abbreviated month name, based on the locale (an alias of %b)',
    'i' => '',
    'j' => 'Day of the year, 3 digits with leading zeros',
    'k' => 'Hour in 24-hour format, with a space preceding single digits',
    'l' => 'Hour in 12-hour format, with a space preceding single digits',
    'm' => 'Two digit representation of the month',
    'n' => 'A newline character ("\n")',
    'o' => '',
    'p' => 'UPPER-CASE "AM" or "PM" based on the given time',
    'q' => '',
    'r' => 'Same as "%I:%M:%S %p"',
    's' => 'Unix Epoch Time timestamp',
    't' => 'A Tab character ("\t")',
    'u' => 'ISO-8601 numeric representation of the day of the week',
    'v' => '',
    'w' => 'Numeric representation of the day of the week',
    'x' => 'Preferred date representation based on locale, without the time',
    'y' => 'Two digit representation of the year',
    'z' => 'Either the time zone offset from UTC or the abbreviation (depends on operating system)',
    '%' => 'A literal percentage character ("%")',
);

// Results
$strftimeValues = array();

// Evaluate the formats whilst suppressing any errors
foreach ($strftimeFormats as $format => $description) {
    if (false !== ($value = @strftime("%{$format}"))) {
        $strftimeValues[$format] = $value;
    }
}

// Find the longest value
$maxValueLength = 2 + max(array_map('strlen', $strftimeValues));

// Report known formats
foreach ($strftimeValues as $format => $value) {
    echo "Known format   : '{$format}' = ", str_pad("'{$value}'", $maxValueLength), " ( {$strftimeFormats[$format]} )\n";
}

// Report unknown formats
foreach (array_diff_key($strftimeFormats, $strftimeValues) as $format => $description) {
    echo "Unknown format : '{$format}'   ", str_pad(' ', $maxValueLength), ($description ? " ( {$description} )" : ''), "\n";
}

    
```

以上示例的输出类似于：

```text


Known format   : 'A' = 'Friday'            ( A full textual representation of the day )
Known format   : 'B' = 'December'          ( Full month name, based on the locale )
Known format   : 'H' = '11'                ( Two digit representation of the hour in 24-hour format )
Known format   : 'I' = '11'                ( Two digit representation of the hour in 12-hour format )
Known format   : 'M' = '24'                ( Two digit representation of the minute )
Known format   : 'S' = '44'                ( Two digit representation of the second )
Known format   : 'U' = '48'                ( Week number of the given year, starting with the first Sunday as the first week )
Known format   : 'W' = '48'                ( A numeric representation of the week of the year, starting with the first Monday as the first week )
Known format   : 'X' = '11:24:44'          ( Preferred time representation based on locale, without the date )
Known format   : 'Y' = '2010'              ( Four digit representation for the year )
Known format   : 'Z' = 'GMT Standard Time' ( The time zone offset/abbreviation option NOT given by %z (depends on operating system) )
Known format   : 'a' = 'Fri'               ( An abbreviated textual representation of the day )
Known format   : 'b' = 'Dec'               ( Abbreviated month name, based on the locale )
Known format   : 'c' = '12/03/10 11:24:44' ( Preferred date and time stamp based on local )
Known format   : 'd' = '03'                ( Two-digit day of the month (with leading zeros) )
Known format   : 'j' = '337'               ( Day of the year, 3 digits with leading zeros )
Known format   : 'm' = '12'                ( Two digit representation of the month )
Known format   : 'p' = 'AM'                ( UPPER-CASE "AM" or "PM" based on the given time )
Known format   : 'w' = '5'                 ( Numeric representation of the day of the week )
Known format   : 'x' = '12/03/10'          ( Preferred date representation based on locale, without the time )
Known format   : 'y' = '10'                ( Two digit representation of the year )
Known format   : 'z' = 'GMT Standard Time' ( Either the time zone offset from UTC or the abbreviation (depends on operating system) )
Known format   : '%' = '%'                 ( A literal percentage character ("%") )
Unknown format : 'C'                       ( Two digit representation of the century (year divided by 100, truncated to an integer) )
Unknown format : 'D'                       ( Same as "%m/%d/%y" )
Unknown format : 'E'
Unknown format : 'F'                       ( Same as "%Y-%m-%d" )
Unknown format : 'G'                       ( The full four-digit version of %g )
Unknown format : 'J'
Unknown format : 'K'
Unknown format : 'L'
Unknown format : 'N'
Unknown format : 'O'
Unknown format : 'P'                       ( lower-case "am" or "pm" based on the given time )
Unknown format : 'Q'
Unknown format : 'R'                       ( Same as "%H:%M" )
Unknown format : 'T'                       ( Same as "%H:%M:%S" )
Unknown format : 'V'                       ( ISO-8601:1988 week number of the given year, starting with the first week of the year with at least 4 weekdays, with Monday being the start of the week )
Unknown format : 'e'                       ( Day of the month, with a space preceding single digits )
Unknown format : 'f'
Unknown format : 'g'                       ( Two digit representation of the year going by ISO-8601:1988 standards (see %V) )
Unknown format : 'h'                       ( Abbreviated month name, based on the locale (an alias of %b) )
Unknown format : 'i'
Unknown format : 'k'                       ( Hour in 24-hour format, with a space preceding single digits )
Unknown format : 'l'                       ( Hour in 12-hour format, with a space preceding single digits )
Unknown format : 'n'                       ( A newline character ("\n") )
Unknown format : 'o'
Unknown format : 'q'
Unknown format : 'r'                       ( Same as "%I:%M:%S %p" )
Unknown format : 's'                       ( Unix Epoch Time timestamp )
Unknown format : 't'                       ( A Tab character ("\t") )
Unknown format : 'u'                       ( ISO-8601 numeric representation of the day of the week )
Unknown format : 'v'

    
```

## 注释

> %G 和 %V，如果数字编号系统未能充分理解，基于 ISO 8601:1988 的星期数可能得出未预期的结果。见上面的 %V 和以下的示例。

## 参见

`IntlDateFormatter::format()` `DateTimeInterface::format()` [Online strftime() format design tool]() `setlocale()` `mktime()` `strptime()` `gmstrftime()` [Open Group specification of `strftime()`]()
