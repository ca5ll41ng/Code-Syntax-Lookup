---
id: "python-en-function-getopt-getopterror"
language: "python"
lang: "en"
category: "function"
name: "GetoptError"
directive: "exception"
module: "getopt"
source_url: "https://docs.python.org/3/library/getopt.html#getopt.GetoptError"
license: "PSF"
updated: "2026-10-01"
---

# GetoptError

This is raised when an unrecognized option is found in the argument list or when
an option requiring an argument is given none. The argument to the exception is
a string indicating the cause of the error.  For long options, an argument given
to an option which does not require one will also cause this exception to be
raised.  The attributes `msg` and `opt` give the error message and
related option; if there is no specific option to which the exception relates,
`opt` is an empty string.
