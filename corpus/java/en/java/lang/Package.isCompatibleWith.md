---
id: "java-en-function-package-iscompatiblewith"
language: "java"
lang: "en"
category: "function"
name: "Package.isCompatibleWith"
signature: "public boolean isCompatibleWith(String desired) throws NumberFormatException"
title: "Package.isCompatibleWith"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.isCompatibleWith

```java
public boolean isCompatibleWith(String desired) throws NumberFormatException
```

Compare this package's specification version with a
 desired version. It returns true if
 this packages specification version number is greater than or equal
 to the desired version number. 

 Version numbers are compared by sequentially comparing corresponding
 components of the desired and specification strings.
 Each component is converted as a decimal integer and the values
 compared.
 If the specification value is greater than the desired
 value true is returned. If the value is less false is returned.
 If the values are equal the period is skipped and the next pair of
 components is compared.

**参数**

- **desired** — the version string of the desired version.

**返回**

- true if this package's version number is greater than or equal to the desired version number

**异常**

- **NumberFormatException** — if the current version is not known or the desired or current version is not of the correct dotted form.
