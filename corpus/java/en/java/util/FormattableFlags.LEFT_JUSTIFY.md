---
id: "java-en-function-formattableflags-left_justify"
language: "java"
lang: "en"
category: "function"
name: "FormattableFlags.LEFT_JUSTIFY"
signature: "public static final int LEFT_JUSTIFY = 1<<0"
title: "FormattableFlags.LEFT_JUSTIFY"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/FormattableFlags.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FormattableFlags.LEFT_JUSTIFY

```java
public static final int LEFT_JUSTIFY = 1<<0
```

Left-justifies the output.  Spaces ('&#92;u0020') will be added
 at the end of the converted value as required to fill the minimum width
 of the field.  If this flag is not set then the output will be
 right-justified.

 

 This flag corresponds to `'-'` ('&#92;u002d') in
 the format specifier.
