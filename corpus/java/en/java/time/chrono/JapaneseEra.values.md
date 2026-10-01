---
id: "java-en-function-japaneseera-values"
language: "java"
lang: "en"
category: "function"
name: "JapaneseEra.values"
signature: "public static JapaneseEra[] values()"
title: "JapaneseEra.values"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseEra.values

```java
public static JapaneseEra[] values()
```

Returns an array of JapaneseEras. The array may contain eras defined
 by the Japanese government beyond the known era singletons.

 

 This method may be used to iterate over the JapaneseEras as follows:
 
```

 for (JapaneseEra c : JapaneseEra.values())
     System.out.println(c);
 
```

**返回**

- an array of JapaneseEras
