---
id: "java-en-function-ser-writeexternal"
language: "java"
lang: "en"
category: "function"
name: "Ser.writeExternal"
signature: "public void writeExternal(ObjectOutput out) throws IOException"
title: "Ser.writeExternal"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Ser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Ser.writeExternal

```java
public void writeExternal(ObjectOutput out) throws IOException
```

Implements the `Externalizable` interface to write the object.
 Each serializable class is mapped to a type that is the first byte
 in the stream.  Refer to each class `writeReplace`
 serialized form for the value of the type and sequence of values for the type.
 
 
- HijrahChronology.writeReplace
 
- IsoChronology.writeReplace
 
- JapaneseChronology.writeReplace
 
- MinguoChronology.writeReplace
 
- ThaiBuddhistChronology.writeReplace
 
- ChronoLocalDateTime.writeReplace
 
- ChronoZonedDateTime.writeReplace
 
- JapaneseDate.writeReplace
 
- JapaneseEra.writeReplace
 
- HijrahDate.writeReplace
 
- MinguoDate.writeReplace
 
- ThaiBuddhistDate.writeReplace

**参数**

- **out** — the data stream to write to, not null
