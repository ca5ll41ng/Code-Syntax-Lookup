---
id: "java-en-function-java-util-timezone"
language: "java"
lang: "en"
category: "function"
name: "java.util.TimeZone"
title: "TimeZone"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone

`TimeZone` represents a time zone offset, and also figures out daylight
 savings.

 

 Typically, you get a `TimeZone` using `getDefault`
 which creates a `TimeZone` based on the time zone where the program
 is running. For example, for a program running in Japan, `getDefault`
 creates a `TimeZone` object based on Japanese Standard Time.

 

 You can also get a `TimeZone` using `getTimeZone`
 along with a time zone ID. For instance, the time zone ID for the
 U.S. Pacific Time zone is "America/Los_Angeles". So, you can get a
 U.S. Pacific Time `TimeZone` object with:
 
 {@snippet lang=java :
 TimeZone tz = TimeZone.getTimeZone("America/Los_Angeles");
 }
 
 You can use the `getAvailableIDs` method to iterate through
 all the supported time zone IDs. You can then choose a
 supported ID to get a `TimeZone`.
 If the time zone you want is not represented by one of the
 supported IDs, then a custom time zone ID can be specified to
 produce a TimeZone. The syntax of a custom time zone ID is:

 
```

 CustomID:
         `GMT` Sign Hours `:` Minutes `:` Seconds
         `GMT` Sign Hours `:` Minutes
         `GMT` Sign Hours Minutes
         `GMT` Sign Hours
 Sign: one of
         `+ -`
 Hours:
         Digit
         Digit Digit
 Minutes:
         Digit Digit
 Seconds:
         Digit Digit
 Digit: one of
         `0 1 2 3 4 5 6 7 8 9`
 
```

 Hours must be between 0 to 23 and Minutes/Seconds must be
 between 00 to 59.  For example, "GMT+10" and "GMT+0010" mean ten
 hours and ten minutes ahead of GMT, respectively.
 

 The format is locale independent and digits must be taken from the
 Basic Latin block of the Unicode standard. No daylight saving time
 transition schedule can be specified with a custom time zone ID. If
 the specified string doesn't match the syntax, `"GMT"`
 is used.
 

 When creating a `TimeZone`, the specified custom time
 zone ID is normalized in the following syntax:
 
```

 NormalizedCustomID:
         `GMT` Sign TwoDigitHours `:` Minutes [ColonSeconds]
 Sign: one of
         `+ -`
 TwoDigitHours:
         Digit Digit
 Minutes:
         Digit Digit
 ColonSeconds:
         `:` Digit Digit
 Digit: one of
         `0 1 2 3 4 5 6 7 8 9`
 
```

 For example, TimeZone.getTimeZone("GMT-8").getID() returns "GMT-08:00".
 ColonSeconds part only appears if the seconds value is non-zero.

 Three-letter time zone IDs

 For compatibility with JDK 1.1.x, some other three-letter time zone IDs
 (such as "PST", "CTT", "AST") are also supported. However, **their
 use is deprecated** because the same abbreviation is often used
 for multiple time zones (for example, "CST" could be U.S. "Central Standard
 Time" and "China Standard Time"), and the Java platform can then only
 recognize one of them. The full list of deprecated three-letter time
 zone IDs and their mappings can be viewed at `SHORT_IDS`.

**参见**

- Calendar
- GregorianCalendar
- SimpleTimeZone

> *Since 1.1*
