---
id: "java-en-function-scanner-tokens"
language: "java"
lang: "en"
category: "function"
name: "Scanner.tokens"
signature: "public Stream<String> tokens()"
title: "Scanner.tokens"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.tokens

```java
public Stream<String> tokens()
```

Returns a stream of delimiter-separated tokens from this scanner. The
 stream contains the same tokens that would be returned, starting from
 this scanner's current state, by calling the `next` method
 repeatedly until the `hasNext` method returns false.

 

The resulting stream is sequential and ordered. All stream elements are
 non-null.

 

Scanning starts upon initiation of the terminal stream operation, using the
 current state of this scanner. Subsequent calls to any methods on this scanner
 other than `close` and `ioException` may return undefined results
 or may cause undefined effects on the returned stream. The returned stream's source
 `Spliterator` is fail-fast and will, on a best-effort basis, throw a
 `java.util.ConcurrentModificationException` if any such calls are detected
 during stream pipeline execution.

 

After stream pipeline execution completes, this scanner is left in an indeterminate
 state and cannot be reused.

 

If this scanner contains a resource that must be released, this scanner
 should be closed, either by calling its `close` method, or by
 closing the returned stream. Closing the stream will close the underlying scanner.
 `IllegalStateException` is thrown if the scanner has been closed when this
 method is called, or if this scanner is closed during stream pipeline execution.

 

This method might block waiting for more input.

 For example, the following code will create a list of
 comma-delimited tokens from a string:

 
```
`List result = new Scanner("abc,def,,ghi")
     .useDelimiter(",")
     .tokens()
     .collect(Collectors.toList());
 `
```

 

The resulting list would contain `"abc"`, `"def"`,
 the empty string, and `"ghi"`.

**返回**

- a sequential stream of token strings

**异常**

- **IllegalStateException** — if this scanner is closed

> *Since 9*
