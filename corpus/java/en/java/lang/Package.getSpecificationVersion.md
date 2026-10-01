---
id: "java-en-function-package-getspecificationversion"
language: "java"
lang: "en"
category: "function"
name: "Package.getSpecificationVersion"
signature: "public String getSpecificationVersion()"
title: "Package.getSpecificationVersion"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getSpecificationVersion

```java
public String getSpecificationVersion()
```

Returns the version number of the specification
 that this package implements.
 This version string must be a sequence of non-negative decimal
 integers separated by "."'s and may have leading zeros.
 When version strings are compared the most significant
 numbers are compared.

 

Specification version numbers use a syntax that consists of non-negative
 decimal integers separated by periods ".", for example "2.0" or
 "1.2.3.4.5.6.7".  This allows an extensible number to be used to represent
 major, minor, micro, etc. versions.  The version specification is described
 by the following formal grammar:
 
 
 SpecificationVersion:
 Digits RefinedVersionopt

 RefinedVersion:
 `.` Digits
 `.` Digits RefinedVersion

 Digits:
 Digit
 Digits

 Digit:
 any character for which `isDigit` returns `true`,
 e.g. 0, 1, 2, ...

**返回**

- the specification version, `null` is returned if it is not known.
