---
id: "java-en-function-decimalformatsymbols-equals"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.equals"
signature: "public boolean equals(Object obj)"
title: "DecimalFormatSymbols.equals"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.equals

```java
public boolean equals(Object obj)
```

Compares the specified object with this `DecimalFormatSymbols` for equality.
 Returns true if the object is also a `DecimalFormatSymbols` and the two
 `DecimalFormatSymbols` objects represent the same set of symbols.

 identity based on `getClass()`, rather than `instanceof`.
 Therefore, in the equals methods in subclasses, no instance of this class
 should compare as equal to an instance of a subclass.

**参数**

- **obj** — object to be compared for equality

**返回**

- `true` if the specified object is equal to this `DecimalFormatSymbols`

**参见**

- Object#equals(Object)
