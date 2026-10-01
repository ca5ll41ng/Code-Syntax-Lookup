---
id: "java-en-function-formattableflags-uppercase"
language: "java"
lang: "en"
category: "function"
name: "FormattableFlags.UPPERCASE"
signature: "public static final int UPPERCASE = 1<<1"
title: "FormattableFlags.UPPERCASE"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/FormattableFlags.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FormattableFlags.UPPERCASE

```java
public static final int UPPERCASE = 1<<1
```

Converts the output to upper case according to the rules of the
 `java.util.Locale locale` given during creation of the
 `formatter` argument of the `formatTo
 formatTo` method.  The output should be equivalent the following
 invocation of `toUpperCase`

 
```

     out.toUpperCase() 
```

 

 This flag corresponds to `'S'` ('&#92;u0053') in
 the format specifier.
