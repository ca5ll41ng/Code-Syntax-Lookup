---
id: "java-en-function-gatherers-scan"
language: "java"
lang: "en"
category: "function"
name: "Gatherers.scan"
signature: "public static <T, R> Gatherer<T, ?, R> scan( Supplier<R> initial, BiFunction<? super R, ? super T, ? extends R> scanner)"
title: "Gatherers.scan"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherers.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherers.scan

```java
public static <T, R> Gatherer<T, ?, R> scan( Supplier<R> initial, BiFunction<? super R, ? super T, ? extends R> scanner)
```

Returns a Gatherer that performs a Prefix Scan -- an incremental
 accumulation -- using the provided functions.  Starting with an
 initial value obtained from the `Supplier`, each subsequent
 value is obtained by applying the `BiFunction` to the current
 value and the next input element, after which the resulting value is
 produced downstream.

 

Example:
 {@snippet lang = java:
 // will contain: ["1", "12", "123", "1234", "12345", "123456", "1234567", "12345678", "123456789"]
 List numberStrings =
     Stream.of(1,2,3,4,5,6,7,8,9)
           .gather(
               Gatherers.scan(() -> "", (string, number) -> string + number)
            )
           .toList();
 }

**参数**

- **initial** — the supplier of the initial value for the scanner
- **scanner** — the function to apply for each element
- **the** — type of element which this gatherer consumes
- **the** — type of element which this gatherer produces

**返回**

- a new Gatherer which performs a prefix scan

**异常**

- **NullPointerException** — if any of the parameters are `null`
