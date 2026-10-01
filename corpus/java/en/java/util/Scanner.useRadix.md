---
id: "java-en-function-scanner-useradix"
language: "java"
lang: "en"
category: "function"
name: "Scanner.useRadix"
signature: "public Scanner useRadix(int radix)"
title: "Scanner.useRadix"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.useRadix

```java
public Scanner useRadix(int radix)
```

Sets this scanner's default radix to the specified radix.

 

A scanner's radix affects elements of its default
 number matching regular expressions; see
 localized numbers above.

 

If the radix is less than `MIN_RADIX Character.MIN_RADIX`
 or greater than `MAX_RADIX Character.MAX_RADIX`, then an
 `IllegalArgumentException` is thrown.

 

Invoking the `reset` method will set the scanner's radix to
 `10`.

**参数**

- **radix** — The radix to use when scanning numbers

**返回**

- this scanner

**异常**

- **IllegalArgumentException** — if radix is out of range
