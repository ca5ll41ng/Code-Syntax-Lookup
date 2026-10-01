---
id: "java-en-function-java-text-characteriterator"
language: "java"
lang: "en"
category: "function"
name: "java.text.CharacterIterator"
title: "CharacterIterator"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterIterator

This interface defines a protocol for bidirectional iteration over text.
 The iterator iterates over a bounded sequence of characters.  Characters
 are indexed with values beginning with the value returned by getBeginIndex() and
 continuing through the value returned by getEndIndex()-1.
 

 Iterators maintain a current character index, whose valid range is from
 getBeginIndex() to getEndIndex(); the value getEndIndex() is included to allow
 handling of zero-length text ranges and for historical reasons.
 The current index can be retrieved by calling getIndex() and set directly
 by calling setIndex(), first(), and last().
 

 The methods previous() and next() are used for iteration. They return DONE if
 they would move outside the range from getBeginIndex() to getEndIndex() -1,
 signaling that the iterator has reached the end of the sequence. DONE is
 also returned by other methods to indicate that the current index is
 outside this range.

 

Examples:

 Traverse the text from start to finish
 {@snippet lang=java :
 public void traverseForward(CharacterIterator iter) {
     for (char c = iter.first(); c != CharacterIterator.DONE; c = iter.next()) {
         processChar(c);
     }
 }
 }

 Traverse the text backwards, from end to start
 {@snippet lang=java :
 public void traverseBackward(CharacterIterator iter) {
     for (char c = iter.last(); c != CharacterIterator.DONE; c = iter.previous()) {
         processChar(c);
     }
 }
 }

 Traverse both forward and backward from a given position in the text.
 Calls to notBoundary() in this example represents some
 additional stopping criteria.
 {@snippet lang=java :
 public void traverseOut(CharacterIterator iter, int pos) {
     for (char c = iter.setIndex(pos);
              c != CharacterIterator.DONE && notBoundary(c);
              c = iter.next()) {
     }
     int end = iter.getIndex();
     for (char c = iter.setIndex(pos);
             c != CharacterIterator.DONE && notBoundary(c);
             c = iter.previous()) {
     }
     int start = iter.getIndex();
     processSection(start, end);
 }
 }

**参见**

- StringCharacterIterator
- AttributedCharacterIterator

> *Since 1.1*
