---
id: "python-en-function-cmd-cmd-postcmd"
language: "python"
lang: "en"
category: "function"
name: "Cmd.postcmd"
signature: "Cmd.postcmd(stop, line)"
directive: "method"
module: "cmd"
source_url: "https://docs.python.org/3/library/cmd.html#cmd.Cmd.postcmd"
license: "PSF"
updated: "2026-10-01"
---

# Cmd.postcmd

Hook method executed just after a command dispatch is finished.  This method is
a stub in `Cmd`; it exists to be overridden by subclasses.  *line* is the
command line which was executed, and *stop* is a flag which indicates whether
execution will be terminated after the call to `postcmd`; this will be the
return value of the `onecmd` method.  The return value of this method will
be used as the new value for the internal flag which corresponds to *stop*;
returning false will cause interpretation to continue.
