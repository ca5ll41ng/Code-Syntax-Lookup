---
id: "java-en-function-scanner-findall"
language: "java"
lang: "en"
category: "function"
name: "Scanner.findAll"
signature: "public Stream<MatchResult> findAll(Pattern pattern)"
title: "Scanner.findAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.findAll

```java
public Stream<MatchResult> findAll(Pattern pattern)
```

Returns a stream of match results from this scanner. The stream
 contains the same results in the same order that would be returned by
 calling `findWithinHorizon(pattern, 0)` and then `match`
 successively as long as `findWithinHorizon findWithinHorizon`
 finds matches.

 

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

 

As with the `findWithinHorizon findWithinHorizon` methods, this method
 might block waiting for additional input, and it might buffer an unbounded amount of
 input searching for a match.

 For example, the following code will read a file and return a list
 of all sequences of characters consisting of seven or more Latin capital
 letters:

 
```
`try (Scanner sc = new Scanner(Path.of("input.txt"))) {
     Pattern pat = Pattern.compile("[A-Z]{7,`");
     List capWords = sc.findAll(pat)
                               .map(MatchResult::group)
                               .collect(Collectors.toList());
 }
 }
```

**参数**

- **pattern** — the pattern to be matched

**返回**

- a sequential stream of match results

**异常**

- **NullPointerException** — if pattern is null
- **IllegalStateException** — if this scanner is closed

> *Since 9*
