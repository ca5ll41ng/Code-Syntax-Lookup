---
id: "java-en-function-java-io-streamtokenizer"
language: "java"
lang: "en"
category: "function"
name: "java.io.StreamTokenizer"
title: "StreamTokenizer"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer

The `StreamTokenizer` class takes an input stream and
 parses it into "tokens", allowing the tokens to be
 read one at a time. The parsing process is controlled by a table
 and a number of flags that can be set to various states. The
 stream tokenizer can recognize identifiers, numbers, quoted
 strings, and various comment styles.
 

 Each byte read from the input stream is regarded as a character
 in the range `'\u005Cu0000'` through `'\u005Cu00FF'`.
 The character value is used to look up five possible attributes of
 the character: white space, alphabetic,
 numeric, string quote, and comment character.
 Each character can have zero or more of these attributes.
 

 In addition, an instance has four flags. These flags indicate:
 
 
- Whether line terminators are to be returned as tokens or treated
     as white space that merely separates tokens.
 
- Whether C-style comments are to be recognized and skipped.
 
- Whether C++-style comments are to be recognized and skipped.
 
- Whether the characters of identifiers are converted to lowercase.
 

 

 A typical application first constructs an instance of this class,
 sets up the syntax tables, and then repeatedly loops calling the
 `nextToken` method in each iteration of the loop until
 it returns the value `TT_EOF`.

**参见**

- java.io.StreamTokenizer#nextToken()
- java.io.StreamTokenizer#TT_EOF

> *Since 1.0*
