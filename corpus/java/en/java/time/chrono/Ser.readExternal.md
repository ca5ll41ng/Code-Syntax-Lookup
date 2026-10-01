---
id: "java-en-function-ser-readexternal"
language: "java"
lang: "en"
category: "function"
name: "Ser.readExternal"
signature: "public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException"
title: "Ser.readExternal"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Ser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Ser.readExternal

```java
public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException
```

Implements the `Externalizable` interface to read the object.
 The streamed type and parameters defined by the type's `writeReplace`
 method are read and passed to the corresponding static factory for the type
 to create a new instance.  That instance is returned as the de-serialized
 `Ser` object.

 
 
- HijrahChronology -
          Chronology.of(id)
 
- IsoChronology -
          Chronology.of(id)
 
- JapaneseChronology -
          Chronology.of(id)
 
- MinguoChronology -
          Chronology.of(id)
 
- ThaiBuddhistChronology -
          Chronology.of(id)
 
- ChronoLocalDateTime -
          date.atTime(time)
 
- ChronoZonedDateTime -
          dateTime.atZone(offset).withZoneSameLocal(zone)
 
- JapaneseDate -
          JapaneseChronology.INSTANCE.date(year, month, dayOfMonth)
 
- JapaneseEra -
          JapaneseEra.of(eraValue)
 
- HijrahDate -
          HijrahChronology chrono.date(year, month, dayOfMonth)
 
- MinguoDate -
          MinguoChronology.INSTANCE.date(year, month, dayOfMonth)
 
- ThaiBuddhistDate -
          ThaiBuddhistChronology.INSTANCE.date(year, month, dayOfMonth)

**参数**

- **in** — the data stream to read from, not null
