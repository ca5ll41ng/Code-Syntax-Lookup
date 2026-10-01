---
id: "python-en-function-cmd-cmd-onecmd"
language: "python"
lang: "en"
category: "function"
name: "Cmd.onecmd"
signature: "Cmd.onecmd(str)"
directive: "method"
module: "cmd"
source_url: "https://docs.python.org/3/library/cmd.html#cmd.Cmd.onecmd"
license: "PSF"
updated: "2026-10-01"
---

# Cmd.onecmd

Interpret the argument as though it had been typed in response to the prompt.
This may be overridden, but should not normally need to be; see the
`precmd` and `postcmd` methods for useful execution hooks.  The
return value is a flag indicating whether interpretation of commands by the
interpreter should stop.  If there is a `do_\*` method for the command
*str*, the return value of that method is returned, otherwise the return value
from the `default` method is returned.
