---
id: "python-en-function-configparser-invalidwriteerror"
language: "python"
lang: "en"
category: "function"
name: "InvalidWriteError"
directive: "exception"
module: "configparser"
source_url: "https://docs.python.org/3/library/configparser.html#configparser.InvalidWriteError"
license: "PSF"
updated: "2026-10-01"
---

# InvalidWriteError

Exception raised when an attempted `ConfigParser.write` would not be parsed
accurately with a future `ConfigParser.read` call.

Ex: Writing a key beginning with the `ConfigParser.SECTCRE` pattern
would parse as a section header when read. Attempting to write this will raise
this exception.

> *Added in 3.14*
