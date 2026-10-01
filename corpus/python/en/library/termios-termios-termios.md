---
id: "python-en-function-termios-termios"
language: "python"
lang: "en"
category: "function"
name: "termios"
title: "Module `tty`"
directive: "module"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#module-termios"
license: "PSF"
updated: "2026-10-01"
---

# Module `tty`

> **Seealso**
>
> Module `tty`
>    Convenience functions for common terminal control operations.
>

.. _termios-example:

**Example**

Here's a function that prompts for a password with echoing turned off.  Note the
technique using a separate `tcgetattr` call and a `try` ...
`finally` statement to ensure that the old tty attributes are restored
exactly no matter what happens::

   def getpass(prompt="Password: "):
       import termios, sys
       fd = sys.stdin.fileno()
       old = termios.tcgetattr(fd)
       new = termios.tcgetattr(fd)
       new[3] = new[3] & ~termios.ECHO          # lflags
       try:
           termios.tcsetattr(fd, termios.TCSADRAIN, new)
           passwd = input(prompt)
       finally:
           termios.tcsetattr(fd, termios.TCSADRAIN, old)
       return passwd
