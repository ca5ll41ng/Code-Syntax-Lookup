---
id: "en-php-guide-book-parle"
language: "php"
lang: "en"
category: "guide"
name: "book.parle"
title: "Parsing and lexing"
module: "parle"
source_url: "https://www.php.net/manual/en/book.parle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parsing and lexing

Parle

 Introduction 
> This extension is *EXPERIMENTAL*. The behaviour of this extension including the names of its functions and any other documentation surrounding this extension may change without notice in a future release of PHP. This extension should be used at your own risk.

  The parle extension provides general purpose lexing and parsing facilities. The implementation is based on [these libraries]() and requires a [C++14]() capable compiler. The lexer is based on the regex matching, the parser is LALR(1). Lexers and parsers are generated on the fly and can be used immediately after they've been finalized. Parle deals with parsing and lexing, the appropriate data structures representation and processing are the implementer's task. Serialization and code generation are not supported by the extension, yet.    Lexer analysis is a process of splitting a character sequence into a list of lexemes. The lexeme list can be then used for the syntax analysis against a formal grammar. These operations are also known as lexing and parsing. This documentation doesn't aim to provide an exhaustive information on lexing and parsing. Good information in this regard is available on the numerous resources on the net. Several usage examples are included, to show the functionality. The extension is useful for PHP programmers both willing to learn or to utilize parsing and lexing. State machines and grammar parsing don't have to be implemented manually, these complex tasks are taken away by parle. Thanks to that, the development can be focused on the actual problem solving.    The common use case for parle is, when a data format is too complex to be handled by the regex matching with PCRE. The practical application is herewith wide. Be it a specific data format, a behavior modification of existing functions, even an own programming language and beyond. The helper methods such as `Parle\Lexer::dump()` to inspect the generated state machine, or `Parle\Parser::dump()` to inspect the generated grammar, are useful. The method `Parle\Parser::trace()` can also be used to track the parsing operation.
