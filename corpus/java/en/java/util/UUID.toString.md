---
id: "java-en-function-uuid-tostring"
language: "java"
lang: "en"
category: "function"
name: "UUID.toString"
signature: "public String toString()"
title: "UUID.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.toString

```java
public String toString()
```

Returns a `String` object representing this `UUID`.

 

 The UUID string representation is as described by this BNF:
 
```

 `UUID                   =  "-"  "-"
                           "-"
                           "-"
                          
 time_low               = 4*
 time_mid               = 2*
 time_high_and_version  = 2*
 variant_and_sequence   = 2*
 node                   = 6*
 hexOctet               = 
 hexDigit               =
       "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
       | "a" | "b" | "c" | "d" | "e" | "f"
       | "A" | "B" | "C" | "D" | "E" | "F"
 `
```

**返回**

- A string representation of this `UUID`
