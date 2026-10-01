---
id: "java-en-function-java-text-bidi"
language: "java"
lang: "en"
category: "function"
name: "java.text.Bidi"
title: "Bidi"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi

This class implements the Unicode Bidirectional Algorithm.
 

 A Bidi object provides information on the bidirectional reordering of the text
 used to create it.  This is required, for example, to properly display Arabic
 or Hebrew text.  These languages are inherently mixed directional, as they order
 numbers from left-to-right while ordering most other text from right-to-left.
 

 Once created, a Bidi object can be queried to see if the text it represents is
 all left-to-right or all right-to-left.  Such objects are very lightweight and
 this text is relatively easy to process.
 

 If there are multiple runs of text, information about the runs can be accessed
 by indexing to get the start, limit, and level of a run.  The level represents
 both the direction and the 'nesting level' of a directional run.  Odd levels
 are right-to-left, while even levels are left-to-right.  So for example level
 0 represents left-to-right text, while level 1 represents right-to-left text, and
 level 2 represents left-to-right text embedded in a right-to-left run.

> *Since 1.4*
