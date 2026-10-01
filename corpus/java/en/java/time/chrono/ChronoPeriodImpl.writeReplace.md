---
id: "java-en-function-chronoperiodimpl-writereplace"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriodImpl.writeReplace"
signature: "protected Object writeReplace()"
title: "ChronoPeriodImpl.writeReplace"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriodImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriodImpl.writeReplace

```java
protected Object writeReplace()
```

Writes the Chronology using a
 dedicated serialized form.
 
```

  out.writeByte(12);  // identifies this as a ChronoPeriodImpl
  out.writeUTF(getId());  // the chronology
  out.writeInt(years);
  out.writeInt(months);
  out.writeInt(days);
 
```

**返回**

- the instance of `Ser`, not null
