---
id: "zh-php-guide-book-datetime"
language: "php"
lang: "zh"
category: "guide"
name: "book.datetime"
title: "日期和时间"
module: "datetime"
source_url: "https://www.php.net/manual/zh/book.datetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 日期和时间

日期/时间

 {{{ preface 

 简介  `DateTimeImmutable` 和关联类允许表示日期/时间信息。通过传递字符串表述的日期/时间信息或从当前系统时间来创建这些对象。    还提供了丰富的方法来修改和格式化这些信息，包括处理时区和 DST（夏令时）转换。    PHP 中的日期/时间功能实现了 ISO 8601 历法，这是[前公历]()，实现了公历之前的当前闰日规则，并且还包括 `0` 年作为介于两者之间的年份——`公元前 1 年`和`公元 1 年`。不支持闰秒。    日期和时间信息在内部是以 64 位数字存储的，所以支持所有可能有用的日期（包括负数年份）。其范围覆盖当前时间前后 2920 亿年的时间。   
> 本节中用到的时区可以从`timezones`获取。

 

 }}} 

           

 日期/时间 Error 和 Exception 
- DateError (extends Error) - DateObjectError DateRangeError
- DateException (extends Exception) - - DateInvalidOperationException - DateInvalidTimezoneException - DateMalformedIntervalStringException - DateMalformedPeriodStringException - DateMalformedStringException
