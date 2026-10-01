---
id: "java-en-function-string-getbytes"
language: "java"
lang: "en"
category: "function"
name: "String.getBytes"
signature: "public void getBytes(int srcBegin, int srcEnd, byte[] dst, int dstBegin)"
title: "String.getBytes"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.getBytes

```java
public void getBytes(int srcBegin, int srcEnd, byte[] dst, int dstBegin)
```

Copies characters from this string into the destination byte array. Each
 byte receives the 8 low-order bits of the corresponding character. The
 eight high-order bits of each character are not copied and do not
 participate in the transfer in any way.

 

 The first character to be copied is at index `srcBegin`; the
 last character to be copied is at index `srcEnd-1`.  The total
 number of characters to be copied is `srcEnd-srcBegin`. The
 characters, converted to bytes, are copied into the subarray of `dst` starting at index `dstBegin` and ending at index:

 
```

     dstBegin + (srcEnd-srcBegin) - 1
 
```

**参数**

- **srcBegin** — Index of the first character in the string to copy
- **srcEnd** — Index after the last character in the string to copy
- **dst** — The destination array
- **dstBegin** — The start offset in the destination array

**异常**

- **IndexOutOfBoundsException** — If any of the following is true:   -  `srcBegin` is negative  -  `srcBegin` is greater than `srcEnd`  -  `srcEnd` is greater than the length of this String  -  `dstBegin` is negative  -  `dstBegin+(srcEnd-srcBegin)` is larger than `dst.length`

> **⚠ Deprecated** — This method does not properly convert characters into bytes.  As of JDK&nbsp;1.1, the preferred way to do this is via the `getBytes` method, which uses the `defaultCharset() default charset`.
