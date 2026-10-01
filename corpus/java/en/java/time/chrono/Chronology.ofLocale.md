---
id: "java-en-function-chronology-oflocale"
language: "java"
lang: "en"
category: "function"
name: "Chronology.ofLocale"
signature: "static Chronology ofLocale(Locale locale)"
title: "Chronology.ofLocale"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.ofLocale

```java
static Chronology ofLocale(Locale locale)
```

Obtains an instance of `Chronology` from a locale.
 

 This returns a `Chronology` based on the specified locale,
 typically returning `IsoChronology`. Other calendar systems
 are only returned if they are explicitly selected within the locale.
 

 The `Locale` class provide access to a range of information useful
 for localizing an application. This includes the language and region,
 such as "en-GB" for English as used in Great Britain.
 

 The `Locale` class also supports an extension mechanism that
 can be used to identify a calendar system. The mechanism is a form
 of key-value pairs, where the calendar system has the key "ca".
 For example, the locale "en-JP-u-ca-japanese" represents the English
 language as used in Japan with the Japanese calendar system.
 

 This method finds the desired calendar system in a manner equivalent
 to passing "ca" to `getUnicodeLocaleType`.
 If the "ca" key is not present, then `IsoChronology` is returned.
 

 Note that the behavior of this method differs from the older
 `getInstance` method.
 If that method receives a locale of "th_TH" it will return `BuddhistCalendar`.
 By contrast, this method will return `IsoChronology`.
 Passing the locale "th-TH-u-ca-buddhist" into either method will
 result in the Thai Buddhist calendar system and is therefore the
 recommended approach going forward for Thai calendar system localization.
 

 A similar, but simpler, situation occurs for the Japanese calendar system.
 The locale "jp_JP_JP" has previously been used to access the calendar.
 However, unlike the Thai locale, "ja_JP_JP" is automatically converted by
 `Locale` to the modern and recommended form of "ja-JP-u-ca-japanese".
 Thus, there is no difference in behavior between this method and
 `Calendar#getInstance(Locale)`.

**参数**

- **locale** — the locale to use to obtain the calendar system, not null

**返回**

- the calendar system associated with the locale, not null

**异常**

- **DateTimeException** — if the locale-specified calendar cannot be found
