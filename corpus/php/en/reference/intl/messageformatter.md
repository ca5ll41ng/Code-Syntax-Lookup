---
id: "en-php-guide-class-messageformatter"
language: "php"
lang: "en"
category: "guide"
name: "class.messageformatter"
title: "The MessageFormatter class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.messageformatter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MessageFormatter class

MessageFormatter

   Introduction  MessageFormatter is a concrete class that enables users to produce concatenated, language-neutral messages. The methods supplied in this class are used to build all the messages that are seen by end users.    The MessageFormatter class assembles messages from various fragments (such as text fragments, numbers, and dates) supplied by the program. Because of the MessageFormatter class, the program does not need to know the order of the fragments. The class uses the formatting specifications for the fragments to assemble them into a message that is contained in a single string within a resource bundle. For example, MessageFormatter enables you to print the phrase "Finished printing x out of y files..." in a manner that still allows for flexibility in translation.    Previously, an end user message was created as a sentence and handled as a string. This procedure created problems for localizers because the sentence structure, word order, number format and so on are very different from language to language. The language-neutral way to create messages keeps each part of the message separate and provides keys to the data. Using these keys, the MessageFormatter class can concatenate the parts of the message, localize them, and display a well-formed string to the end user.    MessageFormatter takes a set of objects, formats them, and then inserts the formatted strings into the pattern at the appropriate places. Choice formats can be used in conjunction with MessageFormatter to handle plurals, match numbers, and select from an array of items. Typically, the message format will come from resources and the arguments will be dynamically set at runtime.      Class Synopsis    `MessageFormatter`         See Also    [ICU formatting documentation]()   [ICU message formatting description]()   [ICU message formatters]()   [ICU choice formatters]()
